module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
                        // Comments below are correct:
        '76': '19rem',  // This is not used
        '112': '28rem', // -translate-x-112 used in Slider
        '120': '30rem', // This is not used 
        '128': '32rem', // w-128 used in Slider
        '140': '35rem', // h-140 used in Slider
        '152': '38rem', // h-152 used in Slider
        '168': '42rem', // This is not used
        '180': '45rem', // This is not used
        '200': '50rem', // h-200 used in Slider
        '224': '56rem', // w-224 is used in Slider
        '240': '60rem', // This is not used
      },
      transitionProperty: {
        'spacing': 'margin', //This is for the Dots component in Slider
      },
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
