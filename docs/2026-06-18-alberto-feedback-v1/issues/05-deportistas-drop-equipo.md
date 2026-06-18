# 05 — Deportistas: drop the "equipo" wording

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: None — can start immediately.

## What to build

The athletes/testimonials section currently calls itself "el equipo", implying a
staff of several coaches. The project is run by Berto alone. Remove the "equipo"
framing while keeping the section as social proof and keeping the plural brand
voice everywhere else.

Detail (in `src/sections/Deportistas.tsx`):

- Keep the eyebrow "Nuestros deportistas".
- Change the H2 from **"El equipo."** to **"Lo que dicen."**
- Reword the intro paragraph to drop **"equipo"** and **"formar parte de él"**.
  Current copy: *"Estos son algunos de los miembros de nuestro equipo de
  corredores y triatletas. Si quieres formar parte de él, ponte en contacto con
  nosotros."* Keep the plural voice ("nuestros", "nosotros") — only the team
  framing goes.
- Keep the three existing testimonial figures (Oscar Díaz, Iago Vara,
  Luis López) unchanged.

## Acceptance criteria

- [x] H2 reads "Lo que dicen." (no "El equipo.").
- [x] The intro no longer contains "equipo" or "formar parte de él"; it stays
      Spanish, stays in the plural voice, and reads naturally.
- [x] The eyebrow "Nuestros deportistas" is kept; the three figures are kept.
- [x] `npm run build` passes clean; no token/font changes.

## Modules touched

- `src/sections/Deportistas.tsx` — the H2 and the intro paragraph copy.

## Test prior art

None. Verify on the dev server.

## Out of scope

- The "Ver reseñas en Google" button — see
  [06](./06-deportistas-google-reviews-button.md).
- Any change to the testimonial content itself.
