/** @type {import('tailwindcss').Config} */

const { withAnimations } = require("animated-tailwindcss");

module.exports = withAnimations({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      sm: "290px",
      md: "718px",
      lg: "940px",
      xl: "1170px",
      "2xl": { min: "1170px" },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
      "3xl": "1920px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        'ocean-green': {
          '50': '#eefbf4',
          '100': '#d7f4e3',
          '200': '#b2e8cb',
          '300': '#7fd6ac',
          '400': '#43b683',
          '500': '#28a16f',
          '600': '#198259',
          '700': '#146849',
          '800': '#13523b',
          '900': '#104432',
          '950': '#08261d',
        },
        'port-gore': {
          '50': '#f2f4fc',
          '100': '#e2e6f7',
          '200': '#ccd4f1',
          '300': '#a9b8e7',
          '400': '#8093da',
          '500': '#6272cf',
          '600': '#4e57c2',
          '700': '#4447b1',
          '800': '#3c3c91',
          '900': '#343674',
          '950': '#222244',
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
