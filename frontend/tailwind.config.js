/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'linkcolor':'#49557e',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '2fr 1fr 1fr',
        'cart':'1fr 1.5fr 1fr 1fr 1fr 0.5fr',
        'secondary':'0.5fr 2fr 1fr 1fr 2fr 1fr '
      }
    },
  },
  plugins: [],
}