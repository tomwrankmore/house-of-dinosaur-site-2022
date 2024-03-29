/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#202123",
        darkGray: "#32373e",
        colorGray: "#697a90",
        lightGray: "#b4bcc7",
        veryLightGray: "#e7ebed",
        colorWhite: "#ffffff",
        colorAccent: "#156dff",
        darkDinoGreen: "#14463D",
        dinoGreen: "#2EA878",
        dinoSand: "#FD803B",
        dinoSunshine: "#FCCC43",
        dinoAqua: "#9BDFD0",
        dinoSky: "#4F9DE6",
        dinoSlate: "#3A3A3A",
        dinoNavy: "#1B1464",
        dinoSnow: "#FFFFFF",
        dinoOffWhite: "#fef5da",
      },
    },
  },
  plugins: [],
};
