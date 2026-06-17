# CLAUDE.md — Run y Tri

Working context for Claude Code in this repo. Read before making changes.

## What this is

A single-page, fully static marketing site for **Run y Tri** — personal &
online triathlon and running coaching by Alberto "Berto" Pino. Vite + React +
TypeScript + Tailwind. All content is **in Spanish**. The audience is
prospective coaching clients; the tone is athletic and direct.

Changes are made on behalf of Berto. When a request is ambiguous, prefer what
serves a triathlon coach's prospective clients over generic "web copy."

## Golden rules

- **Spanish only** for anything user-visible. Match the existing voice.
- **Reuse the design tokens** (below) — never introduce ad-hoc hex values or
  new font families. The look is deliberate, not a template; keep it that way.
- **Keep the quality floor**: responsive to mobile, visible keyboard focus,
  and `prefers-reduced-motion` respected. Don't regress these.
- This is a **real client site** — no placeholder/lorem copy, no invented
  facts (e.g. prices, stats). If a real value is unknown, ask or keep it out.

## Design system (from `tailwind.config.js`)

- **Colors**: `neoprene` `#0B0C0E` (bg) / `neoprene-raised` `#121316`;
  `atlantico` `#3FA39B` — the single interactive accent (hover/focus) and the
  swim discipline; `amanecer` `#D9743F` — bike; `tiza` `#E7E2D3` — run. The
  three discipline colors appear **only as small square ticks/dots**, never as
  large fills.
- **Type**: `font-display` (Big Shoulders Display, condensed athletic poster) —
  headings, uppercase, used big; `font-body` (Barlow) — paragraphs;
  `font-split` (Spline Sans Mono) — eyebrows, labels, and **all numbers**
  (stats read like a timing board). All three are OFL Google Fonts loaded in
  `index.html`.
- **Signature element**: the "Una semana tipo" training-week strip
  (`src/components/SemanaTipo.tsx`). It demonstrates the coaching product (a
  real weekly plan) instead of describing it. Don't dilute or remove it.
- Structure devices (eyebrow ticks, the 01/02/03 on Método) encode real
  meaning — the numbers are an onboarding sequence, not decoration. Don't add
  numbering elsewhere unless the content is genuinely a sequence.

## Hero video system (`src/sections/Hero.tsx`)

- `VIDEOS` array drives everything; `VIDEOS[0]` is the default. `?v=<key>`
  selects a clip for preview. Keys: swim, race, start, bike, run, pool, track,
  dusk.
- Per-clip fields: `overlay` (0–100 darkening for legibility), `position`
  (object-position), `credit` (rendered bottom-right of the hero when a license
  needs attribution).
- `race` is **CC BY-SA 4.0** → its on-screen credit is mandatory; do not remove
  it. `race` and `start` are self-hosted in `public/video/`; the other six are
  hot-linked Mixkit/Coverr. Before production, self-host the chosen default.
  Licenses are tracked in `public/video/SOURCES.md` — keep it updated.

## Workflow

- **Verify the build before claiming done**: `npm run build` (runs
  `tsc --noEmit && vite build`). It must pass clean.
- <important>After editing `tailwind.config.js`, restart the dev server — Tailwind
  only reads its config at startup, so a running dev server will serve stale CSS
  and the page can look broken even though the build is fine.</important>
- To verify visually, check the **actual URL the user is looking at** (the dev
  server), not just a fresh production build. Headless screenshots of the hero
  need a delay or virtual-time budget because the headline animates from
  `opacity: 0`.
- `#anchor` deep links rely on a mount-time `scrollIntoView` in `App.tsx`
  (React renders after the browser's native hash scroll) — keep it if you touch
  routing/scroll.

## Deploy & ownership

- Hosted on **Vercel**, connected to GitHub: **push to `main` → auto-redeploy**.
  No env vars, no server, no API routes (pure static).
- Repo `runandtri/web` is owned by the **runandtri** account (Berto's, for
  handover). `jcleira` pushes as an invited collaborator. Commits are authored
  locally as `runandtri` — keep personal identities out of this repo.
- Commit/push only when asked. Commit messages: short, present-tense, Spanish
  or English is fine; match recent history.

## Open items

- Pick the default hero clip and self-host it (remove CDN dependency).
- Add a custom domain in Vercel once purchased.
- `template-shortlist/` holds internal selection PNGs — safe to delete from the
  repo; they're not used by the site.
- Possible future sections from the old Wix site: Blog, Galería, a fuller
  "Sobre nosotros" bio.
