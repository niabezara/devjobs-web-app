import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "600px",
      lg: "900px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "16": "16rem",
        "12": "12rem",
      },
    },
  },
  plugins: [],
};
export default config;
