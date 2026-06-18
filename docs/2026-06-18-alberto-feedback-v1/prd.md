# PRD — Alberto feedback, round 1 (`alberto-feedback-v1`)

Date: 2026-06-18
Site: Run y Tri — single-page static marketing site (Vite + React + TS + Tailwind)
Source: First structured feedback from the client, Alberto "Berto" Pino, on the
initial build.

## Problem Statement

Berto reviewed the first version of his coaching site and likes the design, but
several things misrepresent what he actually sells:

- The hero headlines the Ironman distances (`3,8 / 180 / 42`). Berto doesn't
  only coach long-distance triathletes — he trains runners, trail athletes,
  cyclists, swimmers and endurance athletes in general. The distances
  pigeonhole him into larga distancia.
- The "Semana tipo" strip reads as a standard, fixed triathlon program. It
  doesn't communicate that training is individualized, and it omits strength
  work (fuerza), which Berto considers a core part of his method.
- There is no "Quién soy". Visitors can't see who is behind the project, and
  Berto's whole pitch is *"entrenar con alguien que sabe porque también lo ha
  vivido"* — that only lands if his qualifications and athletic record are
  visible.
- The Deportistas section calls itself "el equipo", which implies several
  people work with him. The project is run by Berto alone. There's also no path
  for a visitor to verify the testimonials independently.
- The site has no domain yet.
- Berto wants a blog eventually, but only if he can run it himself without
  depending on the developer.

## Solution

A single batch of edits, scoped strictly to the feedback, that keeps the
existing look, voice and design system intact:

- **Hero** stops headlining Ironman distances (keeps "Nada. Rueda. Corre.")
  and uses the calm golden-hour running clip Berto chose, self-hosted.
- **Semana tipo** is kept but reworked: running-led, with a Fuerza session,
  reframed as *one athlete's* individualized week in a specific season phase,
  and topped with a one-line explanation of how a week is structured. The
  artifact still proves the product — it just stops reading as a fixed,
  triathlon-only template.
- A new **Quién soy** section is added between Servicios and Deportistas,
  presenting Berto's professional credentials and his athletic record, so trust
  is established before the social proof and the ask.
- **Deportistas** drops "equipo" wording and gains a "Ver reseñas en Google"
  link so visitors can check real, external reviews.
- The site targets the domain **runytri.com**.
- The blog is deferred to a later phase (v2); no blog work happens now.

The site's plural brand voice ("nosotros / nuestros deportistas") is kept
unchanged. The only voice exception is the new bio, which is naturally written
in the first person.

## User Stories

1. As a prospective client who is not a long-distance triathlete, I want the
   hero to not headline Ironman distances, so that I don't assume the coach only
   trains for Ironman.
2. As a prospective client, I want the hero to keep "Nada. Rueda. Corre.", so
   that the three disciplines stay clear without being tied to a specific
   distance.
3. As a runner, trail runner, cyclist or swimmer, I want the site to feel like
   it's for endurance athletes in general, so that I see myself as a potential
   client.
4. As a visitor, I want a calm, neutral golden-hour running clip behind the
   hero, so that the first impression is welcoming rather than intimidating.
5. As the site owner, I want the default hero clip self-hosted, so that the
   page doesn't break if a third-party CDN goes down.
6. As a mobile visitor, I want the hero to stay legible and responsive after the
   distances are removed, so that the headline still reads well.
7. As a prospective client, I want to see a concrete example training week, so
   that I believe the coaching produces real, structured plans rather than
   generic advice.
8. As a runner (not a triathlete), I want the example week to be running-led, so
   that I can picture myself in it.
9. As a prospective client, I want the example week framed clearly as one
   athlete's individualized plan, so that I understand my own plan would be built
   around my life, not handed to me off a shelf.
10. As a prospective client who values strength work, I want to see a Fuerza
    session in the example week, so that I trust the method is complete.
11. As a prospective client, I want a short explanation of how a week is
    structured (deportista, objetivo, momento de temporada, disponibilidad), so
    that I understand the thinking behind the plan.
12. As Berto, I want the example week to not imply standardized training, so that
    it reflects my individualized approach.
13. As a prospective client, I want to know who is behind the project, so that I
    can decide whether to trust them with my training.
14. As a prospective client, I want to see the coach's professional
    qualifications, so that I know he is formally trained.
15. As a prospective client, I want to see the coach's own athletic record, so
    that I trust he has lived the sports he coaches.
16. As a prospective client, I want the bio placed right before the testimonials,
    so that I meet the coach and then immediately hear from his athletes.
17. As a visitor, I want to reach "Quién soy" from the navigation, so that I can
    jump straight to it.
