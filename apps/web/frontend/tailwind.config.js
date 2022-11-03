/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important:true,
  corePlugins:{
     'preflight': 'false',
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ]
}
