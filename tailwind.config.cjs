module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}