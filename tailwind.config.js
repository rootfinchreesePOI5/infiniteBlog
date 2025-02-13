/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#FBFBFB",
        'main': "#C5BAFF",
        'dark-primary': "#151517",
        'dark-main':"#6b00b8",
        "text": "black",
        "dark-text": "white"
      },
    },
  },
  plugins: [],
}