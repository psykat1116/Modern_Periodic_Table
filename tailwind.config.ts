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
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        satisfy: "var(--font-satisfy)",
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
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        skeleton: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      screens: {
        table: "1150px",
      },
    },
  },
  plugins: [],
};
export default config;
