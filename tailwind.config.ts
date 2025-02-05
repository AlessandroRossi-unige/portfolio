import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  plugins: [flowbite.plugin()],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f8f0fb",
          150: "#E8E9F3",
          250: "#CECECE",
          350: "#A6A6A8",
          450: "#3F4E4F",
          550: "#292929",
          950: "#121212",
        },
        blue: {
          150: "#5DFDCB",
          550: "#244e82",
        },
        red: {
          150: "#f44250",
          250: "#e54c38",
        },
        green: {
          250: "#6bd968",
          350: "#9AD5BD",
          650: "#4C4A3F",
        },
        brown: {
          350: "#DAB859",
          550: "#573D1C",
        },
        yellow: {
          350: "#FFD151",
          450: "#F8C537",
          550: "#EDB230",
        },
        orange: {
          550: "#E77728",
        },
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
} satisfies Config;
