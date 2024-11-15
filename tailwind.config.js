import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}", "./index.html"],
    extract,
  },
  theme: {
    screens,
    extend: {
      fontFamily: {
        custom: ["barlow semi condensed", "sans-serif"],
      },
      colors: {
        scissorsGradientStart: "hsl(39, 89%, 49%)",
        scissorsGradientEnd: "hsl(40, 84%, 53%)",

        paperGradientStart: "hsl(230, 89%, 62%)",
        paperGradientEnd: "hsl(230, 89%, 65%)",

        rockGradientStart: "hsl(349, 71%, 52%)",
        rockGradientEnd: "hsl(349, 70%, 56%)",

        lizardGradientStart: "hsl(261, 73%, 60%)",
        lizardGradientEnd: "hsl(261, 72%, 63%)",

        cyanGradientStart: "hsl(189, 59%, 53%)",
        cyanGradientEnd: "hsl(189, 58%, 57%)",

        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",

        radialGradientStart: "hsl(214, 47%, 23%)",
        radialGradientEnd: "hsl(237, 49%, 15%)",

        redBorder: "hsl(347, 74%, 35%)",
        blueBorder: "hsl(229, 65%, 46%)",
        yellowBorder: "hsl(28, 51%, 47%)",
      },
      backgroundImage: {
        triangle: "url('../src/components/assets/bg-triangle.svg')",
      },
      keyframes: {
        "pulse-custom": {
          "0%, 100%": { opacity: "0.01" },
          "50%": { opacity: "0.1" },
        },
      },
      animation: {
        pulseCustom: "pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [fluid],
};
