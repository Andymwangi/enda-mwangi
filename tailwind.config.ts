import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
      colors: {
        border: "hsl(var(--border, 220, 14%, 90%))",
        input: "hsl(var(--input, 220, 14%, 97%))",
        ring: "hsl(var(--ring, 220, 98%, 80%))",
        background: "hsl(var(--background, 222, 47%, 11%))",
        foreground: "hsl(var(--foreground, 222, 47%, 96%))",
        primary: {
          DEFAULT: "hsl(var(--primary, 221, 83%, 53%))",
          foreground: "hsl(var(--primary-foreground, 0, 0%, 100%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 216, 33%, 17%))",
          foreground: "hsl(var(--secondary-foreground, 210, 40%, 98%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0, 84%, 60%))",
          foreground: "hsl(var(--destructive-foreground, 0, 0%, 100%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 210, 40%, 96%))",
          foreground: "hsl(var(--muted-foreground, 215, 20%, 50%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 221, 83%, 53%))",
          foreground: "hsl(var(--accent-foreground, 0, 0%, 100%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 222, 47%, 11%))",
          foreground: "hsl(var(--popover-foreground, 222, 47%, 96%))",
        },
        card: {
          DEFAULT: "hsl(var(--card, 222, 47%, 11%))",
          foreground: "hsl(var(--card-foreground, 222, 47%, 96%))",
        },
      },
      borderRadius: {
        lg: "var(--radius, 1rem)",
        md: "calc(var(--radius, 1rem) - 2px)",
        sm: "calc(var(--radius, 1rem) - 4px)",
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
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config; 