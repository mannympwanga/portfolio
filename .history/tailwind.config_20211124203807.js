module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Lobster: ['Lobster'],
     },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0284C7',
        },
        dark:{
          DEFAULT: '#010101',
          100:'#0a0b1e',
          200:'#16181d',
          500:'#0f1115',
          700:'#202125',

        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
