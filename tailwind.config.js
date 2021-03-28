const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'slidy': 'slidy 30s ease-in-out infinite',
        'expandcontract': 'expandcontract 2s ease-in-out infinite'
      },
      colors: {
        // 19: The Monkey Bar: 
        // Color combination inspiration(#7): Gold, Charcoal and Grey 
        // https://99designs.com/blog/creative-inspiration/color-combinations/
        'monkey-gold': '#f5a00c',     //19: The Monkey Bar: Logo color
        'monkey-charcoal': '#3b4d61', //19: The Monkey Bar: Nav background
        'monkey-gray': '#6b7b8c'      //19: The Monkey Bar: Text color on bg-gray-50
      },
      fontFamily: {
        'tuliplogo': ['"Bilbo Swash Caps"', ...fontFamily.sans],
        'tuliptext': ['Raleway', ...fontFamily.sans],
        'monkeylogo': ['Cinzel', ...fontFamily.serif],
        'monkeytext': ['Lato', ...fontFamily.sans]
      },
      inset: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        'full': '100%',
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'slidy': {
          '0%': { left: '0%' },
          '20%': { left: '0%' },
          '25%': { left: '-100%' },
          '45%': { left: '-100%' },
          '50%': { left: '-200%' },
          '70%': { left: '-200%' },
          '75%': { left: '-300%' },
          '95%': { left: '-300%' },
          '100%': { left: '-400%' },
        },
        'expandcontract': {
          '0%, 100%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(1)' },
        }
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      padding: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '1/10': '10%', // TheTulipShop fixed navbar
      },
      spacing: {
        // Comments below are correct:
        '30': '7.5rem', // * h-30 used in TheTulipShop
        '88': '22rem',  // * h-88 used in TheTulipShop
        '112': '28rem', // * lg:-translate-x-112 used in Slider(Arrow), Also used in Slider(Dots)
                        // * sm:h-112 used in TheTulipShop
        '128': '32rem', // * sm:w-128 used in Slider
                        // * lg:h-128 in TheTulipShop
        '140': '35rem', // * lg:h-140 used in Slider
        '148': '37rem', // * Dots, Slider
        '152': '38rem', // * lg:h-152 used in Slider
        '156': '39rem', // * h-156,Dots used in Slider
        '168': '42rem', // * h-168, used in Slider
        '224': '56rem', // * lg:w-224 is used in Slider
        '1120': '280rem', // * 224 x 5, SliderKeyframe
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        'full': '100%',
        '5/1': '500%', // * SliderKeyframe
        'auto': 'auto',
      },
      transtionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionProperty: {
        'spacing': 'margin', // This is for the Dots component in Slider
        'height': 'height', // This is for Project Navbar, TransitionHeightExample
      },
      maxWidth: {
        '224': '56rem', // SliderKeyframe
        '1120': '280rem', //SliderKeyframe
        'auto': 'auto',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        'full': '100%',
      },
      maxHeight: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        'full': '100%',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', 'active'],
      borderColor: ['hover', 'focus', 'active'],
      textColor: ['hover', 'focus', 'active'],
      height: ['responsive', 'hover', 'focus', 'active'] // This is for TransitionHeightExample
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
