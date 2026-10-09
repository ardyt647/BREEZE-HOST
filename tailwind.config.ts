import type { Config } from "tailwindcss";

/**
 * Breeze Host design tokens, sampled directly from the logo.
 *  - ink / deep : the dark teal-slate of the wordmark & outlines (#324850)
 *  - aqua       : the mid teal of the icon strokes (#75BBBD)
 *  - cyan / sky : the light cyan fills & background (#BFEBEE / #D3EFF8)
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1E343A",
        deep: "#274248",
        teal: {
          DEFAULT: "#2F7E84",
          dark: "#215F65",
          light: "#5FB2B6",
        },
        aqua: "#75BBBD",
        cyan: {
          DEFAULT: "#A8E4EA",
          soft: "#BFEBEE",
          mist: "#D3EFF8",
          pale: "#EAF8FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        breeze: "0 18px 40px -18px rgba(33, 95, 101, 0.35)",
        "breeze-lg": "0 30px 60px -24px rgba(33, 95, 101, 0.45)",
        glass: "0 8px 32px rgba(47, 126, 132, 0.12)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        drift: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(26px)" },
          "100%": { transform: "translateX(0px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
