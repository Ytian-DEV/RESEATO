import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-serif", "Georgia", "serif"],
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial"],
      },
      colors: {
        brand: {
          50: "#fbf7f7",
          100: "#f6eded",
          200: "#ead4d5",
          300: "#d8aeb0",
          400: "#c18387",
          500: "#a45e63", 
          600: "#86484d",
          700: "#6a373b",
          800: "#4b2528",
          900: "#2b1517",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;