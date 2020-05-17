const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#E6EDFF',
          200: '#C0D2FF',
          300: '#9BB7FE',
          400: '#4F80FE',
          500: '#044AFD',
          600: '#0443E4',
          700: '#022C98',
          800: '#022172',
          900: '#01164C',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
