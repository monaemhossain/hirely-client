/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-color-1': '#1c7c54',
        'theme-color-2': '#73e2a7',
        'theme-color-3': '#def4c6',
        'theme-color-4': '#2cda9d',
        'theme-color-5': '#1b512d',

      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light",
  }
}