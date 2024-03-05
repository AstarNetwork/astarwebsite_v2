/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    extend: {
      aspectRatio: {
        'blog': '191.04 / 100',
        '4/3': '4 / 3',
      },
      colors: {
        'blue':{
          DEFAULT:"#0075FF",
        },
        'pink':{
          DEFAULT:"#E6007A",
        },
        'purple':{
          DEFAULT:"#5928B1",
        },
        'space-gray':{
          light:"#405FBA",
          lighter:"#112769",
          DEFAULT:"#071643",
          dark:"#081029"
        },
        'space-pink':{
          light:"#FFADD9",
          lighter:"#FB4AA8",
          DEFAULT:"#E0338F",
        },
        'space-purple':{
          light:"#C9A5FF",
          lighter:"#9256ED",
          DEFAULT:"#703AC2",
        },
        'space-blue':{
          light:"#A4BDFF",
          lighter:"#3D73FF",
          DEFAULT:"#215AEC",
        },
        'space-sky':{
          light:"#9ED8FF",
          lighter:"#34ADFF",
          DEFAULT:"#0099FF",
        },
        'space-cyan':{
          light:"#A7F5FF",
          lighter:"#66EDFF",
          DEFAULT:"#0AE2FF",
        },
        'space-teal':{
          light:"#C0FFF4",
          lighter:"#80FFE8",
          DEFAULT:"#00FFD1",
        }
      },
      fontFamily: {
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
        'jp': ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
        'roboto': ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
