/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        primary60: "#212121",
        primary30: "#CFCFCF",
        primary10: "#F5AF00",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#212121", // main
          secondary: "#CFCFCF", // light gray
          accent: "#F5AF00",   // yellow
          neutral: "#212121",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
