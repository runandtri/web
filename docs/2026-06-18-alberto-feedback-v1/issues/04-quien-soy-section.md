# 04 — Quién soy: new bio section + nav link

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: None — can start immediately.

## What to build

Add a new **"Quién soy"** section that introduces Berto — his professional
credentials and his athletic record — placed **between Servicios and
Deportistas**, so trust is built before the social proof and the ask. It must be
reachable from the navigation. The copy is **first person** — this is the single
deliberate first-person island; the rest of the site keeps its plural brand
voice.

Detail:

- New component `src/sections/QuienSoy.tsx`, `id="quien-soy"`. Follow the
  established section anatomy (see `src/sections/Servicios.tsx` and
  `src/sections/Deportistas.tsx`): an eyebrow row in `font-split` uppercase
  tracking with the atlantico tick
  (`<span className="h-1.5 w-1.5 bg-atlantico" />`) reading "Quién soy"; a
  `font-display` uppercase H2; body in `font-body`. Wrap blocks in `Reveal`
  (`src/components/Reveal.tsx`) for the scroll-in, consistent with other sections.
- Two content blocks that stack cleanly on mobile:
  - **Profesional:** Licenciado en Educación Física (Universidad de A Coruña);
    Entrenador nacional de triatlón; Entrenador nacional de atletismo; Máster en
    Alto Rendimiento en Deportes Cíclicos (Universidad de Murcia); Especialista en
    entrenamiento por potencia en ciclismo; +20 años de experiencia en deportes de
    resistencia.
  - **Deportiva:** 7 Ironman finalizados, incluido el Norseman; +10 maratones;
    +25 pruebas 70.3; travesías a nado; experiencia en pruebas de ultradistancia.
- Numeric / credential items use `font-split` (the "timing board" treatment of
  numbers used elsewhere on the site).
- Provide an **optional** coach-photo slot; the section must look complete with no
  photo present (don't ship an empty/broken image box).
- Insert `<QuienSoy />` in `src/App.tsx` render order **between** `<Servicios />`
  and `<Deportistas />`.
- Add `{ label: "Quién soy", href: "#quien-soy" }` to `NAV_LINKS` in
  `src/sections/Hero.tsx` (that one list drives both the desktop nav and the
  mobile menu). After "Servicios" is the natural slot.
- Soften the duplicate "+20 años" mention in `src/sections/Metodo.tsx` (the intro
  "Tras más de 20 años de experiencia…") so it's not redundant now that
  "+20 años" is canonical here.

## Acceptance criteria

- [x] A "Quién soy" section renders between Servicios and Deportistas with
      `id="quien-soy"`.
- [x] Professional + athletic blocks present with Berto's **exact** lists above;
      numbers/credentials rendered in `font-split`.
- [x] Copy is first person; eyebrow + H2 + `Reveal` match the site's section
      pattern; only existing tokens and fonts used.
- [x] Optional photo slot supported **and** the section looks complete with no
      photo.
- [x] On mobile the two blocks stack cleanly and stay readable.
- [x] "Quién soy" appears in both the desktop nav and the mobile menu; activating
      it scrolls to the section; the nav link has a visible keyboard focus state.
- [x] Loading `/#quien-soy` directly scrolls to the section (handled by the
      existing mount-time `scrollIntoView` in `App.tsx` — no change needed there).
- [x] Método's "+20 años" mention softened to avoid redundancy.
- [x] `prefers-reduced-motion` respected; `npm run build` passes clean.

## Modules touched

- New `src/sections/QuienSoy.tsx`.
- `src/App.tsx` — insert the section in render order.
- `src/sections/Hero.tsx` — add the `NAV_LINKS` entry.
- `src/sections/Metodo.tsx` — soften the "+20 años" line.
- Reuses `src/components/Reveal.tsx`.

## Test prior art

None. Verify on the dev server at desktop and mobile; tab to the new nav link and
confirm the focus ring is visible; load `/#quien-soy` directly and confirm it
scrolls to the section.

## Out of scope

- The actual coach photo asset (optional, Berto-provided) — the slot is built,
  the image is not required to ship.
- A fuller "Sobre nosotros" bio — a separate potential future section (PRD §Out
  of Scope).
- Any change to Servicios or Deportistas content beyond the render-order
  insertion.
