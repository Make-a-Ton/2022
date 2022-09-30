/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./presentation/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "source-sans-pro": "'Source Sans Pro', sans-serif",
      "source-code-pro": "'Source Code Pro', sans-serif",
      montserrat: "'Montserrat', sans-serif",
    },
    extend: {
      colors: {
        primary: "#1C1F35",
        "primary-dark": "#161930",
        "primary-light": "#38B4E7",
        devfolio: "#456FF6",
      },
    },
  },
  plugins: [],
};
