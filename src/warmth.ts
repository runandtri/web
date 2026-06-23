// The ?warmth= switch lets Berto preview colour variants of the site without
// editing it. Each level maps to a [data-warmth] override block in index.css:
// 1–4 retint accents on the dark base, 5–7 are full ground/temperature themes
// (warm-dark and two light), and 8–15 are the colour-forward set (colour-blocked
// sections, gradients, loud colour on dark, bold-colour heroes). Mirrors
// pickVideo() in Hero.tsx, but pure: the caller passes the search string so this
// stays trivially testable.

export type WarmthLevel =
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

/**
 * Reads the ?warmth= level from a URL search string.
 * Returns 1–15 when valid, or null when the param is missing or out of range
 * (e.g. ?warmth=99, ?warmth=abc) — null means "leave today's look untouched".
 */
export function pickWarmth(search: string): WarmthLevel | null {
  const level = Number(new URLSearchParams(search).get("warmth"));
  if (Number.isInteger(level) && level >= 1 && level <= 15) {
    return level as WarmthLevel;
  }
  return null;
}
