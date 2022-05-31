const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      bgGradientDeg: {
        45: '45deg',
      },
      colors: {
        current: "var(--primary-color)",
        'tahiti': {
          100: 'var(--hover-color)',
          200: 'var(--active-color)',
        },
      },
      textColor: {
        skin: {
          base: "var(--primary-color)"
        }
      },
      backgroundColor: {
        skin: {
          base: "var(--primary-color)"
        }
      }
    },
  },
  plugins: [],
}
