/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("flowbite/plugin")],
  theme: {
    colors: {
      deep_black: "#121212",
      white: "#ffffff",
      gray: "#292929",
      blue: "#244e82",
      red: "#f44250",
      light_blue: "#3defe9",
      lime: "#6bd968",
    },
    extend: {},
  },
  plugins: [],
};
