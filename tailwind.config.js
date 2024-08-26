/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#640EF1',
          dark: '#080C2E',
          'light-blue': '#F1F4F5',
          gray: '#5D5D7C'
        }
      },
      fontFamily: {
        'display': ['display', 'sans-serif'],
        'poppins': ['poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

