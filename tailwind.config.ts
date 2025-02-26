import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alkali: "#556199",
        alkaliearth: "#739f46",
        lanthanides: "#ff69b4",
        actinides: "#28a128",
        transition: "#cd3e20",
        metal: "#cd853f",
        nonmetal: "#f08080",
        metalloid: "#008080",
        halogen: "#6b8e23",
        noblegases: "#9acd32",
        transactinides: "#913856",
        dark_primary: "#0f0f0f",
        light_primary: "#E5E4E2",
        text_secondary: "#100c08",
        text_primary: "#fcfcfc",
        bg_dark: "#1b1a1a",
        bg_light: "#d6cccc",
        bg_light_placeholder: "#e3dfd2",
        bg_dark_placeholder: "#0f0b0a",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        satisfy: "var(--font-satisfy)",
        lora: "var(--font-lora)",
      },
      backdropBlur: {
        require: "3px",
      },
      animation: {
        rotate: "rotate 1.5s linear infinite",
        skeleton: "skeleton 1.5s ease-in-out infinite",
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        skeleton: {
          "0%": {
            left: "-100%",
          },
          "100%": {
            left: "100%",
          },
        },
      },
      screens: {
        table: "1150px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
