import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0072bc",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ffae00",
          foreground: "#000000",
        },
        tertiary: "#000000",
        quaternary: "#757575",
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "#0072bc",
        background: "#ffffff",
        foreground: "#000000",
        muted: {
          DEFAULT: "#f4f4f5",
          foreground: "#71717a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

export default config
