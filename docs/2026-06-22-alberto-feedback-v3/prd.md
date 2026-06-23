# Alberto feedback — round 3

## Problem Statement

Berto reviewed the live site and raised two things:

1. **The "Lo que dicen" section is confusing.** It names three athletes
   (Oscar Díaz, Iago Vara, Luis López) with a quote under each. Berto wrote
   those quotes himself, *about* the athletes — but on the page they read as if
   the athletes are speaking. You can't tell who is talking about whom. He
   wants that part gone, and only the Google reviews kept.

2. **The colours might be too serious.** Two of four people told Berto that
   other colours could make the site feel "más alegre" (more cheerful). He's
   not sure — he likes the current dark look but wants to see options before
   deciding. He asked for a clear recommendation, not just a change.

## Solution

**Testimonials.** Remove the whole "Lo que dicen" section. Keep the one thing
Berto wanted kept — the Google reviews — by moving that link into the Contacto
section as another way to reach and check him. Nothing on the page pretends to
be a quote from someone anymore.

**Colours.** Don't repaint the site. The dark look is the site's identity, and
going light would make it look like a generic template. Instead, ship warmer
variations Berto can preview by adding `?warmth=1`, `2`, `3`, or `4` to the
URL. The normal site (no `?warmth`) stays exactly as it is today, so he's
always comparing against the real current site. Each number is a bit warmer
than the last. Berto previews them on the live URL, picks one (or none), and
then we keep the winner and delete the rest.

The variants, coolest to warmest:

- **No parameter (default):** today's site, teal accent. Unchanged.
- **`?warmth=1` (subtle):** the small eyebrow ticks turn warm orange; buttons,
  hovers and focus outlines stay teal.
- **`?warmth=2` (warm accent):** the whole accent — ticks, hovers, focus —
  turns warm orange; teal stays only on the swim tick.
- **`?warmth=3` (warm accent + surfaces):** same as 2, plus warmer divider
  lines and a faint warm tint on the raised cards.
- **`?warmth=4` (three-colour ticks, optional):** the eyebrow ticks cycle the
  three sport colours (swim teal / bike orange / run cream) by section; hovers
  stay teal. This is the heaviest one and the first to cut if Berto wants fewer.

The recommendation to relay to Berto: keep the dark look; "alegría" comes from
warmth, not from a bright background, and these variants let him feel that
without losing what makes the site distinctive.

## User Stories

1. As Berto, I want the confusing testimonials section removed, so that
   visitors aren't left wondering who is speaking about whom.
2. As Berto, I want the Google reviews link kept on the site, so that
   prospective clients can still see real opinions about my coaching.
3. As a prospective client, I want to find the Google reviews from the contact
   area, so that I can check Berto's reputation right before I reach out.
4. As a prospective client, I want the reviews link to open in a new tab, so
   that I don't lose the Run y Tri site when I go read them.
5. As Berto, I want the reviews entry to look like it belongs among the other
   contact channels, so that the contact section stays clean and consistent.
6. As jcleira, I want the removed section to leave no dangling nav link or
   anchor, so that navigation doesn't break.
7. As Berto, I want to preview warmer versions of the site, so that I can judge
   whether a more cheerful look suits Run y Tri without committing to it.
8. As Berto, I want the normal site to look exactly as today unless I ask for a
   variant, so that I'm comparing against the real current site.
9. As Berto, I want to switch between warmth options by changing one value in
   the address bar, so that I can flip between them quickly and show others.
10. As Berto, I want each warmth option to be progressively warmer, so that I
    can see a clear range from subtle to bold.
11. As Berto, I want a version that only warms the small ticks, so that I can
    see the gentlest possible change.
12. As Berto, I want a version where the whole accent turns warm, so that I can
    see a clearly warmer but still simple look.
13. As Berto, I want a version that also warms the dividers and card surfaces,
    so that I can see how far "warm" can go before it changes the base.
14. As Berto, I want an optional version that cycles the three sport colours
    across sections, so that I can see whether the brand's colours feel livelier.
15. As Berto, I want the dark, premium base preserved in every variant, so that
    the site keeps the identity I like even when warmer.
16. As Berto, I want a clear recommendation behind the options, so that I can
    make the call with a reason, not a coin flip.
17. As Berto, I want to pick one variant later (or none) and have the rest
    removed, so that the shipped site stays simple.
18. As a prospective client on a phone, I want every version to stay readable
    and mobile-friendly, so that the look never gets in the way of the content.
19. As a keyboard user, I want focus outlines clearly visible in every version,
    so that I can navigate the site.
20. As a visitor who prefers reduced motion, I want that setting respected in
    every version, so that the site doesn't trigger discomfort.
