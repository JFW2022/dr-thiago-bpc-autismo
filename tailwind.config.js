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
          navy: '#252e39',
          navyDark: '#192028',
          navyCard: '#2d3744',
          navyLight: '#394657',
          taupe: '#b5ab9e',
          taupeLight: '#d6cec4',
          taupeDark: '#877f74',
          gold: '#c5a059',
          goldLight: '#e4c98c',
          whatsapp: '#25d366',
          whatsappHover: '#1eb857',
          warmBg: '#f8f7f4',
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
