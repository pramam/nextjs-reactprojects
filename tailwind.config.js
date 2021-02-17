module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '76': '19rem', // This is not used
        '128': '32rem',
        '168': '42rem',// This is not used
        '224': '56rem',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', 'active'],
      borderColor: ['hover', 'focus', 'active'],
      textColor: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
