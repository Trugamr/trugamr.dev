module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        pink: '#f79ad3',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
