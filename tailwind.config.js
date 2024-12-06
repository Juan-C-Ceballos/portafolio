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
      keyframes: {
        grow: {
          '0%': { height: '0', opacity: '0' },
          '100%': { height: '40vh', opacity: '1' },
        },
      },
      animation: {
        grow: 'grow 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
