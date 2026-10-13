# Contact form

## Objective
Add an accessible Spanish contact form at `/vsmindustrial/contacto/` that sends inquiries through Formspree while preserving static Astro output and existing contact channels.

## Why
Visitors should send inquiries without opening an email application. Formspree processes messages without exposing mailbox credentials or requiring a custom backend.

## Authorized scope
- Required name, email and message; optional phone; no attachments.
- Public endpoint: `https://formspree.io/f/mgaokzpg`.
- Native HTML `POST`; Formspree provides hosted submission/CAPTCHA/confirmation pages. No form-submission JavaScript or `.env`. Initial T1 had no added JavaScript; the later user-authorized entry adjustment may add a minimal contact-page-only navigation script.
- Accessible labels, autocomplete, required markers, input-length limits, `_gotcha` honeypot and a concise processing/privacy notice.
- Preserve contact links, visual tokens, mobile-first layout, `/vsmindustrial` base, deployment config and other routes.
- Add focused dependency-free built-output tests and a short setup/check guide.
- New authorized extension: entering `/vsmindustrial/contacto/` without a fragment initially shows the form beneath the fixed header, not the hero. Respect explicit hash targets and normal back/forward restoration; do not autofocus an input or open the mobile keyboard.
- New authorized layout: exactly three Phone/Email/WhatsApp cards in one desktop row, preserving a readable mobile/tablet grid and long-email wrapping.
- No actual submissions, account changes, backend, uploads, installs, staging, commits, push or deployment.

## Constraints and external prerequisites
The user is configuring the recipient separately. They must verify the recipient, configure an Email action and enable CAPTCHA in Formspree. Successful email delivery and hosted CAPTCHA/confirmation are not locally proven without an authorized real submission. Browser-required and length checks are usability measures, not server-side enforcement. Formspree handles server-side processing/spam filtering.

Current `astro.config.mjs` uses GitHub Pages settings (`site` github.io; `base: /vsmindustrial`; `output: static`); switching hosting is outside this change.

## Work plan
- [x] **T1 — Implement the form with focused regression tests and setup guidance.** Status: completed. Route: delegated `gentle-ai-worker`; trigger: non-trivial page/component/test/document writes. Use meaningful test-first against built HTML: create focused `node:test` tests, build unchanged baseline, observe RED, implement, build and observe GREEN, then run type checks. Intended work-unit message: `feat(contact): add Formspree contact form`. Commit: not authorized; leave changes uncommitted.
- [x] **T2 — Independently verify rendered routes, form semantics, responsive behavior and checks.** Status: completed. Route: delegated `gentle-ai-verify` per native ASSESS plan; verification commands require a verifier. Observe test/build/check results, examine mobile/desktop rendering if tooling exists and use intercepted/mock submissions only if a browser is available. Reconcile documentation and report all limitations. Commit: not authorized.
- [x] **T3 — Add default form entry and the three-column contact-channel layout.** Status: completed. Route: delegated `gentle-ai-worker`; trigger: coordinated contact-page/component/test/guide updates. Use native stable anchor plus a minimal page-local default-entry initializer for no-hash navigation; no shared navigation churn. Observe RED for new built-output target/layout contracts before implementation, then GREEN and build/type checks. Preserve all newer unrelated dirty edits and existing channel URLs/content. Intended work-unit message: `feat(contact): show form on entry and align contact channels`. Commit: not authorized.
- [x] **T4 — Verify direct/contact-link entry, explicit anchors/history, grid and regressions.** Status: completed. Route: delegated `gentle-ai-verify` following native ASSESS. Use installed Chrome/CDP and Node only; no installs or actual submissions. Verify direct no-hash entry and navigation from another route at mobile/desktop, fixed-header clearance, explicit-hash/back-forward behavior, native form validation and three desktop cards in one row. Commit: not authorized.

