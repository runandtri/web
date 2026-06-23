# 01 — Remove testimonials, move reviews link to Contacto

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: None — can start immediately

## What to build

Berto's "Lo que dicen" section names three athletes with quotes he actually
wrote *about* them, so on the page it reads as if the athletes are speaking —
confusing. Remove that section completely. Keep the one thing Berto asked to
keep: the Google reviews. Move that link into the Contacto section as another
contact channel, so prospective clients can still check his reviews right where
they decide to reach out.

After this slice: the "Lo que dicen" section is gone, nothing in the nav points
to it, and the Contacto grid has a new "Reseñas en Google" cell that opens the
existing Google Maps reviews page in a new tab.

## Acceptance criteria

- [x] The "Lo que dicen" / `deportistas` section no longer renders anywhere on
      the page.
- [x] The top-nav entry that linked to it (`Deportistas` → `#deportistas`) is
      removed, so there is no dead nav link or broken `#deportistas` anchor.
- [x] The Contacto channel grid shows a new "Reseñas en Google" cell with a
      star icon, styled identically to the other channels.
- [x] That cell links to the existing Google Maps reviews URL
      (`https://maps.app.goo.gl/4SkfFh2FztPdLSG36`, currently inside the
      Deportistas section) and opens in a new tab (`target="_blank"` +
      `rel="noopener noreferrer"`, like the other external channels).
- [x] The "nuestros deportistas" wording in Servicios body copy is left
      untouched (it's unrelated text, not a link).
- [x] `npm run build` passes clean (`tsc --noEmit && vite build`).

## Modules touched

- **Testimonials section** — `src/sections/Deportistas.tsx` (delete the file).
  Grab the Maps URL from it before deleting.
- **Page composition** — `src/App.tsx` (remove the `Deportistas` import and its
  `<Deportistas />` render).
- **Navigation** — `src/sections/Hero.tsx` (remove the
  `{ label: "Deportistas", href: "#deportistas" }` entry from the nav array).
- **Contact channels** — `src/sections/Contacto.tsx` (add the reviews entry to
  the `CHANNELS` array; import the `Star` icon from `lucide-react`). The
  existing render already opens `https`-prefixed hrefs in a new tab, so no
  render changes are needed beyond the new data row.

## Test prior art

No test runner in this repo. Verify by running the dev server (`npm run dev`)
and checking the live page: the section is gone, the nav no longer lists it, and
the new Contacto cell opens Google reviews. The `CHANNELS` array in
`Contacto.tsx` is the pattern to copy for the new entry.

## Out of scope

- The colour / warmth work (slices 2–5).
- Pulling actual review text onto the page — we link out, we don't transcribe.
