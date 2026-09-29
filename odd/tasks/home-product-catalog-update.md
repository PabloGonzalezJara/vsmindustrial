# Home Product Catalog Update — ODD Tasks

## Objective
Remove the featured-solutions section from the homepage and align the `/productos` catalog with the user's five named product lines.

## Problem
The homepage repeats a subset of product cards under “Soluciones destacadas,” while the requested product names and first descriptions need to be made consistent on the full catalog page.

## Why
The user explicitly requested removing the section from `/` and keeping/updating the five specified lines on `/productos`.

## Scope
- Remove only the `FeaturedProducts` import and render from `src/pages/index.astro`; preserve neighboring home sections.
- Update the existing product data in `src/data/products.ts`; retain the five-card static catalog and existing compatible descriptions for items 3–5.
- Preserve product image assets, categories, features, destinations, layout, and route behavior.

## Constraints
- Astro static site; no client-side JavaScript or new dependencies.
- Keep product data local and separate from presentation.
- Use Spanish copy supplied by the user for names and first two descriptions.
- No commit unless the user explicitly asks.
- Strict TDD was not active in the recent session; use the project build as the applicable functional check.

## Tasks
- [x] **ODD-001 — Remove the featured-solutions section from home** (done)
  - Remove the `FeaturedProducts` import and its render from `src/pages/index.astro`.
  - Preserve `Locations`, `FinalCta`, and all other homepage sections.
- [x] **ODD-002 — Align the five product catalog entries** (done)
  - 1. `Ventanas termopanel` — `Fabricación e instalación de ventanas de PVC.`
  - 2. `Ventanas de aluminio Termopanel` — `Fabricación e instalación de ventanas y estructuras de aluminio.`
  - 3. `Mamparas y puertas de cristal` — preserve its compatible existing description.
  - 4. `Muros cortinas` — preserve its compatible existing description.
  - 5. `Cierres de terrazas y divisiones para oficinas` — preserve its compatible existing description.
- [x] **ODD-003 — Verify routes and catalog build** (done)
  - Run `pnpm build` through the authorized verification route.
  - Confirm the home section is absent and the `/productos` data still contains five products.

## Acceptance Criteria
- `/` no longer renders “Soluciones destacadas” or its featured product cards/link.
- `/productos` renders exactly five entries with the requested names and first two descriptions.
- Existing compatible descriptions, product assets/features, page layout, and route behavior remain intact.
- `pnpm build` succeeds and generates all four static routes.

## Progress
- Read the homepage featured component, `/productos` page, and product data.
- Read-only mapping confirmed the minimal source surfaces are `src/pages/index.astro` and `src/data/products.ts`.
- Removed the FeaturedProducts import/render from the homepage and aligned the five product names and first two descriptions in `src/data/products.ts`.
- Parent source readback confirmed the requested copy and preserved fields; writer-reported build passed.

## Verification Evidence
- Writer and independent `pnpm build` runs passed; Astro generated all four static routes.
- Independent review confirmed the homepage removal, exact five product names, requested descriptions for the first two products, and ProductCard rendering.
- Parent readback confirmed the existing descriptions, images, features, and other fields for entries 3–5 were preserved.
- No browser visual test was performed.

## Next Step
None; all ODD tasks are complete.
