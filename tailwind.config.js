/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(-5%)",
          },
          "50%": {
            transform: "translateY(8%)",
          },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 5s ease-in-out infinite",
      },
      colors: {
        // "light-primary": "#A369F0",
        // primary: "#6F36BB",
        // "dark-primary": "#35174D",
        // "light-secondary": "#FF7FA7",
        // secondary: "#FF4878",
        // "dark-secondary": "#C6004D",
        "light-primary": "#ff4f38",
        primary: "#c9040c",
        "dark-primary": "#900000",
        "light-secondary": "#64d8b3",
        secondary: "#2aa683",
        "dark-secondary": "#007656",
        "light-dark": "#363D53",
        black: "#0F172A",
        "dark-black": "#080808",
        "light-white": "#FDFDFD",
        white: "#FCFCFC",
        "dark-white": "#C9C9C9",
      },
      fontSize: {
        caption: "0.75rem",
        button: "0.875rem",
        subtitle: "0.9375rem",
        text: "1rem",
        "heading-5": "1.4375rem",
        "heading-4": "2.0625rem",
        "heading-3": "2.875rem",
        "heading-2": "3.625rem",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      letterSpacing: {
        caption: "0.4px",
        subtitle: "0.15px",
        button: "1.25px",
        text: "0.5px",
        "heading-4": "0.25px",
        "heading-2": "-0.5px",
      },
    },
  },
  plugins: [],
};
