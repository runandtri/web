# 05 — Variant 4: three-colour ticks (optional)

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: [02 — Warmth foundation + variant 1](./02-warmth-foundation-variant-1.md)

## What to build

**Optional — this is the heaviest variant and the first to cut.** It exists so
Berto can see whether surfacing the brand's three sport colours feels livelier.

Building on the foundation from slice 2, add `?warmth=4`: the eyebrow ticks cycle
the three sport colours by section — swim teal (`atlantico`) / bike orange
(`amanecer`) / run cream (`tiza`) — instead of a single colour. Hovers and focus
stay teal. Unlike the other variants, this isn't a single variable reassignment:
each section needs to know which sport colour its tick should use, so it's a bit
of per-section work.

Caveat from the PRD: a section is not a sport, so these colours carry no real
meaning here — that's the reason this variant is optional.

## Acceptance criteria

- [x] `?warmth=4` renders each section's eyebrow tick in a rotating sport colour
      (swim / bike / run) across the page, in a consistent order.
- [x] Hovers and focus stay teal under `?warmth=4`.
- [x] Default, `?warmth=1`, `?warmth=2`, `?warmth=3` are unaffected.
- [x] Focus outlines stay clearly visible; reduced-motion and responsiveness
      unchanged.
- [x] `npm run build` passes clean.

## Modules touched

- **Per-section ticks** — the section files under `src/sections/` that render an
  eyebrow tick. Each needs to pick its sport colour under `?warmth=4` (e.g. via a
  per-section index/colour passed in or a nth-of-type style rule scoped to
  `[data-warmth="4"]`). Keep all other variants' single-colour tick behaviour
  intact.
- **Colour variables** — `src/index.css`: a `[data-warmth="4"]` scope for the
  rotating-tick rules. SemanaTipo stays untouched.

## Test prior art

No test runner. Verify on the dev server: `?warmth=4` shows the three sport
colours rotating across section headers; lower levels and default unchanged.

## Out of scope

- Choosing the winning variant and deleting the rest — future round (see Handoff).

## Handoff

When this slice's ACs pass (or when slices 2–4 are done if this optional slice is
cut), all warmth variants are live behind `?warmth=`. BEFORE flipping this row in
`issues.md`, post this to the user verbatim:

- **URL / artefact to visit**: the deployed site (push to `main` → Vercel
  redeploys), previewed at `<live-url>/?warmth=1`, `?warmth=2`, `?warmth=3`,
  `?warmth=4` — plus the plain URL for today's look. (If reviewing locally, the
  dev server at `http://localhost:5173/?warmth=N`.)
- **Action required**: Berto previews the variants against the default and picks
  one — or none. Pair the links with the recommendation from the PRD (keep the
  dark base; warmth, not a bright repaint).
- **Where to record the decision**:
  - In `issues.md` (add a one-line note next to this slice's row), AND
  - In the future cleanup round's issue under a `Chosen variant:` field
    (e.g. `Chosen variant: warmth=2`).

The cleanup — keep the chosen variant (or none) as the new default and strip the
`?warmth` plumbing + unused variants — is a **separate future round**, explicitly
out of scope for this issue set (per the PRD). Do not start it until Berto's pick
is recorded.
