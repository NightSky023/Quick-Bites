/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./assets/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom:'0.5fr 2fr 1fr 1fr 0.5fr',   
        custom:'0.5fr 2fr 1fr 1fr 1fr'
     
      }
    },
  },
  plugins: [],
}
