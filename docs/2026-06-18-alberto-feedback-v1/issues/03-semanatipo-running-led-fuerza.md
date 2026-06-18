# 03 — SemanaTipo: individualized, running-led week with Fuerza

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: None — can start immediately.

## What to build

Rework the "Una semana tipo" strip so it reads as **one athlete's
individualized, running-led week** in a specific season phase — not a fixed,
triathlon-only template — and so it visibly includes a strength (**Fuerza**)
session. Keep the artifact: it demonstrates the coaching product. Do **not**
remove or dilute it (CLAUDE.md calls it the signature element; the client asked
to rework, not remove — see PRD §Further Notes).

Detail (in `src/components/SemanaTipo.tsx`):

- Replace the `WEEK` data (currently a media-distance triathlon microcycle) with
  a **running-led** week: easy / quality / long runs as the spine, plus a
  **Fuerza** session, plus rest/mobility. Swim/bike may appear as cross-training,
  but running clearly leads. Keep it realistic — it's an example week, no
  invented races or stats.
- **Fuerza tick**: represent Fuerza with a **neutral** tick reusing an existing
  neutral token (e.g. a muted white such as `bg-white/40`), **not** a new brand
  color. The three discipline colors stay swim/bike/run only:
  `atlantico` = swim (`nada`), `amanecer` = bike (`rueda`), `tiza` = run
  (`corre`). Add a Fuerza entry to `LEGEND` and `DISCIPLINE_COLOR` (or equivalent)
  using that neutral tick.
- Reframe the eyebrow / intro copy to present it as *one* athlete's
  individualized week in a named season phase — built on the athlete's real life
  (trabajo, familia, horas reales), not handed off a shelf.
- Add a one-line lead-in naming the four structuring axes: **deportista,
  objetivo, momento de temporada, disponibilidad**.
- Keep the legend + tick/dot system, the 7-day grid, the `Reveal` wrappers, and
  the closing "Ejemplo —" line (reword to stay consistent if needed).

## Acceptance criteria

- [x] The week is running-led (running sessions are the clear spine) and includes
      a clearly labelled **Fuerza** session.
- [x] Fuerza uses a neutral tick from an existing token; no 4th brand color is
      introduced; `atlantico`/`amanecer`/`tiza` remain swim/bike/run only.
- [x] Copy frames it as **one athlete's individualized** week in a specific season
      phase — it no longer reads as a standardized / fixed program.
- [x] A one-line lead-in names the four axes (deportista, objetivo, momento de
      temporada, disponibilidad).
- [x] `LEGEND` includes Fuerza; the grid still renders 7 days; the `Reveal`
      scroll-in still works and respects `prefers-reduced-motion`.
- [x] Copy is Spanish in the existing **plural** brand voice; `npm run build`
      passes clean; no new tokens/fonts.

## Modules touched

- `src/components/SemanaTipo.tsx` — `WEEK`, `LEGEND`, `DISCIPLINE_COLOR`, and the
  eyebrow / intro / lead-in copy. (Rendered inside `src/sections/Metodo.tsx`.)

## Test prior art

None. Verify on the dev server at mobile and desktop. Note the grid is
`sm:grid-cols-7`, so below `sm` the days stack into a single column — check that
still reads well. Reduced motion: `Reveal` shows content immediately when
`prefers-reduced-motion: reduce` is set.

## Out of scope

- Removing the strip — explicitly kept (PRD §Further Notes).
- The Método pillars (01/02/03) and the section heading above the strip.
- The "+20 años" softening in Método — handled in
  [04](./04-quien-soy-section.md).
