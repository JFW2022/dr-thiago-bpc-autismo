/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#08121e',
          navyCard: '#0f2035',
          navyLight: '#18314f',
          gold: '#c5a059',
          goldLight: '#e4c98c',
          goldDark: '#9a7a3a',
          whatsapp: '#25d366',
          whatsappHover: '#1eb857',
          warmBg: '#fbf9f4',
          warmCard: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