## Acceptance criteria
- [x] The contact page renders a semantic labeled form using the exact HTTPS endpoint and `method=POST` without uploads or new JavaScript.
- [x] Name, email and message are required; phone is optional; email uses native email validation.
- [x] `_gotcha` is present, not required and inaccessible to keyboard/assistive navigation.
- [x] Visitors are informed about purpose, external processing and leaving the site to complete sending.
- [x] Existing phone/email/WhatsApp links and all four routes remain usable with the configured base path.
- [x] `pnpm build`, `pnpm check` and `node --test tests/contact-form.test.mjs` pass.
- [x] Mobile/desktop visual and keyboard checks pass when browser tooling is available; otherwise explicitly pending.
- [x] T1/T2 did not add repository dependencies, deployment settings, secrets, raster assets, inline styles or unnecessary scripts.
- [x] Default contact entry shows the actual form anchor beneath the header; explicit hashes and history restoration are not overridden.
- [x] Phone/email/WhatsApp form one desktop row and remain readable without overflow on mobile/tablet.
- [x] Extended regression tests, build/type checks and direct browser navigation/layout checks pass; Formspree POST remains native.

## Verification evidence
- Initial state: clean worktree, branch `main`, baseline `3eaead8`.
- Working branch: `feature/contact-form`.
- Native review switch: `off (decided by global)`; do not start review or change mode. Run read-only ASSESS after the writer and follow its verification plan.
- T1 writer `muztlcqx-2-szn9`: baseline `pnpm build` passed; `node --test tests/contact-form.test.mjs` observed RED (3 missing-form contract failures, existing-links check passed). Final build passed; GREEN 4/4 tests; `pnpm check` passed (29 files, 0 errors/warnings/hints). No separate refactor needed.
- Parent spot readback: exact native POST endpoint, labeled required name/email/message, optional phone, `_gotcha` hidden and tabindex=-1, and hosted-result/privacy notice are present. Source diff only adds import/render and updates metadata.
- Native ASSESS: `risk=unassessable` because untracked files require an explicit declaration; RDD remains off. Returned plan: writer self-verification plus independent verifier, treated as high risk. Do not stage files or alter native authority to force assessment.
- Independent verifier `muztwdhz-3-3kty`: `pnpm build`, `pnpm check`, `node --test tests/contact-form.test.mjs` (4/4) and `git diff --check` all passed. All four configured routes returned HTTP 200 on a temporary preview; sampled CSS/logo/favicon assets returned 200. Existing direct-contact links were preserved. Preview process was stopped.
- Headless Chrome screenshots at 1280px and 390px showed readable desktop split/mobile single-column form with no visible horizontal overflow. Screenshots reported outside repo under `/tmp/verify/`.
- Functional follow-up verifier `muzu39u3-4-omp7`: Node v24.19.0 plus installed Chrome/CDP, no added packages. At 390x844 and 1280x900, document/body widths matched viewport widths (no overflow). Empty form invalid; invalid email caused native typeMismatch; all required fields filled with phone empty made form valid. Actual Tab traversal followed name -> email -> phone -> message -> submit and skipped `_gotcha`. Honeypot wrapper computed display:none; focus-visible ring computed nonempty. All locally referenced src/href paths under /vsmindustrial across all four routes returned 200.
- Chrome checked the real rendered form with external Formspree requests blocked and submit prevented. No valid submit navigation was attempted. Verifier-owned browser and preview processes were stopped; no user process was touched.
- Parent visually inspected desktop and mobile full-page screenshots at `C:/tmp/verify/cdp-1280-desktop.png` and `C:/tmp/verify/cdp-390-mobile.png`; responsive layout, labels, helper text and button render correctly. CDP reports: `C:/tmp/verify/report-desktop.json` and `C:/tmp/verify/report-mobile.json`.
- Not performed: real hosted submission/CAPTCHA/confirmation, email delivery, external link/production deployment checks or full screen-reader audit. A separate mobile focus-pixel comparison was not captured; actual keyboard/computed focus and visible screenshot ring were checked. These do not represent local build/test failures.
- Real Formspree submission/CAPTCHA/confirmation and receiving-email verification remain pending human authorization/account setup.
- Formspree recipient/CAPTCHA account configuration and real email delivery: pending user action; not test-submitted.
- Commits/publication: not performed; explicit authorization required by current safety policy.

