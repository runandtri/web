# 04 — Variant 3: warm accent + surfaces

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: [02 — Warmth foundation + variant 1](./02-warmth-foundation-variant-1.md)

## What to build

The warmest option — how far "warm" can go before it starts changing the base.
Building on the foundation from slice 2, add `?warmth=3`: the same all-warm
accent as variant 2, **plus** warmer hairline dividers and a faint warm tint on
the raised cards. The page reads noticeably warmer overall while still sitting on
the dark neoprene base.

This slice depends only on the foundation (slice 2), not on slice 3 — its
`[data-warmth="3"]` block sets the warm accent itself, so it can be built
independently.

## Acceptance criteria

- [x] `?warmth=3` renders the warm accent (as in variant 2) **and** warmer
      divider lines and a faint warm tint on the raised panels
      (`neoprene-raised` surfaces).
- [x] The warm tint is subtle — the base still reads as dark, not light.
- [x] Default, `?warmth=1`, and `?warmth=2` are unaffected.
- [x] Focus outlines stay clearly visible; reduced-motion and responsiveness
      unchanged.
- [x] `npm run build` passes clean.

## Modules touched

- **Colour variables** — `src/index.css`: add a `[data-warmth="3"]` block. This
  needs two more variables beyond the foundation — one for the divider/hairline
  colour and one for the raised-panel tint — with neutral defaults on `:root`
  (equal to today's look) so only `?warmth=3` changes them.
- **Surface adoption** — point the hairline dividers (the `white/10`–style
  borders between sections and inside the Contacto grid) and the
  `neoprene-raised` panel backgrounds at those variables, so the
  `[data-warmth="3"]` block can warm them. Keep the defaults identical to the
  current values.

## Test prior art

No test runner. Verify on the dev server: `?warmth=3` warms dividers + cards on
top of the warm accent; lower levels and the default are unchanged; the page
still reads dark.

## Out of scope

- The per-section three-colour ticks — that's variant 4 (slice 5).
