# Termopanel Catalog Group — ODD Tasks

## Objective
Make the `/productos` catalog easier to understand by presenting the PVC and aluminum termopanel options together under one “Termopanel” section.

## Problem
The current catalog renders five product cards in one grid. PVC and aluminum termopanel products appear as unrelated entries, even though they are variants within the Termopanel offering.

## Why
The user requested one Termopanel section containing PVC and Aluminio, while retaining the other three product lines separately.

## Scope
- Add explicit optional group metadata to the product data model and assign it to the two termopanel variants.
- Use the existing category badge for the two material labels (`PVC` and `Aluminio`). Keep product names and descriptions unchanged.
- Render the two grouped cards under “Termopanel”; render the other three cards separately after them.
- Keep ProductCard presentation shared and unchanged; preserve all five products and their fields.

## Constraints
- Astro static site; no client-side JavaScript or new dependencies.
- Group using explicit product metadata, not array positions or slugs.
- Preserve data order, product assets, links, features, and existing five-card count.
- No commit unless the user explicitly asks.
- Strict TDD is not active; verify via `pnpm build` and source/structure inspection.

## Tasks
- [x] **ODD-001 — Add explicit termopanel grouping metadata** (done)
  - Extend `src/types/product.ts` with an optional group property.
  - In `src/data/products.ts`, assign group `Termopanel` to the first two products and use `PVC` and `Aluminio` as their category labels.
  - Preserve their requested names, descriptions, and all other product fields.
- [x] **ODD-002 — Render grouped and standalone product cards** (done)
  - In `src/pages/productos/index.astro`, render a “Termopanel” subheading and the two grouped cards together.
  - Render the other three product cards individually afterward, preserving order.
  - Avoid array-index or slug-based grouping logic; do not change the shared ProductCard component.
- [x] **ODD-003 — Verify grouped catalog output** (done)
  - Run `pnpm build` through the authorized verification route.
  - Confirm exactly two products are grouped under Termopanel and the other three remain separately rendered.
  - Confirm all five products and four static routes remain.

## Acceptance Criteria
- `/productos` has one “Termopanel” group containing visible PVC and Aluminio variants.
- The three remaining lines remain individual product cards outside that group.
- Product order, names, descriptions, images, features, and contact links are preserved.
- `pnpm build` succeeds and generates all four static routes.

## Progress
- Read-only mapping confirmed `ProductCard` is shared, product grouping had no current data field, and `/productos` rendered a single grid.
- Added optional typed `group` metadata, assigned `Termopanel` to the two window variants, and set their category badges to `PVC` and `Aluminio`.
- Updated `/productos` to render the two grouped products under a “Termopanel” heading, followed by the other three standalone cards.
- Parent source readback confirmed explicit metadata filtering, order, and preservation of product details.

## Verification Evidence
- Independent source verification confirmed two Termopanel products with PVC/Aluminio badges, three ungrouped product cards, and the ProductCard category label.
- Independent `pnpm build` passed and generated `/`, `/quienes-somos`, `/productos`, and `/contacto`.
- Parent comparison confirmed the other three product entries retained their previous data.
- No browser visual test was performed.

## Next Step
None; all ODD tasks are complete.