- Current extension baseline: existing dirty changes in header/footer/floating rail/home/product/company/contact surfaces were present before T3; preserve them. Current contact page already places form before ContactDetails but still has a preceding hero. Adding only an ID cannot implement no-hash default entry. `ContactDetails` has three channels and currently `sm:grid-cols-2`; add desktop 3-column behavior without changing data. T3 writer `muzxgv5b-6-w87b` implemented the page-local default entry, actual `contact-form` anchor with scroll margin, and `lg:grid-cols-3`/`min-w-0`. RED observed for three new entry/layout contracts (plus an existing stale copy assertion adjusted to current page content); GREEN 7/7 tests and build passed. `pnpm check` reported 0 errors and one pre-existing unused SectionHeading import hint. Scope diff whitespace check still failed on unchanged pre-existing trailing spaces at ContactDetails line 27 and contact page lines 50/55. Follow-up writer `muzxpqgv-7-2wn6` removed only three trailing-whitespace occurrences and the unused import from the already-touched files. Final `pnpm build`, 7/7 focused tests, `pnpm check` (0 errors/warnings/hints) and scoped `git diff --check` all pass. T3 is complete; browser entry/history/layout verification is pending T4. Native ASSESS remains unassessable due untracked scope with RDD off; follow the returned independent-verifier plan.

- T4 independent verifier `muzxth4s-8-xhbc`: build passed (four pages); 7/7 tests passed; Astro check 29 files with 0 diagnostics; scoped contact whitespace check passed. Chrome/CDP direct no-hash entry reached formTop=96px (desktop scrollY=645; mobile scrollY=696). Existing desktop/mobile Contacto links gave the same result, with no input autofocus.
- Explicit #contenido kept scrollY=0; #contact-form scrolled to formTop=96. After user scrollY=100 and leaving for home, actual history.back() restored 100 rather than resetting to form. Reduced-motion entry was stable at the same target. BFCache persistence signal and separate forward-navigation cycle were not positively observed; do not claim those exact modes were measured.
- Desktop cards had matching top coordinates and three 304px grid tracks; tablet had two 344px tracks; mobile had one 350px track. Long email stayed within card and wrapped. Native form validity and hidden honeypot remained correct, with zero Formspree requests. Four routes and sampled referenced assets returned 200. Verifier-owned processes were stopped.
- Parent inspected viewport screenshots C:/tmp/verify/t4-desktop-direct-entry.png and t4-mobile-direct-entry.png; form is initial view and desktop cards form one row. Additional evidence: t4-desktop-cards-row.png, t4-tablet-cards.png, t4-mobile-cards.png, report-t4.json.
- Out-of-scope follow-up, not modified: visible phone +56 9 5721 6357 differs from tel:+56972207169 (and current WhatsApp destination uses 56972207169). Existing unrelated Header/Hero trailing whitespace was not cleaned. No real submission/email/CAPTCHA/hosted-result, production deployment, external-link or full screen-reader checks were performed for this extension.

## Review workload
Delivery strategy: `ask-on-risk`. Forecast: approximately 300-380 authored changed lines, one coherent behavior with its tests and guide. No PR or delivery is requested. Do not minimize code or drop tests to hit the advisory size heuristic. Running commit line count: none (no commits authorized). Extension forecast: about 80-150 additional authored lines, confined to contact behavior/tests/guide. The worktree includes unrelated pre-existing edits; do not attribute their full diff to this task or publish it.

## Progress and next step
T1-T4 are complete within the authorized implementation/local-check scope. Contact route defaults to the form; three channel cards share one desktop row with mobile/tablet fallbacks. All changes remain uncommitted on feature/contact-form and unrelated dirty edits were preserved. Next: user reloads /vsmindustrial/contacto/ without a fragment to inspect the result; account setup/real delivery and the pre-existing phone/link discrepancy are separate follow-ups requiring their own authorization. Setup guide: docs/contact-form.md.
