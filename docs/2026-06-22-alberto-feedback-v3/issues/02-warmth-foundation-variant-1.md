# 02 — Warmth foundation + variant 1 (subtle ticks)

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: None — can start immediately

## What to build

Berto wants to preview warmer versions of the site without repainting it. This
slice builds the whole mechanism end-to-end and ships the gentlest variant.

Add a `?warmth=` URL switch (values `1`–`4`). On page load, read it, and if it's
a valid level, set a `data-warmth` attribute on the page root. Missing or
invalid → no attribute → today's look, unchanged.

Move the accent colours to CSS variables so a variant is just a reassignment,
not a rewrite of every section. Then ship **variant 1 (subtle)**: the small
eyebrow ticks turn warm orange (`amanecer`), while buttons, hovers and focus
outlines stay teal (`atlantico`). Keeping the interactive colour teal in the
subtlest version means the site still *behaves* the same — only a decorative
note changes.

After this slice: the default URL looks identical to before, and `?warmth=1`
shows warm ticks with teal interactions. Levels 2–4 become small add-ons on top.

## Acceptance criteria

- [x] On load, `?warmth=1`/`2`/`3`/`4` sets `data-warmth` on the document root;
      anything else (missing, `?warmth=9`, `?warmth=abc`) sets nothing.
- [x] With no `?warmth` param, the site is visually identical to the current
      live site (accent and ticks both teal).
- [x] The interactive accent and the eyebrow-tick colour are driven by CSS
      variables (e.g. `--accent`, `--tick`) whose defaults equal today's teal.
- [x] All the section eyebrow ticks and the teal interactive states (hover,
      focus, buttons) reference the variables instead of a hardcoded `atlantico`
      — **except** the SemanaTipo training-week strip, whose `atlantico` /
      `amanecer` / `tiza` blocks stay literal (their colours carry meaning).
- [x] `?warmth=1` renders the eyebrow ticks in `amanecer` (warm orange) while
      hovers, focus rings and buttons stay teal.
- [x] Focus outlines stay clearly visible (the `:focus-visible` rules in
      `src/index.css` keep a visible colour); `prefers-reduced-motion` behaviour
      is unchanged; layout stays responsive on mobile.
- [x] `?warmth=1` coexists with the hero's `?v=` param (both can be in the URL).
- [x] `npm run build` passes clean.

## Modules touched

- **Warmth switch (new)** — a small pure helper that takes the URL search string
  and returns a level `1`–`4` or null. Mirror the hero's `pickVideo()` in
  `src/sections/Hero.tsx`, which reads
  `new URLSearchParams(window.location.search).get("v")` with a fallback.
- **Page load wiring** — `src/App.tsx` already has a mount `useEffect` (it
  handles `#anchor` scrolling). Read the warmth level there and set
  `document.documentElement.dataset.warmth`.
- **Colour variables** — `tailwind.config.js` (add `accent` / `tick` colours
  mapped to `var(--accent)` / `var(--tick)` under `extend.colors`) and
  `src/index.css` (define the variable defaults on `:root`, and the
  `[data-warmth="1"]` override block). After editing `tailwind.config.js`,
  restart the dev server — Tailwind only reads its config at startup.
- **Accent adoption** — the section files under `src/sections/` (and
  `src/components/Reveal` is not affected): swap the `atlantico` accent and tick
  utilities (`bg-atlantico` ticks, `hover:border-atlantico`,
  `group-hover:text-atlantico`, etc.) to the new `accent` / `tick` classes.
  Leave `src/components/SemanaTipo.tsx` untouched.

## Test prior art

No test runner in this repo. Prior art for the URL-param approach is
`pickVideo()` in `src/sections/Hero.tsx`. Verify by running the dev server and
checking: default URL unchanged; `?warmth=1` warms the ticks only; an invalid
value falls back to default; focus rings still visible when tabbing.

## Out of scope

- Variants 2, 3, 4 (slices 3, 4, 5) — this slice only ships level 1, but lays
  all the plumbing they need.
- Choosing a final variant / removing the `?warmth` plumbing — that's a future
  round once Berto picks (see slice 5's handoff).
