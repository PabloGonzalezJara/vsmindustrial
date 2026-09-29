# Product Line Separation — ODD Tasks

## Objective
Split combined product entries into distinct product cards on `/productos`, while keeping the Termopanel group with its PVC and Aluminio options.

## Problem
The current catalog has combined cards for “Mamparas y puertas de cristal” and “Cierres de terrazas y divisiones para oficinas,” which obscures the individual services the user wants to show.

## Why
The user requested separate offerings for Mamparas, Puertas de cristal, Muros cortinas, Cierres de terrazas, and Divisiones para oficinas. They also supplied `mampara.png` for the Mamparas image.

## Scope
- Keep the two Termopanel entries grouped under `group: 'Termopanel'`.
- Replace the two combined data entries with four separate entries: Mamparas, Puertas de cristal, Cierres de terrazas, and Divisiones para oficinas; keep Muros cortinas as-is.
- Split existing copy conservatively: Mamparas covers separating/finishing interior spaces; Puertas covers connecting/finishing interiors; Cierres covers closing terraces; Divisiones covers organizing workspaces. Keep only existing feature claims.
- Convert `C:/Users/Lenovo/Downloads/mampara.png` to `public/images/productos/mamparas.webp`, 1200×800 WebP, fitting the full portrait image on a white canvas.
- Reuse the current combined image for Puertas de cristal, and reuse the existing closures/divisions image for each of those two separate cards until separate images are supplied.
- Update `/productos` to count six lines (Termopanel + five independent lines); there will be seven cards because Termopanel has two options.
- Do not modify `src/pages/index.astro`: the home featured section remains removed and the current page does not import that component.

## Constraints
- Astro static site; no client-side JavaScript or persistent new dependencies.
- Keep image files in WebP and use descriptive kebab-case names.
- Preserve all existing Termopanel fields, Muros cortinas fields, existing images, and route structure.
- No commit unless the user explicitly asks.
- Strict TDD is not active; verify via `pnpm build` and source/image inspection.

## Tasks
- [x] **ODD-001 — Convert the supplied Mamparas image** (done)
  - Convert `mampara.png` to a 1200×800 WebP using temporary `pnpm dlx sharp-cli` (no dependency changes).
  - Flatten onto white, contain the entire image, and save to `public/images/productos/mamparas.webp`.
- [x] **ODD-002 — Split the product data and update the catalog count** (done)
  - Replace the two combined entries with distinct Mamparas, Puertas de cristal, Cierres de terrazas, and Divisiones para oficinas entries.
  - Keep Muros cortinas separate and the Termopanel group unchanged.
  - Split descriptions/features conservatively and reuse existing combined images for offerings without a supplied new image.
  - Update `/productos` intro/stat to six lines; render all five non-Termopanel cards independently.
- [x] **ODD-003 — Verify catalog and static routes** (done)
  - Confirm seven product cards: two under Termopanel and five separate offerings afterward.
  - Confirm the new Mamparas WebP is valid and correctly referenced; existing combined images are correctly reused where no replacements were supplied.
  - Run `pnpm build`; confirm all four static routes.

## Acceptance Criteria
- `/productos` shows Termopanel with PVC and Aluminio, followed by individual cards for Mamparas, Puertas de cristal, Muros cortinas, Cierres de terrazas, and Divisiones para oficinas.
- No product entry combines Mamparas with Puertas or Cierres with Divisiones.
- Product copy only derives from the existing descriptions/features and introduces no invented specifications.
- `mampara.png` is included only as an optimized WebP asset; no PNG is added to the repository.
- The page reports six product lines (seven cards including both Termopanel variants) and the static build succeeds.

## Progress
- Read-only mapping confirmed the current combined entries, the Termopanel grouping, shared ProductCard behavior, and the supplied Mamparas image.
- Parent readback confirmed the homepage no longer imports or renders `FeaturedProducts`.
- Converted `mampara.png` to an opaque 1200×800 WebP at `public/images/productos/mamparas.webp`.
- Replaced the two combined catalog entries with four separate products; preserved Termopanel and Muros cortinas entries, and updated the catalog count to six lines.
- Parent source readback confirmed seven entries and existing combined images reused for offerings without new images.

## Verification Evidence
- Independent verification confirmed seven entries in order, two grouped Termopanel products, five standalone product cards, updated six-line hero, and appropriate image assignments.
- Mamparas WebP is 54,308 bytes vs 1,976,374-byte source (97.25% smaller); metadata is WebP, 1200×800, 3 channels, no alpha, and visual readback shows the full product on white.
- Independent `pnpm build` passed and generated `/`, `/quienes-somos`, `/productos`, and `/contacto`.
- Parent comparison confirmed descriptions/features were conservative splits of the combined original copy; no extra specifications were added.
- No browser visual test was performed.

## Next Step
None; all ODD tasks are complete.
