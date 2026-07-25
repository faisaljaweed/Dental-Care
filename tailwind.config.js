/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#082B3F", // deep petrol navy — headings, dark bands
          soft: "#0C3A54",
          deep: "#051D2B", // console surfaces
        },
        muted: "#51677A",
        teal: {
          DEFAULT: "#0D9488",
          dark: "#0B7C72",
          light: "#2DD4BF",
        },
        cyan: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
        },
        mint: "#E8FAF5", // teal-tinted section background
        ice: "#F2F8FB", // cool light section background
        line: "#E2EBF0", // borders / hairlines
        live: "#34D399", // "answering now" status dot
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #0D9488 0%, #06B6D4 100%)",
        "hero-overlay":
          "linear-gradient(100deg, rgba(5,26,38,0.92) 0%, rgba(5,26,38,0.72) 42%, rgba(5,26,38,0.25) 75%, rgba(5,26,38,0.05) 100%)",
        "ink-band":
          "radial-gradient(90rem 40rem at 85% -10%, rgba(13,148,136,0.25), transparent 60%), linear-gradient(160deg, #062334 0%, #082B3F 60%, #0A3247 100%)",
        "console":
          "radial-gradient(60rem 30rem at 15% 0%, rgba(6,182,212,0.18), transparent 55%), linear-gradient(165deg, #051D2B 0%, #072B3E 100%)",
        "grid-faint":
          "linear-gradient(to right, rgba(226,235,240,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,235,240,0.7) 1px, transparent 1px)",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(8, 43, 63, 0.07)",
        lift: "0 16px 40px rgba(8, 43, 63, 0.12)",
        glow: "0 10px 30px rgba(13, 148, 136, 0.28)",
        panel: "0 24px 70px -20px rgba(5, 29, 43, 0.45)",
      },
      maxWidth: {
        content: "76rem",
      },
      transitionTimingFunction: {
        swift: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        typing: {
          "0%, 60%, 100%": { transform: "translateY(0)", opacity: "0.35" },
          "30%": { transform: "translateY(-4px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