18. As Berto, I want a personal, first-person bio, so that visitors connect with
    me as a real coach.
19. As a visitor, I optionally want a photo of the coach, so that the bio feels
    human — but the section should still look complete if there's no photo yet.
20. As a mobile visitor, I want the two bio blocks to stack cleanly, so that the
    section stays readable on a small screen.
21. As a prospective client, I want the athletes section to not call itself "el
    equipo", so that I don't think there's a staff of several coaches.
22. As a prospective client, I want to read what real athletes say, so that I
    trust the results.
23. As a prospective client, I want a link to the coach's Google reviews, so that
    I can verify the testimonials are real and external.
24. As Berto, I want to drive visitors to my Google profile, so that I can
    collect and showcase verifiable reviews.
25. As a visitor, I want the reviews link to open in a new tab, so that I don't
    lose the site.
26. As Berto, I want the site at a clean domain that matches my Instagram handle,
    so that my brand is consistent.
27. As a visitor, I want to reach the site at runytri.com, so that the address is
    easy to remember.
28. As a Spanish-speaking visitor, I want all new and changed copy in Spanish in
    the existing voice, so that the site reads consistently.
29. As a visitor who prefers reduced motion, I want animations respected across
    the new and changed sections, so that the site doesn't cause discomfort.
30. As a keyboard user, I want the new nav link and section controls focusable
    with a visible focus state, so that I can navigate without a mouse.
31. As the developer, I want the production build (`tsc --noEmit` + Vite) to pass
    clean, so that I can deploy with confidence.
32. As the site owner, I want the existing design tokens and fonts reused with no
    ad-hoc additions, so that the look stays deliberate and consistent.

## Implementation Decisions

**Voice (cross-cutting).** Keep the existing plural brand voice site-wide. The
only change is removing the word "equipo". The new Quién soy bio is the single
deliberate first-person island (a bio is naturally personal); all marketing
sections stay plural. No other rewording of unrelated copy.

**Hero.**
- Remove the rendered Ironman distances from the headline; keep the verbs
  "Nada. / Rueda. / Corre." The hero STATS row ("+20 / 3 Disciplinas / 100%")
  is left unchanged — Berto did not flag it.
- Make the `run` clip (golden-hour run, Mixkit Free License) the default the
  hero loads. The `?v=<key>` preview mechanism is retained for all clips.
- Self-host the `run` clip into the local video directory and point its source
  at the local file, mirroring how `race` and `start` are already local. Update
  the video SOURCES manifest accordingly.
- Add a "Quién soy" entry to the nav link list. That list drives both the
  desktop nav and the mobile menu, so one addition covers both. The anchor is
  `#quien-soy`.

**Hero clip resolution.** The inline clip-selection logic (query key → matching
clip, with default fallback) is the one genuinely behavior-shaped, unit-testable
unit in the codebase. Because no tests are being added this round (see Testing
Decisions), it stays inline; it is recorded here as the natural seam to extract
into a pure module if/when a test runner is introduced.

**SemanaTipo (rework, not remove).**
- Replace the triathlon microcycle data with a **running-led** week that
  includes a **Fuerza** session (plus the usual easy/quality/long run and
  rest/mobility shape).
- Reframe the section copy to present it explicitly as *one athlete's*
  individualized week in a specific season phase — not a template — reinforcing
  that each plan is built on the athlete's own life.
- Add a one-line lead-in naming the four structuring axes: deportista,
  objetivo, momento de temporada, disponibilidad. The concept frames the
  artifact; the artifact proves the concept.
- Keep the discipline tick/dot legend system. Fuerza is represented with a
  neutral tick (reusing an existing neutral token, e.g. a muted white), not a
  new brand color — the three discipline colors (atlantico/amanecer/tiza) stay
  swim/bike/run only, per the design system.

**QuienSoy (new section).**
- New section rendered between Servicios and Deportistas. Eyebrow "Quién soy"
  (font-split with the atlantico tick), a font-display heading, and two content
  blocks: a professional block (credentials) and an athletic block (record),
  using Berto's exact lists:
  - Profesional: Licenciado en Educación Física (Universidad de A Coruña);
    Entrenador nacional de triatlón; Entrenador nacional de atletismo; Máster en
    Alto Rendimiento en Deportes Cíclicos (Universidad de Murcia); Especialista
    en entrenamiento por potencia en ciclismo; +20 años de experiencia en
    deportes de resistencia.
  - Deportiva: 7 Ironman finalizados, incluido el Norseman; +10 maratones; +25
    pruebas 70.3; travesías a nado; experiencia en pruebas de ultradistancia.
