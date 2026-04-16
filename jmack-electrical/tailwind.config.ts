import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f9f4",
          100: "#daf0e6",
          200: "#b7e1ce",
          300: "#85c9ab",
          400: "#4daa83",
          500: "#2d8c65",
          600: "#1f7050",
          700: "#1a5a40",
          800: "#174834",
          900: "#123b2b",
          950: "#0a2219",
        },
        gold: "#D4A017",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body:    ["var(--font-inter)",       "sans-serif"],
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.5s ease forwards",
        "count-up":  "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
