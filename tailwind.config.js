/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4433ff',
        secondary: '#18122B',
        tertiary: '#202040',
      },
     
    },
  },
 
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        // ...
        colors: {
        primary: '#4433ff',
        warning: '#18122B',
        secondary: '#202040',
        },
      },
     
    },
  }),],
}
