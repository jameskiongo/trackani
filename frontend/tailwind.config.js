/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin";
import tailwind_forms from "@tailwindcss/forms";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        galada: ["Galada", "serif"],
      },
    },
  },
  plugins: [preline, tailwind_forms],
};
