import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      laptop: "991px",
      tablet: "768px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        translate_infinite: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        translate_zoom_out: {
          "0%": { transform: "scale3d(1.1, 1.1, 1)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        translate_zoom_in: {
          "0%": { transform: "scale3d(0.5, 0.5, 0.5) translateY(20%)" },
          "80%": { transform: "scale3d(1.1, 1.1, 1.1) translateY(0%)" },
          "100%": { transform: "scale(1) translateY(0%)" },
        },
        translate_move_up: {
          "0%": { transform: "translateY(20%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        translate_opacity: {
          "0%": { opacity: "0" },
          "40%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        infinite: "translate_infinite 20s linear infinite",
        zoom_out: "translate_zoom_out 1s linear ",
        zoom_in: "translate_zoom_in 0.5s ease-in-out ",
        move_up: "translate_move_up 1s linear",
        opacity: "translate_opacity 2s linear",
      },
      colors: {
        "cyan-default": "#0fc",
      },
      height: {
        "80vh": "80vh",
      },
    },
  },
  plugins: [],
};
export default config;
