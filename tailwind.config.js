/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        amber: colors.amber,
        rose: colors.rose,
        cyan: colors.cyan,
        yellow: colors.yellow
      }
    }
  },
  plugins: []
};
