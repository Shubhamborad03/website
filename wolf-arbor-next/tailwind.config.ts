import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        // Warm service-business palette — no dark-luxury feel
        bg: "#FAF7F0", // warm cream background
        ink: "#1A1A1A", // rich charcoal text
        muted: "#5C5C5C", // body muted
        forest: "#1F3A2E", // deep evergreen primary accent
        forestSoft: "#2D5945", // hover / secondary
        amber: "#C97A2C", // warm earth amber (replaces gold)
        amberDeep: "#A85F1A",
        sand: "#E8DDC9", // hairlines + dividers
        sandSoft: "#F0E8D8", // soft surfaces
        bark: "#5C3A1F", // occasional warm brown
      },
      boxShadow: {
        card: "0 1px 3px rgba(28, 30, 25, 0.04), 0 12px 32px -16px rgba(28, 30, 25, 0.12)",
        cardHover:
          "0 2px 6px rgba(28, 30, 25, 0.06), 0 24px 48px -20px rgba(28, 30, 25, 0.18)",
        phone:
          "0 60px 140px -40px rgba(28, 30, 25, 0.35), 0 0 0 1px rgba(28, 30, 25, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
