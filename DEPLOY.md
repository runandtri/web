# Deploying Run y Tri to Vercel

This is a static Vite + React build — no server, env vars, or API routes.
Vercel auto-detects Vite (build `npm run build`, output `dist/`).

## Fastest path — Vercel CLI (no Git needed)

From the project root:

```bash
npx vercel login     # one-time; interactive (run as `! npx vercel login`)
npx vercel           # first deploy → creates the project + a preview URL
npx vercel --prod    # promote to production
```

Accept the auto-detected defaults when prompted (Framework: Vite,
Build: `npm run build`, Output: `dist`).

## Alternative — Git + GitHub (auto-deploy on every push)

```bash
git init && git add -A && git commit -m "Run y Tri site"
gh repo create runytri --private --source=. --push
```

Then in the Vercel dashboard: **Add New → Project → import `runytri`**.
Every push to the default branch then redeploys automatically.

## Before going live

- **Custom domain**: add it in Vercel → Project → Settings → Domains
  (e.g. runytri.com), then point DNS as Vercel instructs.
- **Self-host the remote clips**: `swim`, `bike`, `run`, `pool`, `track`,
  `dusk` are hot-linked from Mixkit/Coverr. They work, but depend on those
  CDNs. Download the one(s) you keep into `public/video/` and update the URLs
  in `src/sections/Hero.tsx` (the `race` and `start` clips are already local).
- **Attribution**: the `race` clip is CC BY-SA 4.0 and shows its required
  credit on-screen. See `public/video/SOURCES.md`.
- **Font license**: confirm the display font before production (see notes).
