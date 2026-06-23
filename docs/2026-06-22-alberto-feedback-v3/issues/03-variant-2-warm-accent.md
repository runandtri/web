# 03 — Variant 2: warm accent

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: [02 — Warmth foundation + variant 1](./02-warmth-foundation-variant-1.md)

## What to build

A clearly warmer but still simple version. Building on the foundation from slice
2, add `?warmth=2`: the whole interactive accent turns warm orange (`amanecer`)
— eyebrow ticks, hovers, focus rings, buttons — and teal (`atlantico`) recedes
to just the swim tick where it still means "swim."

This is the option that most directly answers Berto's "más alegre": one warm
colour throughout, still on the dark base.

## Acceptance criteria

- [x] `?warmth=2` reassigns the accent variable(s) so the interactive accent and
      ticks are `amanecer` (warm orange).
- [x] Teal still appears where it means swim (the swim tick / SemanaTipo strip is
      untouched), but is no longer the general UI accent under `?warmth=2`.
- [x] Default URL and `?warmth=1` are unaffected by this change.
- [x] Focus outlines stay clearly visible under `?warmth=2`; reduced-motion and
      responsiveness unchanged.
- [x] `npm run build` passes clean.

## Modules touched

- **Colour variables** — `src/index.css`: add a `[data-warmth="2"]` block that
  reassigns the accent/tick variables to `amanecer`. No component changes should
  be needed — slice 2 already pointed the components at the variables.
- If the `:focus-visible` colour in `src/index.css` is hardcoded teal rather
  than tracking the accent variable, point it at the accent variable so the
  focus ring warms with the variant (or otherwise confirm it stays clearly
  visible).

## Test prior art

No test runner. Verify on the dev server: `?warmth=2` shows an all-warm accent;
default and `?warmth=1` look the same as before; tabbing shows a visible focus
ring.

## Out of scope

- Warming the dividers / card surfaces — that's variant 3 (slice 4).
- The per-section three-colour ticks — that's variant 4 (slice 5).
