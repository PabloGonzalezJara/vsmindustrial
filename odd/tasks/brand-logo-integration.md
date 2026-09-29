# Brand Logo Integration — ODD Tasks

## Objective
Replace the hand-built text/mark in the shared site logo component with the logo artwork supplied by the user, including a transparent white variant for dark header/footer backgrounds.

## Problem
The project currently renders a temporary V-shaped mark and text instead of the supplied VSM Industrial logo.

## Why
The user asked to use `C:\Users\Lenovo\Downloads\Logo industrial.png` as the brand reference and chose a white, transparent treatment for dark surfaces.

## Scope
- Use the user-provided PNG as the conversion source; do not commit the PNG itself.
- Produce optimized WebP assets under `public/images/branding/`, preserving transparency.
- Provide the original-color transparent variant for light surfaces and a white transparent variant for dark surfaces.
- Update `src/components/ui/Logo.astro` to use the correct asset for its existing variant prop; shared header and footer use the white variant.
- Preserve accessible link naming, logo dimensions/aspect ratio, and the static Astro architecture.

## Constraints
- All raster assets committed to the project must be WebP.
- Use the already-installed Sharp package only for one-time conversion; do not add/change dependencies.
- The source PNG has a transparent canvas; preserve that alpha. The VSM letterforms are opaque white inside a dark-blue banner, so background removal/recoloring must preserve the letters. The white variant should recolor blue artwork to white and remove the blue banner fill behind `VSM` while retaining the white letterforms.
- No client-side JavaScript or new packages.
- No commit unless the user explicitly asks.
- Strict TDD is not active in the recent session; build and asset readback are the applicable checks.

## Tasks
- [x] **ODD-001 — Convert logo variants and integrate them** (done)
  - Create original-color transparent and white transparent WebP logo assets from the supplied PNG.
  - Update `src/components/ui/Logo.astro` to select the appropriate image for dark/light variants.
  - Do not add the original PNG or conversion scripts to the repository.
- [x] **ODD-002 — Inspect logo assets and verify static build** (done)
  - Build, visual preview, and independent Sharp metadata/pixel checks passed.
  - Read back the generated WebP assets to check transparency and mark legibility.
  - Run `pnpm build` through the authorized verification route and confirm all four routes generate.

## Acceptance Criteria
- Header/footer render the actual supplied VSM Industrial artwork, not the temporary V-shaped mark.
- The white variant is transparent and legible over dark backgrounds; the original-color variant remains available for light backgrounds.
- Raster files in the project are WebP; no PNG, source script, package change, or client-side JavaScript is added.
- Logo links remain accessible and point to the home route; `width`/`height` or equivalent sizing prevents layout shift.
- `pnpm build` succeeds and generates `/`, `/quienes-somos`, `/productos`, and `/contacto`.

## Progress
- Read the provided 2667×954 PNG; its canvas already has alpha transparency. Sampled logo blue is `#0f4794`.
- User selected a white transparent variant for dark surfaces.
- Generated original-color and white transparent WebP variants; the blue banner was isolated while preserving the VSM lettering and circular mark.
- Updated `src/components/ui/Logo.astro` to select the white asset for dark surfaces and original-color asset for light surfaces.

## Verification Evidence
- `pnpm build` passed; Astro generated `/`, `/contacto`, `/productos`, and `/quienes-somos` under `dist/`.
- Independent Sharp metadata confirmed both assets are WebP, 2667×954, and have alpha transparency.
- Pixel samples confirmed the original-color blue banner/mark and white VSM text; the white variant has a transparent banner, white lettering, and white circular mark.
- No browser testing was performed.

## Next Step
None; all ODD tasks are complete.
