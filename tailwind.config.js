const { text } = require('stream/consumers')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#121212',
        light: '#F5F5F5',
        lightgray: '#D9D9D9',
        customgray: '#717171',
        customred: '#D9000D',
        customgreen: '#2B8128',
        custombllue: '#3D7BAA'
      },
      text: {
        grey: '#717171',
        light: '#F5F5F5'
      }
    }
  },
  plugins: []
}
