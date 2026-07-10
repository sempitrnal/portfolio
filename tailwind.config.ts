import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        shamrock: {
          50: "hsl(var(--shamrock-50) / <alpha-value>)",
          100: "hsl(var(--shamrock-100) / <alpha-value>)",
          200: "hsl(var(--shamrock-200) / <alpha-value>)",
          300: "hsl(var(--shamrock-300) / <alpha-value>)",
          400: "hsl(var(--shamrock-400) / <alpha-value>)",
          500: "hsl(var(--shamrock-500) / <alpha-value>)",
          600: "hsl(var(--shamrock-600) / <alpha-value>)",
          700: "hsl(var(--shamrock-700) / <alpha-value>)",
          800: "hsl(var(--shamrock-800) / <alpha-value>)",
          900: "hsl(var(--shamrock-900) / <alpha-value>)",
          950: "hsl(var(--shamrock-950) / <alpha-value>)",
        },
        coral: {
          50: "hsl(var(--coral-50) / <alpha-value>)",
          100: "hsl(var(--coral-100) / <alpha-value>)",
          200: "hsl(var(--coral-200) / <alpha-value>)",
          300: "hsl(var(--coral-300) / <alpha-value>)",
          400: "hsl(var(--coral-400) / <alpha-value>)",
          500: "hsl(var(--coral-500) / <alpha-value>)",
          600: "hsl(var(--coral-600) / <alpha-value>)",
          700: "hsl(var(--coral-700) / <alpha-value>)",
          800: "hsl(var(--coral-800) / <alpha-value>)",
          900: "hsl(var(--coral-900) / <alpha-value>)",
          950: "hsl(var(--coral-950) / <alpha-value>)",
        },
        warm: {
          cream: "hsl(var(--warm-cream) / <alpha-value>)",
          sand: "hsl(var(--warm-sand) / <alpha-value>)",
          clay: "hsl(var(--warm-clay) / <alpha-value>)",
          rose: "hsl(var(--warm-rose) / <alpha-value>)",
          sage: "hsl(var(--warm-sage) / <alpha-value>)",
          denim: "hsl(var(--warm-denim) / <alpha-value>)",
          lilac: "hsl(var(--warm-lilac) / <alpha-value>)",
          ochre: "hsl(var(--warm-ochre) / <alpha-value>)",
          ink: "hsl(var(--warm-ink) / <alpha-value>)",
          paper: "hsl(var(--warm-paper) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
        "drift-slow": "drift 18s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        blob: "blob 10s infinite",
        shimmer: "shimmer 2s linear infinite",
        morph: "morph 16s ease-in-out infinite alternate",
        breathe: "breathe 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(20px, -30px) rotate(2deg)" },
          "50%": { transform: "translate(-10px, 20px) rotate(-1deg)" },
          "75%": { transform: "translate(15px, 10px) rotate(1deg)" },
        },
        morph: {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "100%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
