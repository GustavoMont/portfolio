/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-primary": "#A369F0",
        primary: "#6F36BB",
        "dark-primary": "#35174D",
        "light-secondary": "#FF7FA7",
        secondary: "#FF4878",
        "dark-secondary": "#C6004D",
        "light-dark": "#363D53",
        black: "#0F172A",
        "dark-black": "#080808",
        "light-white": "#FDFDFD",
        white: "#FCFCFC",
        "dark-white": "#C9C9C9",
      },
    },
  },
  plugins: [],
};
