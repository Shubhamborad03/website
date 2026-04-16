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
          50:  "#f0f7f4",
          100: "#d9ede2",
          200: "#b5dcc7",
          300: "#84c4a5",
          400: "#52a67e",
          500: "#358764",
          600: "#276d50",
          700: "#1f5740",
          800: "#1a4635",
          900: "#153a2c",
          950: "#0b2119",
        },
        warm: {
          50:  "#fdf8f3",
          100: "#f9eed9",
          200: "#f2dbb3",
          300: "#e8c082",
          400: "#dea254",
          500: "#d4872a",
          600: "#b86d1e",
          700: "#96541b",
          800: "#7a441d",
          900: "#65391c",
        },
        accent: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
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
