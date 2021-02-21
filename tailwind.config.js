module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        // Comments below are correct:
        '112': '28rem', // * lg:-translate-x-112 used in Slider(Arrow), Also used in Slider(Dots)
        '128': '32rem', // * sm:w-128 used in Slider
        '140': '35rem', // * lg:h-140 used in Slider
        '148': '37rem', // * Dots, Slider
        '152': '38rem', // * lg:h-152 used in Slider
        '156': '39rem', // * h-156,Dots used in Slider
        '168': '42rem', // * h-168, used in Slider
        '224': '56rem', // * lg:w-224 is used in Slider
      },
      transitionProperty: {
        'spacing': 'margin', // This is for the Dots component in Slider
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
