/** @type {import('tailwindcss').Config} */

const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html}"],
  theme: {
    container: {
      center: true,
      sm: "290px",
      md: "718px",
      lg: "940px",
      xl: "1170px",
      "2xl": { min: "1536px" },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    colors: {
      "primary-mint": "#41B883",
      "secondary-cadet": "#181D3A",
      "mint-cream": "#F0FAF5",
      "sea-green": "#308860",
      "cadet-space": "#222244",
      "rich-black": "#0C0F1D",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      animation: {
        "scale-up-center":
          "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "kenburns-top": "kenburns-top 5s ease   both",
        "text-focus-in":
          "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
      },
      keyframes: {
        "scale-up-center": {
          "0%": {
            transform: "scale(.5)",
          },
          to: {
            transform: "scale(1)",
          },
        },
        "kenburns-top": {
          "0%": {
            transform: "scale(1) translateY(0)",
            "transform-origin": "50% 16%",
          },
          to: {
            transform: "scale(1.25) translateY(-15px)",
            "transform-origin": "top",
          },
        },
        "text-focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          to: {
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
      spacing: {
        98: "26rem",
        100: "28rem",
        102: "30rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
});