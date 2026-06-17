/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neoprene: {
          DEFAULT: "#0B0C0E",
          raised: "#121316",
        },
        atlantico: "#3FA39B",
        amanecer: "#D9743F",
        tiza: "#E7E2D3",
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
