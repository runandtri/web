/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // The page foreground — text, hairlines, icons. Overriding Tailwind's
        // `white` makes every text-white / bg-white / border-white across the
        // sections theme-driven at once. Default channels equal #FFFFFF, so
        // today's look is unchanged; the light ?warmth= themes flip it dark.
        white: "rgb(var(--ink) / <alpha-value>)",
        neoprene: {
          // The page ground. Default channels equal #0B0C0E, so bg-neoprene and
          // the hero's from-neoprene gradients are unchanged today; the light
          // ?warmth= themes flip --bg to a cream and the whole page follows.
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          // Themeable raised-panel surface. Default channels equal #121316;
          // ?warmth=3 warms it via --surface-raised in index.css.
          raised: "rgb(var(--surface-raised) / <alpha-value>)",
        },
        // Discipline colours (swim / bike / run) for the SemanaTipo strip. Now
        // variable-driven so the light themes can darken the run/cream dot,
        // which would otherwise vanish on a light ground. Defaults equal the
        // literal brand hexes, so today's strip is unchanged.
        atlantico: "rgb(var(--swim) / <alpha-value>)",
        amanecer: "rgb(var(--bike) / <alpha-value>)",
        tiza: "rgb(var(--run) / <alpha-value>)",
        // Themeable accent + eyebrow-tick colours. Default to atlantico (teal)
        // via CSS variables in index.css; the ?warmth= switch overrides them.
        // RGB channels + <alpha-value> so opacity modifiers (e.g. accent/60) work.
        accent: "rgb(var(--accent) / <alpha-value>)",
        tick: "rgb(var(--tick) / <alpha-value>)",
        // Themeable hairline-divider colour. Used at /10 alpha to reproduce the
        // old `white/10`; ?warmth=3 warms it via --divider in index.css.
        divider: "rgb(var(--divider) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', "Anton", "Impact", "sans-serif"],
        body: ["Barlow", "system-ui", "sans-serif"],
        split: ['"Spline Sans Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
