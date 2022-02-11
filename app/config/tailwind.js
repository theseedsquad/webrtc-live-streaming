const plugin = require('tailwindcss/plugin')

const mapPixels = require('../utils/map-pixels')

const colors = require('../constants/colors')
const breakpoints = require('../constants/breakpoints')
const container = require('../constants/container')

const screens = mapPixels(breakpoints)
const maxWidth = mapPixels(container)

module.exports = {
  theme: {
    fontFamily: {
      body: 'Roboto',
      title: 'Roboto Condensed',
    },
    screens,
    extend: {
      colors: {
        body: '#030303',
        ...colors,
      },
      backgroundColor: {
        body: '#FFFFFF',
      },
      maxWidth,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          color: theme('colors.body'),
          backgroundColor: theme('backgroundColor.body'),
          fontFamily: theme('fontFamily.body'),
        },
      })
    }),
  ],
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.js',
  ],
}
