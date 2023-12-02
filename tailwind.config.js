/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./app.vue",
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'gold': '#D2AC47',
        'gold1': {
          100: '#FFF8DC', // Lighter gold shade for backgrounds
          200: '#FAD02E', // Gold color for hover states
          300: '#EEDC82', // Light gold for disabled state
          400: '#DAA520', // Default gold color
        },
        'darkblue': '#122345',
        'background': '#FDF6EC',
        'darkgold': '#836B0B',
        'primary': { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d", "950": "#450a0a" }
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated'),
    require("tw-elements/dist/plugin.cjs"),
  ],
}

