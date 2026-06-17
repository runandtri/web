# Run y Tri

Marketing site for **Run y Tri** — personal & online triathlon and running
coaching (coach: Alberto "Berto" Pino). Single-page, fully static.

Built with Vite + React + TypeScript + Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

## Deploy

See [DEPLOY.md](./DEPLOY.md) — deploys to Vercel as a static site.

## Hero background videos

The hero supports several background clips, switchable for preview via
`?v=<key>`: `swim` (default), `race`, `start`, `bike`, `run`, `pool`,
`track`, `dusk`. Sources and licenses are in
[`public/video/SOURCES.md`](./public/video/SOURCES.md).
