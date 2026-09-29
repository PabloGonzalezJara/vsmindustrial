# Floating Contact Rail — ODD Tasks

## Objective
Add a persistent left-side contact rail to every site route, with direct links to VSM Industrial's Instagram, phone number, and email address.

## Problem
The existing social/contact links are only available in page content or the footer, so they are not continuously visible while browsing.

## Why
The user requested floating social/contact buttons fixed along the left side of the project.

## Scope
- Create a reusable Astro contact-rail component and render it from the shared `BaseLayout` on all routes.
- Include the exact user-provided Instagram URL, the existing phone number (`+56 9 5721 6357`), and existing contact email (`comunicaciones@grupovsm.cl`).
- Use fixed positioning at the left; present a vertical rail on desktop and a compact left-anchored layout on small screens to reduce content obstruction.
- Use the existing `#1d8eea` accent token and white icons.
- Provide accessible navigation/link names and safe external-link attributes. Keep the site static and add no client-side JavaScript or dependency.

## Constraints
- Astro + Tailwind CSS; static generation only.
- Follow existing project component and route conventions.
- No new packages.
- No commit unless the user explicitly asks.
- TDD strict mode was not active in the recent implementation context; use the repository build as the applicable functional check.

## Tasks
- [x] **ODD-001 — Implement and integrate the floating contact rail** (done)
  - Follow-up: user requested slightly larger controls; button targets are now 56×56px with 24px icons.
  - Add an accessible, responsive Astro component with Instagram, telephone, and email links.
  - Render it globally through `src/layouts/BaseLayout.astro`.
  - Keep the exact Instagram URL: `https://www.instagram.com/vsmindustrialcl?stkn=MWFwc2I2dHUwMXFzNg==`.
  - Use existing contact destinations: `tel:+56957216357` and `mailto:comunicaciones@grupovsm.cl`.
- [x] **ODD-002 — Verify static build and route coverage** (done)
  - Run `pnpm build` through the authorized verification route; user authorized `dist/` solely for generated build output.
  - Confirm all four routes generate and the floating bar is integrated once via the shared layout.

## Acceptance Criteria
- Every page using `BaseLayout` includes one persistent, fixed-left contact rail.
- Instagram opens the exact supplied URL in a new tab with safe `rel` attributes; phone and email use direct `tel:` and `mailto:` links.
- Controls are keyboard reachable, have accessible names, and use white icons on the existing `#1d8eea` accent.
- Mobile positioning remains left-anchored and does not use client-side JavaScript.
- `pnpm build` succeeds and generates `/`, `/quienes-somos`, `/productos`, and `/contacto`.

## Progress
- Explored existing shared layout and footer contact data; confirmed Instagram, phone, and email destinations.
- Created feature branch `feat/floating-contact-rail` before source edits.
- Implemented the reusable component and shared-layout integration within the authorized source paths.
- The user authorized Astro's `dist/` output solely for generated build files.
- Independent verification confirmed the links, accessibility attributes, responsive fixed positioning, and one-time shared-layout integration.
- Follow-up request increased the rail buttons from 48×48px to 56×56px and icons from 20px to 24px; final verification passed.

## Verification Evidence
- `pnpm build` passed after the final size adjustment; Astro generated `/`, `/contacto`, `/productos`, and `/quienes-somos` under `dist/`.
- All three targets are 56×56px and icons 24×24px; fixed responsive positioning and links remain intact.
- No browser visual test was performed.

## Next Step
None; all ODD tasks are complete.