- Numeric/credential items use font-split, consistent with the "timing board"
  treatment of numbers elsewhere.
- Copy is first person. An optional coach photo slot is supported; the section
  must look complete without one.
- Reuse the Reveal wrapper for scroll-in animation, consistent with other
  sections.
- "+20 años" becomes canonical here; the duplicate mention in Método is softened
  to avoid redundancy.

**Deportistas.**
- Keep the eyebrow "Nuestros deportistas". Change the H2 from "El equipo." to
  "Lo que dicen." Reword the intro body to remove "equipo" and "formar parte de
  él".
- Add a "Ver reseñas en Google" button as an outbound link to Berto's Google
  Maps / Business profile, opening in a new tab with `rel="noopener noreferrer"`,
  styled with the existing button pattern (border, font-split, atlantico hover).
- No live-reviews embed: an API-driven Google reviews widget needs a Places API
  key and a backend, which this static, no-env site deliberately excludes.
- The three existing testimonial figures are kept.

**App.** Insert the QuienSoy section in render order between Servicios and
Deportistas. The existing mount-time hash-scroll behavior already handles any
anchor, including the new one.

**Domain.** Target **runytri.com** (matches the @runytri handle; "runrytri" was
treated as a typo). Domain purchase, DNS and Vercel domain configuration are
Berto's manual operations, outside this code change — only the target is
recorded here. Availability must be confirmed before purchase.

**Design system.** No new color hex values or font families. Reuse
neoprene / neoprene-raised / atlantico / amanecer / tiza and
font-display / font-body / font-split. Preserve responsive layout, visible
keyboard focus, and `prefers-reduced-motion`.

**Content assets required from Berto before completion.**
- Google Maps / Business profile URL — blocks the reviews button going live.
  Until provided, the button is omitted (not shipped pointing nowhere).
- Optional coach photo for Quién soy.

## Testing Decisions

- **What a good test is here.** Test external behavior, not implementation
  detail. In this codebase the only behavior-shaped unit is hero clip resolution
  (given a query key and the clip list, return the correct clip, falling back to
  the default for missing/unknown keys).
- **Decision for this batch: no automated tests, no test framework added.** The
  change is content and markup on a static marketing site; `tsc --noEmit`
  already guards types, and the established workflow verifies visually on the dev
  server plus a clean `npm run build`.
- **Prior art.** None — the project has no tests today.
- **If tests are added later** (most likely alongside the phase-2 blog), the
  clip resolver is the first candidate and should be extracted into a pure module
  at that point; Vitest is the natural runner given the Vite toolchain.
- **Verification for this batch.** `npm run build` must pass clean; manual QA on
  the dev server across mobile and desktop; keyboard focus on the new nav link
  and the reviews button; reduced-motion respected; the hero headline animation
  still intact after the distance spans are removed.

## Out of Scope

- **The blog** (phase 2): write-in CMS + AI-assisted drafting in Berto's style.
  Not built now; deferred and to be specified separately.
- **Live Google reviews embed** (API-based) — replaced by a simple outbound
  link.
- **Site-wide first-person rewrite** — explicitly rejected; only the "equipo"
  wording changes, plus the naturally first-person bio.
- **Hero STATS row changes** (e.g. "3 Disciplinas") — left as-is; not flagged.
- **Domain purchase, DNS, and Vercel domain setup** — Berto's manual ops, not
  code.
- **New design tokens, fonts or colors** — beyond the neutral tick reused for
  Fuerza.
- **Self-hosting the other remote clips** (swim/bike/pool/track/dusk) — only the
  chosen default (`run`) is self-hosted this round.
- **Other potential old-Wix sections** (Galería, a fuller "Sobre nosotros"
  bio) — not requested in this round.

## Further Notes

- **Tension with CLAUDE.md.** The repo notes call Semana tipo the "signature
  element — don't remove/dilute". The client asked to rework it, and the client
  overrides the internal note. We honor both as far as possible: the element is
  kept (not removed) and still demonstrates the product, just reworked
  running-led with Fuerza and reframed as individualized.
- **Licensing.** Switching the default to `run` (Mixkit Free) removes the
  on-screen attribution requirement from the default view; the `race` clip's
  mandatory CC BY-SA 4.0 credit is unaffected — it remains available via
  `?v=race` with its credit. Update the video SOURCES manifest when `run` is
  self-hosted.
- **Domain rationale.** runytri.com matches the @runytri Instagram handle and
  reads as "Run y Tri"; "runrytri.com" (as written in the feedback) was treated
  as a slip.
- **Tooling reminder.** No Tailwind config changes are planned; if one is made,
  the dev server must be restarted for it to take effect.
