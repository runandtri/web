# 06 — Deportistas: "Ver reseñas en Google" button

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: [05 — Deportistas: drop the "equipo" wording](./05-deportistas-drop-equipo.md)

## What to build

Add a **"Ver reseñas en Google"** button to the Deportistas section so visitors
can verify the testimonials against Berto's real, external Google reviews. It is
an outbound link that opens in a new tab.

Detail (in `src/sections/Deportistas.tsx`):

- A link "Ver reseñas en Google" pointing at Berto's Google Maps / Business
  profile URL (see **Handoff** — this URL must come from Berto first).
- `target="_blank"` and `rel="noopener noreferrer"`.
- Style with the existing button pattern (border, `font-split` uppercase
  tracking, atlantico hover) — mirror e.g. the hero "Contacta" border button. The
  control must be keyboard-focusable with a visible focus state.
- Place it within the reworked section (after the intro, or below the figures —
  wherever it reads as "verify these for yourself").
- **Until Berto's URL is provided, do not ship a button pointing nowhere** — omit
  it entirely rather than link to a placeholder (PRD §Content assets required).

## Acceptance criteria

- [x] A "Ver reseñas en Google" control links to Berto's real Google
      Maps / Business profile.
- [x] It opens in a new tab with `rel="noopener noreferrer"`.
- [x] It uses the existing button styling (border + `font-split` + atlantico
      hover) and is keyboard-focusable with a visible focus state.
- [x] No button is shipped while the URL is unknown (omitted, not a dead or
      placeholder link).
- [x] `npm run build` passes clean; Spanish copy; no new tokens/fonts.

## Modules touched

- `src/sections/Deportistas.tsx` — add the outbound button.

## Test prior art

None. Verify on the dev server: the button is visible, opens the correct profile
in a new tab, and shows a visible focus ring when tabbed to.

## Out of scope

- A live, API-driven Google reviews embed — explicitly rejected: it needs a
  Places API key and a backend that this static, no-env site deliberately
  excludes (PRD §Deportistas, §Out of Scope).
- Any change to the testimonial content.

## Handoff

This slice **gates on a human-provided asset**: Berto's Google Maps / Business
profile URL. The button must not ship pointing nowhere. BEFORE implementing,
post the following block to the user verbatim:

- **Artefact required**: Berto's Google Maps / Business profile URL (the public
  page that shows his reviews).
- **Action required**: Berto provides the URL and confirms it is the profile he
  wants visitors driven to.
- **Where to record the decision**:
  - In `issues.md` (add a one-line note next to this slice's row), AND
  - In this file under the `Google reviews URL:` field below.

Do **not** implement the button or flip this slice's row in `issues.md` until
`Google reviews URL:` is filled.

Google reviews URL: https://maps.app.goo.gl/4SkfFh2FztPdLSG36
