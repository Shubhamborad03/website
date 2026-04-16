import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: {
          950: "#0A0A0A",
          900: "#141414",
          800: "#1F1F1F",
          700: "#2A2A2A",
          600: "#3D3D3D",
          500: "#555555",
          400: "#7A7A7A",
          300: "#A3A3A3",
          200: "#D4D4D4",
          100: "#EDEDED",
          50: "#F7F7F7",
        },
        amber: {
          500: "#F59E0B",
          400: "#FBBF24",
          600: "#D97706",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
