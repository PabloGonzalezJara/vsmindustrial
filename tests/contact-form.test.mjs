import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const contactPage = readFileSync(
  fileURLToPath(new URL('../dist/contacto/index.html', import.meta.url)),
  'utf8',
);

function getForm() {
  const form = contactPage.match(/<form\b[^>]*>[\s\S]*?<\/form>/i)?.[0];
  assert.ok(form, 'the built contact page should contain a form');
  return form;
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([^\s=]+)(?:="([^"]*)")?/g)].map(([, name, value]) => [name, value ?? '']),
  );
}

function controlById(form, id) {
  const tags = form.match(/<(?:input|textarea)\b[^>]*>/gi) ?? [];
  const control = tags.find((tag) => attributes(tag).id === id);
  assert.ok(control, `the form should contain a control with id="${id}"`);
  return attributes(control);
}

test('built form submits natively to Formspree without client-side interception', () => {
  const form = getForm();
  const formTag = form.match(/<form\b[^>]*>/i)[0];
  const formAttributes = attributes(formTag);

  assert.equal(formAttributes.action, 'https://formspree.io/f/mgaokzpg');
  assert.equal(formAttributes.method.toLowerCase(), 'post');
  assert.equal('novalidate' in formAttributes, false, 'native browser validation should remain enabled');
  assert.doesNotMatch(form, /<input\b[^>]*type="file"/i);
  assert.doesNotMatch(form, /\bonsubmit\s*=/i);
  assert.doesNotMatch(form, /<script\b/i);
  assert.match(form, /<button\b[^>]*type="submit"/i);
  assert.doesNotMatch(form, /role="status"|id="form-success"/i);
  assert.match(contactPage, /Responderemos[\s\S]*consulta/i, 'the existing response expectation should remain visible');
});

test('built form has labeled, bounded fields with the intended required and autocomplete behavior', () => {
  const form = getForm();
  const labels = [...form.matchAll(/<label\b([^>]*)>([\s\S]*?)<\/label>/gi)].map(([, rawAttributes, text]) => ({
    ...attributes(`<label ${rawAttributes}>`),
    text: text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(),
  }));
  const expectedFields = [
    { id: 'contact-name', name: 'name', required: true, autocomplete: 'name' },
    { id: 'contact-email', name: 'email', required: true, autocomplete: 'email' },
    { id: 'contact-phone', name: 'phone', required: false, autocomplete: 'tel' },
    { id: 'contact-message', name: 'message', required: true, autocomplete: undefined },
  ];

  for (const field of expectedFields) {
    const control = controlById(form, field.id);
    const label = labels.find((candidate) => candidate.for === field.id);
    assert.ok(label, `${field.id} should have a visible label associated by for/id`);
    assert.match(label.text, field.required ? /obligatorio/i : /opcional/i);
    assert.equal(control.name, field.name, `${field.id} submitted field name`);
    assert.equal('required' in control, field.required, `${field.id} required state`);
    assert.ok(Number(control.maxlength) > 0, `${field.id} should limit input length`);
    if (field.autocomplete) assert.equal(control.autocomplete, field.autocomplete);
  }

  assert.equal(controlById(form, 'contact-email').type, 'email');
  assert.equal(controlById(form, 'contact-phone').type, 'tel');
  assert.equal(controlById(form, 'contact-message').rows.length > 0, true);
  assert.doesNotMatch(form, /\bpattern=/i, 'phone formatting should not be unnecessarily restrictive');
  assert.doesNotMatch(form, /<input\b[^>]*type="file"/i);
});

test('built honeypot is named for Formspree and excluded from keyboard and assistive navigation', () => {
  const form = getForm();
  const honeypotTag = (form.match(/<input\b[^>]*>/gi) ?? []).find((tag) => attributes(tag).name === '_gotcha');

  assert.ok(honeypotTag, 'the form should include Formspree’s _gotcha honeypot');
  const honeypot = attributes(honeypotTag);
  assert.equal('required' in honeypot, false);
  assert.equal(honeypot.tabindex, '-1');
  assert.doesNotMatch(form, /\sstyle=/i, 'the honeypot should not depend on inline styles');
  assert.match(
    form,
    /<div[^>]*class="[^\"]*\bhidden\b[^\"]*"[^>]*aria-hidden="true"[^>]*>[\s\S]*?<input\b[^>]*name="_gotcha"/i,
    'the honeypot should be CSS-hidden inside an aria-hidden container',
  );
});

test('built contact page exposes the form anchor below the fixed header', () => {
  const anchor = contactPage.match(/<section\b(?=[^>]*\bid="contact-form")[^>]*>/i)?.[0];

  assert.ok(anchor, 'the actual form section should expose the stable contact-form anchor');
  const anchorAttributes = attributes(anchor);
  assert.equal(anchorAttributes['aria-labelledby'], 'contact-form-title');
  assert.match(anchorAttributes.class, /\bscroll-mt-24\b/, 'the form anchor should clear the fixed header');
  assert.match(contactPage, /<h2\b[^>]*id="contact-form-title"/i, 'the existing accessible heading should remain');
});

test('built contact page defaults to the form without overriding hashes or history restoration', () => {
  const scripts = [...contactPage.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(([, body]) => body);
  const entryScript = scripts.find((body) => body.includes('contact-form'));

  assert.ok(entryScript, 'the contact page should include its local default-entry initializer');
  assert.match(entryScript, /location\.hash/, 'explicit fragment navigation should be respected');
  assert.match(entryScript, /getEntriesByType\(["']navigation["']\)/);
  assert.match(entryScript, /back_forward/, 'back/forward history navigation should preserve restored scroll');
  assert.match(entryScript, /readyState/);
  assert.match(entryScript, /DOMContentLoaded/);
  assert.match(entryScript, /scrollIntoView/);
  assert.match(entryScript, /behavior:\s*["']instant["']/);
  assert.doesNotMatch(entryScript, /autofocus|\.focus\(|scrollRestoration|preventDefault|fetch\s*\(|XMLHttpRequest/i);
});

test('built contact page keeps three contact channels in a responsive desktop row', () => {
  assert.match(contactPage, /grid gap-4 sm:grid-cols-2 lg:grid-cols-3/);
  const channelCards = contactPage.match(/<a\b(?=[^>]*class="[^"]*\brounded-2xl\b[^"]*\bborder-white\/20\b[^"]*\bbg-amber\b)[^>]*>/gi) ?? [];
  assert.equal(channelCards.length, 3, 'phone, email and WhatsApp should remain the only contact cards');
  assert.deepEqual(channelCards.map((tag) => attributes(tag).href), [
    'tel:+56972207169',
    'mailto:comunicaciones@grupovsm.cl',
    'https://wa.me/56972207169',
  ]);
  assert.match(contactPage, /break-words[^\"]*text-xl/, 'the long email should wrap within its card');
});

test('built contact page retains direct contact links', () => {
  for (const href of [
    'tel:+56972207169',
    'mailto:comunicaciones@grupovsm.cl',
    'https://wa.me/56972207169',
  ]) {
    assert.ok(contactPage.includes(`href="${href}"`), `the contact page should retain ${href}`);
  }
});
