/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      width: {
      150: "150px",
      190: "190px",
      225: "225px",
      275: "275px",
      300: "300px",
      340: "340px",
      350: "350px",
      375: "375px",
      460: "460px",
      656: "656px",
      880: "880px",
      508: "508px",
    },
    height: {
      80: "80px",
      150: "150px",
      225: "225px",
      300: "300px",
      340: "340px",
      370: "370px",
      420: "420px",
      510: "510px",
      600: "600px",
      650: "650px",
      685: "685px",
      800: "800px",
      "90vh": "90vh",
    },
    minWidth: {
      210: "210px",
      350: "350px",
      620: "620px",
    },
      colors: {
        primary: "#f5f3f3",
        headingColor:"#2e2e2e",
        textColor:"#515151",
        cartNumBg:"#e80013",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        cardOverlay:"rgba(256,256,256,0.4)",
        lighttextGray : '#9ca0ab',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl":"1536px",
    },
  },
  plugins: [],
};
