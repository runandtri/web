# Issues — 2026-06-18-alberto-feedback-v1

Source: [prd.md](./prd.md)

| Done | # | Title | Blocked by |
|------|---|-------|------------|
| [x]  | 1 | [Hero: drop the Ironman distances](./issues/01-hero-drop-ironman-distances.md) | None |
| [x]  | 2 | [Hero: self-host the golden-hour run clip as default](./issues/02-hero-self-host-run-clip.md) | None |
| [x]  | 3 | [SemanaTipo: individualized, running-led week with Fuerza](./issues/03-semanatipo-running-led-fuerza.md) | None |
| [x]  | 4 | [Quién soy: new bio section + nav link](./issues/04-quien-soy-section.md) | None |
| [x]  | 5 | [Deportistas: drop the "equipo" wording](./issues/05-deportistas-drop-equipo.md) | None |
| [x]  | 6 | [Deportistas: "Ver reseñas en Google" button](./issues/06-deportistas-google-reviews-button.md) | [#5](./issues/05-deportistas-drop-equipo.md) |

Each row starts unchecked; `/code-execute-issue` flips it to `[x]` when that slice's
acceptance criteria all pass. #1 and #2 both edit `src/sections/Hero.tsx` — run them
one at a time to avoid edit conflicts.

> #6 — Google reviews URL provided by Berto (2026-06-18):
> https://maps.app.goo.gl/4SkfFh2FztPdLSG36

## Not issues (no code this round)

- **Domain `runytri.com`** (US 26, 27) — purchase, DNS and Vercel domain config are
  Berto's manual operations; the PRD records only the target. Confirm availability
  before purchase. No code change.
- **Optional coach photo** for Quién soy — handled inside #4; the section must look
  complete without it.
- **Phase-2 blog** and a **live API-driven Google reviews embed** — explicitly out of
  scope (see PRD §Out of Scope).
