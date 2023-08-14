/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi-Variable', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFFFFF',
          100: '#F3F2F3',
          200: '#D5D1D6',
          300: '#B6B1BA',
          400: '#96919D',
          500: '#75717F',
          600: '#585761',
          700: '#3C3D44',
          800: '#222326',
          850: '#19181b',
          900: '#121414',
          950: '#000000',
        },
        fore: {
          base: '#FFFFFF',
          muted: '#8B888C',
        },
      },
    },
  },
  plugins: [],
};
