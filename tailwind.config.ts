import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      screens: {
        mobile: "340px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blue-bg":
          "linear-gradient(to right, #021B79, #0A2B9F, #124CB6, #1A6CD3)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        firaCode: ["Fira Code", "monospace"],
      },
      colors: {
        black: "#061113",
        primary: {
          DEFAULT: "#FFA500",
          100: "#f0f6fa",
          500: "#99d1ff",
        },
        secondary: {
          DEFAULT: "#0C356A",
        },
        bg: {
          main: "#ecf7f9",
          light: "#e6f0ff",
        },
        grey: "#ccd6f6",
      },
    },
  },
};
export default config;
