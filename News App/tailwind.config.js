/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007bff',
        'secondary': '#F5F5F5',
        'accent': '#FF4500',
        'breaking-news': '#FF4500'
      },
      fontFamily: {
        'headline': ['Montserrat', 'sans-serif'],
        'body': ['Merriweather', 'serif']
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
}
