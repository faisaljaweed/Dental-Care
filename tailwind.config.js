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
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #0D9488 0%, #06B6D4 100%)",
        "hero-overlay":
          "linear-gradient(100deg, rgba(5,26,38,0.92) 0%, rgba(5,26,38,0.72) 42%, rgba(5,26,38,0.25) 75%, rgba(5,26,38,0.05) 100%)",
        "ink-band":
          "radial-gradient(90rem 40rem at 85% -10%, rgba(13,148,136,0.25), transparent 60%), linear-gradient(160deg, #062334 0%, #082B3F 60%, #0A3247 100%)",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(8, 43, 63, 0.07)",
        lift: "0 16px 40px rgba(8, 43, 63, 0.12)",
        glow: "0 10px 30px rgba(13, 148, 136, 0.28)",
      },
      maxWidth: {
        content: "76rem",
      },
      transitionTimingFunction: {
        swift: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
