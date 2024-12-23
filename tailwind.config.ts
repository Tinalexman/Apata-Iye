import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1F71",
        secondary: "#123C68",
        "sh-1": "#868181",
        "sh-2": "#333333",
        "sh-3": "#535252",
        background: "#E8F4FA",
      },
      screens: {
        xs: "320px", // Small mobile devices
        sm: "425px", // Slightly larger mobile devices
        md: "768px", // Tablets and larger screens
        lg: "976px", // Laptops and larger screens
        xl: "1440px", // Desktops
        "2xl": "1920px", // Large desktops
        "3xl": "2560px", // Ultra-wide screens
        "4xl": "3200px", // Extra-large screens
      },
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 0px 5px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
