module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
                        // Comments below are no longer correct:
        //'76': '19rem',  // This is not used
        '112': '28rem', //* lg:-translate-x-112 used in Slider(Arrow), Also used in Slider(Dots)
        //'120': '30rem', // This is not used
        '128': '32rem', // * sm:w-128 used in Slider
        '140': '35rem', // * lg:h-140 used in Slider
        //'144': '36rem', //x Dots, slider
        '148': '37rem', // * Dots, Slider
        '152': '38rem', // * lg:h-152 used in Slider
        '156': '39rem', // *h-156,Dots used in Slider
                        //Dots,slider
        //'160': '40rem', // x h-160 used in Dots-Slider
        '168': '42rem', // *h-168, used in Slider
        //'180': '45rem', // This is not used
        //'200': '50rem', // h-200 used in Slider
        '224': '56rem', //* lg:w-224 is used in Slider
        //'240': '60rem', // This is not used
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
