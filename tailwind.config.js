/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        vibrate: {
          '0%': {
              'transform': 'translate(0)'
          },
          '20%': {
              'transform': 'translate(-2px, 2px)'
          },
          '40%': {
              'transform': 'translate(-2px, -2px)'
          },
          '60%': {
              'transform': 'translate(2px, 2px)'
          },
          '80%': {
              'transform': 'translate(2px, -2px)'
          },
          '100%': {
              'transform': 'translate(0)'
          }
        },
        jello: {
          '0%': {
            'transform': 'scale3d(1, 1, 1)'
          },
          '30%': {
            'transform': 'scale3d(1.25, 0.75, 1)'
          },
          '40%': {
            'transform': 'scale3d(0.75, 1.25, 1)'
          },
          '50%': {
            'transform': 'scale3d(1.15, 0.85, 1)'
          },
          '65%': {
            'transform': 'scale3d(0.95, 1.05, 1)'
          },
          '75%': {
            'transform': 'scale3d(1.05, 0.95, 1)'
          },
          '100%': {
            'transform': 'scale3d(1, 1, 1)'
          }
        }
      },
      animation: {
        'vibrate': 'vibrate 1.3s linear infinite both',
        'jello': 'jello 0.9s both'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
