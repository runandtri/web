# 01 — Hero: drop the Ironman distances

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: None — can start immediately.

## What to build

The hero headline currently reads the three verbs next to Ironman distances
(`Nada. 3,8K` / `Rueda. 180K` / `Corre. 42,2K`), which pigeonholes Berto into
larga distancia. Remove the distance labels so the headline reads just:

> Nada. / Rueda. / Corre.

The three-verb stack, its `opacity: 0 → 1` fade-up animation, and mobile
legibility must all survive. The hero STATS row (`+20` / `3 Disciplinas` /
`100%`) is **left unchanged** — Berto did not flag it.

Implementation pointer: in `src/sections/Hero.tsx` the `HEADLINE` constant is an
array of `{ verb, distance }`, and each line renders the distance in a
`<span className="hidden font-split ... sm:inline">{line.distance}</span>` inside
the `flex items-baseline gap-4` headline line (wrapped in
`animate-fade-up-delay-1`). Remove the distance rendering and the now-unused
`distance` data (and the stale "Full-distance ladder" comment) cleanly.

## Acceptance criteria

- [x] The hero headline shows "Nada.", "Rueda.", "Corre." with **no** distance
      numbers at any breakpoint (mobile and desktop).
- [x] `HEADLINE` and its JSX no longer carry the distance values; no dead
      `distance` field or comment left dangling.
- [x] The headline still animates in from `opacity: 0` (the
      `animate-fade-up-delay-1` behavior is intact).
- [x] STATS row unchanged (`+20` / Años de experiencia, `3` / Disciplinas,
      `100%` / Planes a medida).
- [x] Headline stays legible and well-sized on a 360px-wide viewport.
- [x] `npm run build` passes clean (`tsc --noEmit && vite build`).
- [x] Copy stays Spanish; no design tokens or fonts added.

## Modules touched

- `src/sections/Hero.tsx` — `HEADLINE` constant + the headline `<h1>` JSX.

## Test prior art

None — the repo has no test runner (PRD §Testing Decisions). Verify with
`npm run build` plus visual QA on the dev server. Headless hero screenshots need
a delay / virtual-time budget because the headline animates from `opacity: 0`
(see CLAUDE.md §Workflow).

## Out of scope

- STATS row changes — left as-is (not flagged).
- The `?v=<key>` clip system and self-hosting the default — see
  [02](./02-hero-self-host-run-clip.md).
- The "Quién soy" nav link — see [04](./04-quien-soy-section.md).
- Extracting the inline `pickVideo` clip resolver into a tested pure module —
  intentionally deferred this round (PRD §Hero clip resolution).
