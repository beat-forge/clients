/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        // When not using Web fonts
        // sans: '-apple-system, blinkMacSystemFont, Helvetica, "Yu Gothic", YuGothic, "BIZ UDPGothic", Meiryo, sans-serif',
        // sans: '-apple-system, blinkMacSystemFont, Helvetica, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "BIZ UDPGothic", Meiryo, sans-serif',
        sans: 'Inter, yakuhanjp_Noto, Noto Sans JP, sans-serif',
        mono: 'Source Code Pro, Noto Sans JP, monospace',
        keycode: 'Lucida Grande',
      },
      colors: {
        primary: { 50: '#FFFFFF',  100: '#F3F2F3',  200: '#D5D1D6',  300: '#B6B1BA',  400: '#96919D',  500: '#75717F',  600: '#585761',  700: '#3C3D44',  800: '#222326',  900: '#070808',  950: '#000000'},
        fore: {

        }
      }
    },
  },
  plugins: [],
};
