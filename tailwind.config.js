/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      white: '#ffffff',
      input: '#182c47',
      card: '#0e1a2b',
      btn: '#5692e8',
      common: '#c1d1e8',
    },
    letterSpacing: {
      widest: '.15em',
    },
  },
  plugins: [],
};
