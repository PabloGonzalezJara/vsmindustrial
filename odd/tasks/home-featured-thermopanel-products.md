# Home Featured Thermopanel Products — ODD Tasks

## Objective
Replace the removed “Dónde encontrarnos” space on `/` with a “Productos destacados” section showing only the PVC and aluminum Termopanel window products.

## Problem
The homepage currently omits both the former location section and the prior FeaturedProducts section. The existing `FeaturedProducts.astro` content is stale: it promotes five lines, renders three cards, and lists remaining categories, rather than only the two Termopanel products requested.

## Why
The user asked to put a featured-products section in place of “Dónde encontrarnos” and keep the PVC and aluminum Termopanel windows as the featured items.

## Scope
- Reuse `src/components/sections/home/FeaturedProducts.astro`; update its heading/copy/CTA and render only the two products whose `group` is `Termopanel`.
- Remove the stale “También” links and five-line copy from the section.
- Import and render `FeaturedProducts` in `src/pages/index.astro` after `Certification` and before `FinalCta`.
- Preserve product data, routes, layout elsewhere, and the catalog grouping/count.

## Constraints
- Modify only the existing home page and featured-products component.
- Use existing `ProductCard` and route utilities; no new dependencies or client-side JavaScript.
- Strict TDD is not activated; verify source structure and run `pnpm build`.
- No browser test or commit unless explicitly requested.

## Tasks
- [x] **ODD-001 — Configure the featured section for Termopanel** (done)
  - Update eyebrow/title/description and CTA copy for featured PVC and aluminum Termopanel windows.
  - Filter the product data by `group === 'Termopanel'`, display exactly two cards, and remove “También” chips.
- [x] **ODD-002 — Place the section on the homepage** (done)
  - Import and render `FeaturedProducts` between `Certification` and `FinalCta`.
- [x] **ODD-003 — Verify the homepage and static build** (done)
  - Confirm only the two requested products are shown by the section logic and routes remain unchanged after `pnpm build`.

## Acceptance Criteria
- `/` has a “Productos destacados” section in the location of the former “Dónde encontrarnos” section.
- The section renders only Ventanas termopanel (PVC) and Ventanas de aluminio Termopanel.
- Both product cards link through existing catalog behavior; a “Ver todos los productos” CTA links to `/productos`.
- No unrelated content, product data, catalog count, or routes change.
- `pnpm build` succeeds and generates `/`, `/quienes-somos`, `/productos`, and `/contacto`.

## Progress
- Read `src/pages/index.astro`, the existing `FeaturedProducts.astro`, and `src/data/products.ts`.
- Confirmed the first two products already carry `group: 'Termopanel'`, so the component selects them by data rather than brittle array slicing.
- Updated `FeaturedProducts.astro` copy, CTA, and responsive two-card grid; removed the stale five-line copy and “También” list.
- Added the section to `/` after `Certification` and before `FinalCta`; parent readback confirms the requested order.

## Verification Evidence
- Parent readback confirms the section filters `group === 'Termopanel'`, uses a responsive two-column grid, and links through `sitePath('/productos')`.
- Independent verification confirms the generated homepage contains the PVC and aluminum Termopanel products and excludes all other product lines in the section.
- Astro config uses `base: '/vsmindustrial'`; therefore the built CTA is correctly `/vsmindustrial/productos/`. The initial literal-root assertion was corrected to account for the deployment base.
- `pnpm build` passed and generated `/`, `/quienes-somos`, `/productos`, and `/contacto`.
- No browser visual test was performed.

## Next Step
None; all acceptance criteria are met.