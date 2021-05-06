const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
	    gridTemplateColumns: {
		    'auto-fit': 'repeat(auto-fit, minmax(320px, 1fr))',
		    'auto-fill': 'repeat(auto-fill, minmax(320px, 1fr))',
	    },
    },
	  colors: {
    	primary: colors.blue["400"],
		  secondary: colors.amber["400"],
		  wall: colors.gray["50"]
	  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
