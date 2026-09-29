# Product Line Image Replacements — ODD Tasks

## Objective
Use all five current supplied images for their matching product lines, converting them to WebP and updating their image references and alternatives.

## Problem
The user supplied an individual PNG image for each of the five product lines. Independent verification found that the current `mampara.png` shows a shower enclosure, while the existing `mamparas.webp` depicts a different interior partition and is not derived from the current source file.

## Why
The user explicitly requested these five images be used for their matching products and converted to WebP.

## Scope
- Convert the current `C:/Users/Lenovo/Downloads/mampara.png` to `public/images/productos/mampara-ducha.webp`, then update the Mamparas product reference and alternative in `src/data/products.ts`.
- Retain the old `public/images/productos/mamparas.webp` file unmodified to avoid breaking any previous public URL.
- The other four current sources already map to these assets:
  - `puertasdecristal.png` → `public/images/productos/puertas-de-cristal.webp`
  - `divisionoficina.png` → `public/images/productos/divisiones-para-oficinas.webp`
  - `cierreterraza.png` → `public/images/productos/cierres-de-terrazas.webp`
  - `muroscortinas.png` → `public/images/productos/muros-cortinas.webp`
- Use 1200×800 WebP, quality ~82, flatten onto an opaque white canvas and `contain` the full image to avoid destructive crops in the current 3:2 ProductCard.
- Preserve product names, descriptions, features, order, Termopanel grouping, and the six-line count.
- Keep older composite WebP files in place; do not add source PNGs or commit.

## Constraints
- Do not add source PNG files to the repository.
- Do not add persistent dependencies or change `package.json`.
- Use the already available one-off `pnpm dlx sharp-cli`; separate pipeline commands with `--`.
- Back up any existing WebP destination to a unique OS-temp directory before overwriting; new paths need no backup.
- No commit unless the user explicitly asks.
- Strict TDD is not active; verify asset metadata/weight and run `pnpm build`.

## Tasks
- [x] **ODD-001 — Convert the four new product images** (done)
  - Create the doors, office-divisions, terrace-closures, and curtain-wall WebPs from their supplied source files using opaque white contain canvases.
- [x] **ODD-002 — Update four product image references and alternatives** (done)
  - Point Puertas, Divisiones, Cierres, and Muros entries to their individual assets and describe each image accurately.
  - Preserve the product copy/order, Mamparas entry, grouping, and count.
- [x] **ODD-003 — Convert and reference the current Mamparas source** (done)
  - Convert the current shower-enclosure `mampara.png` to `mampara-ducha.webp` and update only Mamparas image/imageAlt fields.
  - Retain old `mamparas.webp` unchanged.
- [x] **ODD-004 — Verify all five current source images and static routes** (done)
  - Confirm all five current PNG sources map to their matching product references, all outputs are WebP, dimensions 1200×800, smaller than source, and visually accurate.
  - Run `pnpm build` and confirm all four static routes.

## Acceptance Criteria
- Mamparas references a WebP converted from the current supplied shower-enclosure `mampara.png`; its alternative accurately describes that image.
- Puertas, Divisiones, Cierres, and Muros each use their individual supplied image as an optimized WebP.
- All five alternatives accurately describe their corresponding source images.
- The old `mamparas.webp` remains unmodified; no product data, ordering, grouping, six-line count, or page layout changes.
- `pnpm build` succeeds and generates all four static routes.

## Progress
- Converted the supplied doors, office-divisions, terrace-closures, and curtain-wall PNGs to their descriptive WebP destinations with opaque 1200×800 contain canvases.
- Updated those four product image references and alternatives; all other product fields remain unchanged.
- Parent readback and independent visual review confirmed the four new images match their respective product lines.
- Independent verification found the current `mampara.png` is a shower enclosure and does not match the existing `mamparas.webp` office partition; the existing WebP was not changed.
- Converted the current `mampara.png` to new `mampara-ducha.webp` and updated only the Mamparas `image` and `imageAlt` fields. Parent readback confirms the new output shows the supplied shower enclosure and the old WebP remains available.
- Independent final verification confirmed all five source/output mappings, alternatives, WebP dimensions/format/alpha, file-size reductions, legacy asset preservation, and a successful static build.

## Verification Evidence
- All five current source images match their product cards and image alternatives. Each active output is a 1200×800 WebP with 3 channels and no transparency, and is smaller than its PNG source:
  - Mamparas: 2,214,425 → 54,882 bytes (97.52% smaller).
  - Puertas: 1,876,033 → 43,050 bytes (97.71% smaller).
  - Divisiones: 2,209,979 → 68,122 bytes (96.92% smaller).
  - Cierres: 2,324,643 → 79,030 bytes (96.60% smaller).
  - Muros: 2,118,688 → 68,592 bytes (96.76% smaller).
- The unused previous URL `public/images/productos/mamparas.webp` remains present at 54,308 bytes.
- Parent readbacks before and after the Mamparas correction confirm all seven catalog entries retain their order, the first two retain the `Termopanel` grouping, and other product data remains unchanged.
- Final `pnpm build` passed and generated `/`, `/quienes-somos`, `/productos`, and `/contacto`.
- No browser visual test was performed.

## Next Step
None; all acceptance criteria are met.