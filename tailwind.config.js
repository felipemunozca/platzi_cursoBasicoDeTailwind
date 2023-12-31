/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class', // el dark mode se puede activar como 'media' o 'class'
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'LA': "url('../img/LA.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'miami': "url('../img/miami.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
        'santiago': "url('../img/santiago.jpg')",
        'buenos_aires': "url('../img/buenos_aires.jpg')",
        'machu_picchu': "url('../img/machu_picchu.jpg')",
        'rio_de_janeiro': "url('../img/rio_de_janeiro.jpg')",
      },
      backgroundColor: theme => ({
				...theme('colors'),
				'principal': '#CC2D4A',
				'secondary': '#8FA206',
				'tertiary': '#61AEC9',
			}),
    },
    /* textColor:{
      'principal': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
      'white': '#fff',
    }, */
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

