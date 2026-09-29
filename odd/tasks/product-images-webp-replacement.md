# Product Image WebP Replacement — ODD Tasks

## Objective
Replace the current PVC and aluminum product images with the user's supplied source images, converted to lighter WebP assets.

## Problem
The current product cards use older images. The requested PNG sources are portrait-oriented while ProductCard expects a 3:2 display area and declares 1200×800 dimensions.

## Why
The user explicitly requested the supplied PVC and aluminum images be converted to WebP for lower weight and used in the matching product cards.

## Scope
- Read source files only from:
  - `C:/Users/Lenovo/Downloads/PVC.png` → PVC.
  - `C:/Users/Lenovo/Downloads/ALUMINIO.png` → Aluminio.
- Replace only the existing public WebP assets, preserving their paths:
  - `public/images/productos/ventanas-termopanel-pvc.webp`
  - `public/images/productos/ventanas-aluminio-termopanel.webp`
- Convert to 1200×800 WebP at quality ~82; fit the full portrait image within a white 3:2 canvas rather than cropping important content.
- Keep `src/data/products.ts`, `ProductCard`, and runtime dependencies unchanged because the catalog already references the target paths and declares 1200×800 image dimensions.

## Constraints
- Do not add the supplied PNG files to the repository.
- Do not add dependencies or change `package.json`.
- Preserve original WebP outputs in a temporary location for rollback before overwriting.
- No commit unless the user explicitly asks.
- Strict TDD is not active; verify image metadata/visual content, size reduction, and static build.

## Tasks
- [x] **ODD-001 — Convert and replace the PVC product image** (done)
  - Use source image `PVC.png` for PVC.
  - Write a 1200×800 WebP at quality ~82 to the existing PVC asset path.
- [x] **ODD-002 — Convert and replace the aluminum product image** (done)
  - Use source image `ALUMINIO.png` for Aluminio.
  - Write a 1200×800 WebP at quality ~82 to the existing aluminum asset path.
- [x] **ODD-003 — Verify replacements and static build** (done)
  - Confirm outputs are valid WebP, 1200×800, visually correspond to the requested products, and each is smaller than its source PNG.
  - Run `pnpm build` and confirm all four static routes remain.

## Acceptance Criteria
- PVC and Aluminio cards use the correct supplied images through their existing WebP asset paths.
- Both outputs remain 1200×800 and preserve the full source subject without destructive cropping.
- WebP assets are lighter than corresponding PNG inputs.
- `pnpm build` succeeds; no dependency or source-code changes are introduced.

## Progress
- Read-only mapping confirmed the product data already references the two target WebP paths; ProductCard uses 1200×800 dimensions and a 3:2 object-cover frame.
- The user corrected the source paths to `PVC.png` and `ALUMINIO.png`; only these were used for final outputs.
- Replaced both existing assets with 1200×800 opaque WebPs on a white contain canvas; product data paths and runtime dependencies remain unchanged.
- Preserved pre-replacement assets under `C:/Users/Lenovo/AppData/Local/Temp/vsm-product-images-webp-backup-ecGR2h` and the first-pass versions under `C:/Users/Lenovo/AppData/Local/Temp/vsm-product-images-webp-opaque-backup-GahRFE`.
- Parent image readback confirmed PVC/aluminum mapping and white canvases.

## Verification Evidence
- PVC: 19,390 bytes vs 716,359-byte `PVC.png` (97.29% smaller); WebP, 1200×800, 3 channels, no alpha.
- Aluminum: 28,528 bytes vs 1,151,408-byte `ALUMINIO.png` (97.52% smaller); WebP, 1200×800, 3 channels, no alpha.
- Independent verification confirmed each output matches its corrected source, is WebP 1200×800 with 3 channels and no alpha, and is smaller than its PNG input.
- Independent `pnpm build` passed and generated `/`, `/quienes-somos`, `/productos`, and `/contacto`.
- No browser visual test was performed.

## Next Step
None; all ODD tasks are complete.