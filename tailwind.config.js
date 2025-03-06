/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,twig}", "./src/_templates/**/*.twig"],
  // important: true,
  theme: {
    extend: {
      transitionProperty: {
        transform: "transform",
      },
      scale: {
        110: "1.1",
        150: "1.5",
      },
      screens: {
        menuMb: "1101px",
      },

      fontFamily: {
        montserrat: ['"Montserrat"', "serif"],
      },
      boxShadow: {
        accredited: "3px 3px 12px 0px rgba(0, 0, 207, 0.20)",
        news: "3px 3px 12px 0px rgba(0, 0, 207, 0.20)",
        childPage: "9px 0 20px 0px rgb(0 4 168 / 18%);",
      },
      dropShadow: {
        "btn-slide": "2px 2px 10px rgba(0, 0, 0, 0.05)",
        "gallery-item": "4px 4px 20px 0px rgba(0, 0, 0, 0.15)",
        partner: "4px 4px 15px 0px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        rotation360: "rotation360 10s linear infinite",
        "flash-badge": "flash 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        rotation360: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        flash: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(0.85)",
          },
        },
      },
      backgroundImage: {
        vn: "url('public/images/vietnam.png')",
        eng: "url('public/images/eng.webp')",
      },
      backgroundPosition: {
        vn: "center",
        eng: "center",
      },
      backgroundSize: {
        vn: "cover",
        eng: "cover",
      },
      fontSize: {
        title: "38px",
        titleMb: "28px",
        titleDK: "1.8rem",
      },
      colors: {
        lightText: "#9aa5b1",
        facebook: {
          blue: "#1877F2",
          dark: "#2851A3",
          light: "#8BC6FF",
        },
        instagram: {
          pink: "#E1306C",
          purple: "#833AB4",
          red: "#FD1D1D",
          yellow: "#FCAF45",
          blue: "#4C68D7",
        },
        tiktok: {
          red: "#FE2C55",
          cyan: "#25F4EE",
          black: "#000000",
          white: "#FFFFFF",
        },
        navyBlue: {
          50: "#edf9ff",
          100: "#d6f0ff",
          200: "#b5e7ff",
          300: "#83daff",
          400: "#48c3ff",
          500: "#1f1fff",
          600: "#0046ba",
          700: "#0000cf",
          800: "#0000a8",
          900: "#000080",
        },
        yellow: "#fff434",
        yellowLogo: "#e9b20f",
        black: "#393939",
        black1: "#333333",
        black2: "#666666",
        stroke: "#E3E3E3",
        stroke1: "#F9F9F9",
        red: "#d32f2f",
        persianRed: {
          50: "#fdf3f3",
          100: "#fde3e3",
          200: "#fbcdcd",
          300: "#f8a9a9",
          400: "#f17878",
          500: "#e74c4c",
          600: "#d32f2f",
          700: "#b12424",
          800: "#932121",
          900: "#7a2222",
          950: "#420d0d",
        },
        y200: "#fff59d",
        y100: "#fff9c4",
        titleColor: "#032d6c",
      },
      spacing: {
        1.25: "5px",
        2.5: "10px",
      },
      borderRadius: {
        1.25: "5px",
      },
    },
  },
  plugins: [],
};
