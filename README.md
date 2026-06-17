# Run y Tri

Marketing site for **Run y Tri** — personal & online triathlon and running
coaching by Alberto "Berto" Pino. Single-page, fully static, in Spanish.

Built with **Vite + React + TypeScript + Tailwind CSS**.

- Live: https://web-kappa-green-36.vercel.app/ (until a custom domain is set)
- Repo owner: `runandtri` · changes pushed by `jcleira` (collaborator)

## Quick start

```bash
npm install
npm run dev       # local dev server (default http://localhost:5173)
npm run build     # typecheck + production build → dist/
npm run preview   # serve the built dist/ locally
```

## Project structure

```
index.html                  # fonts + <title>/meta; mounts the app
src/
  main.tsx                  # React entry
  App.tsx                   # composes the sections; handles #anchor scroll on load
  index.css                 # Tailwind layers, fade-up keyframes,
                            #   reduced-motion + focus-visible, smooth scroll
  sections/                 # one file per page section (top → bottom):
    Hero.tsx                #   video background + headline + nav + mobile menu
    Metodo.tsx              #   "Método RUNyTRI" + the Semana Tipo strip
    Servicios.tsx           #   two service cards (en persona / online)
    Deportistas.tsx         #   athlete quotes
    Tarifas.tsx             #   call-to-action band (no public prices)
    Contacto.tsx            #   contact channels + footer
  components/
    Reveal.tsx              # scroll-reveal wrapper (respects reduced-motion)
    SemanaTipo.tsx          # signature: a sample 7-day training week
public/
  favicon.svg
  video/                    # self-hosted hero clips + SOURCES.md (licenses)
tailwind.config.js          # design tokens (colors + fonts) — see below
DEPLOY.md                   # Vercel deployment guide
```

## Editing content

All copy is Spanish and lives directly in the section files under
`src/sections/`. Contact details are in `src/sections/Contacto.tsx`
(tel `651996243`, `bertopino@gmail.com`, IG `@runytri` / `@tripino`,
FB `/runytri`). The hero headline and stats are arrays at the top of
`src/sections/Hero.tsx`. The sample training week is in
`src/components/SemanaTipo.tsx`.

## Hero background video

The hero supports several background clips, defined in the `VIDEOS` array at
the top of `src/sections/Hero.tsx`. Visitors see the first entry; any clip can
be previewed by adding `?v=<key>` to the URL:

`swim` (default) · `race` · `start` · `bike` · `run` · `pool` · `track` · `dusk`

Each entry has `overlay` (per-clip darkening for text legibility), optional
`position` (CSS object-position), and optional `credit` (shown on the hero when
a license requires attribution).

- **Change the default**: reorder the `VIDEOS` array so the desired clip is
  first.
- **Self-hosting**: `race` and `start` are local files in `public/video/`. The
  other six are hot-linked from Mixkit/Coverr — fine for previewing, but the
  clip you ship should be downloaded into `public/video/` and referenced
  locally so the site doesn't depend on third-party CDNs.
- **Licenses**: see `public/video/SOURCES.md`. The `race` clip is CC BY-SA 4.0
  and shows its required credit on screen.

## Design tokens

Defined in `tailwind.config.js`; reuse these rather than ad-hoc values.

- Colors: `neoprene` (`#0B0C0E`) / `neoprene-raised` (`#121316`),
  `atlantico` (`#3FA39B`, the single interactive accent + swim),
  `amanecer` (`#D9743F`, bike), `tiza` (`#E7E2D3`, run).
- Fonts: `font-display` (Big Shoulders Display), `font-body` (Barlow),
  `font-split` (Spline Sans Mono — eyebrows, labels, and all numbers).
  All three are open-source Google Fonts (OFL).

## Deploy

Connected to Vercel: **every push to `main` auto-redeploys**. See
[DEPLOY.md](./DEPLOY.md) for details and the one-off CLI alternative.

```bash
git add -A && git commit -m "…" && git push
```