21. As jcleira, I want the warmth switch to reuse the same URL-parameter
    approach the hero already uses for clip previews, so that the codebase stays
    consistent.
22. As jcleira, I want the default (no parameter) to be the current look
    unchanged, so that shipping this can't accidentally alter the live site.
23. As jcleira, I want the variants driven by a small set of colour variables,
    so that adding or removing one is a config change, not a rewrite of every
    section.
24. As jcleira, I want the SemanaTipo training-week strip left untouched, so
    that its sport-coded colours keep their meaning.
25. As jcleira, I want `npm run build` to pass clean, so that I can deploy with
    confidence.

## Implementation Decisions

**Testimonials removal**

- Delete the "Lo que dicen" section entirely: the component, its place in the
  page, and its entry in the top navigation. No copy is salvaged — the quotes
  were the source of the confusion.
- The "nuestros deportistas" wording elsewhere in body copy is unrelated and
  stays.

**Reviews link**

- Add a "Reseñas en Google" entry to the Contacto channel grid, using a star
  icon, alongside phone / WhatsApp / email / socials. It reuses the existing
  Google Maps reviews URL already in the codebase and opens in a new tab, like
  the other external channels.

**Warmth variants**

- One URL, switched by a `?warmth=` value of `1` to `4`. This mirrors the
  approach the hero already uses for its `?v=` clip preview.
- On page load, a small piece of code reads `?warmth=`, checks it's a valid
  level (1–4), and sets a `data-warmth` attribute on the page root. Anything
  missing or invalid means no attribute, which means the current default look.
  This sits alongside the existing load-time logic that handles `#anchor`
  scrolling.
- The accent colours become CSS variables: one for the interactive accent
  (hovers, focus, buttons) and one for the eyebrow ticks, plus divider and
  panel-tint variables used only by level 3. The default values equal today's
  colours, so the no-parameter site is unchanged.
- Each `?warmth` level reassigns those variables. Components reference the
  variables instead of the hardcoded teal — with one exception: the SemanaTipo
  training-week strip keeps its literal sport colours, because there they carry
  meaning.
- Level 1 keeps the interactive accent teal and only warms the ticks. Levels 2
  and 3 turn the interactive accent warm. Level 4 needs each section to pick its
  own tick colour by sport — that per-section bit is the only bespoke part, and
  the reason level 4 is the first to cut.
- The quality floor holds in every variant: the focus/hover signal stays a
  clearly visible colour, the layout stays responsive, and `prefers-reduced-motion`
  is untouched.
- After Berto picks, a later follow-up keeps the chosen variant (or none) as the
  default and strips out the `?warmth` plumbing and unused variants.

## Testing Decisions

No automated tests. The project has no test runner today, and a colour-variant
preview plus a section removal don't justify introducing one — that would be
more scaffolding than the change warrants.

Verification is manual and concrete:

- `npm run build` (which runs `tsc --noEmit && vite build`) passes clean.
- The default URL (no `?warmth`) is visually identical to the current live site.
- `?warmth=1`, `=2`, `=3`, `=4` each render, are progressively warmer, and keep
  focus outlines clearly visible.
- An invalid value (e.g. `?warmth=9` or `?warmth=abc`) falls back to the default
  look.
- The Contacto section shows the new "Reseñas en Google" entry, and it opens the
  Google Maps reviews page in a new tab.
- The old testimonials section and its nav link are gone, with no broken anchor
  left behind.

A good test here means checking what a visitor actually sees and can do — not
how the colour switch is wired internally.

## Out of Scope

- **No light or bright repaint.** The dark identity stays; this was explicitly
  rejected in favour of warmth-within-dark.
- **No changes to SemanaTipo's sport colours.**
- **No real photos.** The bio photo stays disabled and the hero stays the
  atardecer video — this round doesn't add imagery.
- **No transcribing review text onto the page.** We link out to Google, not copy
  quotes in.
- **Picking the final variant and deleting the losers** is a later follow-up
  once Berto decides, not part of this PRD.
- **No copy rewrites** beyond what removing the section requires.

## Further Notes

- This is the third round of Berto's feedback (after `alberto-feedback-v1` and a
  round 2).
- Berto explicitly asked to keep the Google reviews — that's why the link moves
  to Contacto instead of disappearing with the section.
- Deploy path is unchanged: push to `main`, Vercel redeploys, and Berto previews
  by appending `?warmth=N` to the live URL. No env vars, no server.
- The reason level 1 warms only the ticks and not the buttons: the teal accent
  is the hover/focus signal, and keeping it teal in the subtlest version avoids
  changing how the site behaves while still showing a warmer note.
