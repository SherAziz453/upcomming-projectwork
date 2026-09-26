import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F7F1E8",
          dark: "#EDE4D4",
        },
        emerald: {
          DEFAULT: "#1F4D3A",
          mid: "#2F6A52",
          light: "#4A8A6C",
        },
        terracotta: {
          DEFAULT: "#C45C26",
          deep: "#9A3F18",
        },
        gold: {
          DEFAULT: "#C6A15B",
          soft: "#E0C78A",
        },
        ink: "#1C1917",
        sand: "#E8DCC8",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 24px 60px -24px rgba(31, 77, 58, 0.28)",
      },
    },
  },
  plugins: [],
};
export default config;
