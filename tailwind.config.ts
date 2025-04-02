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
        primary: "#64A44D",
        background: "var(--background)",
        foreground: "var(--foreground)",
        cinza: "#737373",
      },
    },
  },
  plugins: [],
};
export default config;
