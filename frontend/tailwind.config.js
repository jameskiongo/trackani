/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin";
import tailwind_forms from "tailwindcss/forms";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [preline, tailwind_forms],
};
