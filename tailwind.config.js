/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "custom-red": "#c02138",
        "custom-orange": "#f3712b",
        "custom-black": "#27292a",
        "custom-gray": "#3d3e3f",
        "custom-light-gray": "#525455",
      },
    },
  },
  plugins: [],
}
