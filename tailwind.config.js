const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
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
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
        // => @media (prefers-color-scheme: dark) { ... }
      },
    },
  },
  variants: {
    fontSize: ['responsive', 'hover', 'focus', 'important']
  },
  plugins: [
    plugin(function ({ addVariant, variants }) {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
