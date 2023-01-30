/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // adding the 'dark:' will change the theme
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins:{
    'preflight': 'false',
 },
}