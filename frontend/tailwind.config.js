/** @type {import('tailwindcss').Config} */
import tailwindcssForms from "@tailwindcss/forms";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        galada: ["galada", "sans-serif"],
      },
      colors: {
        offwhite: "#f8f8f8",
      },
    },
  },
  plugins: [tailwindcssForms],
};
