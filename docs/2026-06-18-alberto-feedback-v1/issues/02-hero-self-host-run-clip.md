# 02 — Hero: self-host the golden-hour run clip as default

**Source PRD**: [../prd.md](../prd.md)
**Blocked by**: None — can start immediately. (Shares `src/sections/Hero.tsx`
with [01](./01-hero-drop-ironman-distances.md); run them one at a time.)

## What to build

Make the calm golden-hour running clip the hero's **default** background, served
from the repo instead of hot-linked from Mixkit's CDN, so the page doesn't break
if the CDN goes down. The `?v=<key>` preview mechanism must keep working for all
eight clips.

Detail (in `src/sections/Hero.tsx`):

- The `run` clip is the `VIDEOS[]` entry
  `{ key: "run", label: "Carrera al amanecer", src: "https://assets.mixkit.co/videos/46654/46654-720.mp4", overlay: 30 }`.
- Download that file into `public/video/`, following the existing Spanish,
  descriptive naming (`triatlon-carrera.mp4`, `triatlon-salida.mp4` are the
  precedent) — e.g. `carrera-amanecer.mp4`.
- Point the `run` entry's `src` at the local path (`/video/carrera-amanecer.mp4`).
- Make `run` the default the hero loads with no query string. `pickVideo()` falls
  back to `VIDEOS[0]`, so the cleanest approach is to move the `run` object to the
  **first** position of `VIDEOS` (or otherwise guarantee default === run). Keep
  all eight clips selectable via `?v=`.
- Update `public/video/SOURCES.md`: the `run` row should note it is now
  self-hosted (local filename) under the Mixkit Free License.

## Acceptance criteria

- [x] Loading the hero with no query string shows the golden-hour run clip.
- [x] The run clip is served from a local file in `public/video/` committed to
      the repo, not from `assets.mixkit.co`.
- [x] `?v=swim`, `?v=race`, `?v=start`, `?v=bike`, `?v=run`, `?v=pool`,
      `?v=track`, `?v=dusk` all still resolve to their clips; an unknown/missing
      key falls back to the new default (run).
- [x] `?v=race` still shows its mandatory CC BY-SA 4.0 on-screen credit
      (unaffected by this change).
- [x] `SOURCES.md` updated: the `run` row records the self-hosted local filename
      + Mixkit Free License.
- [x] `npm run build` passes clean.

## Modules touched

- `src/sections/Hero.tsx` — `VIDEOS` array contents + default ordering.
- `public/video/` — new self-hosted clip (e.g. `carrera-amanecer.mp4`).
- `public/video/SOURCES.md` — update the `run` row.

## Test prior art

None. Verify on the dev server: default load shows the run clip; spot-check a
couple of `?v=` keys; confirm the browser network tab serves the clip from
`/video/...` locally.

## Out of scope

- Removing the headline distances — see [01](./01-hero-drop-ironman-distances.md).
- Self-hosting the other remote clips (swim/bike/pool/track/dusk stay hot-linked)
  — PRD §Out of Scope.
- Extracting `pickVideo` into a tested pure module — deferred (PRD §Hero clip
  resolution).
