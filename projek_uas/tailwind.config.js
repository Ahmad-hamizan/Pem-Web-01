/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/src/**/*.{html,js,jsx,ts,tsx}",
    "./frontend/pages/**/*.{html,js,jsx,ts,tsx}",
    "./backend/src/**/*.{html,js,jsx,ts,tsx}",
    "./backend/pages/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}

