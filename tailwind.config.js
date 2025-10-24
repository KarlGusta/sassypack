/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        primary60: "#212121", // dark section background
        primary30: "#CFCFCF", // text color
        primary10: "#F5AF00", // buttons / accent
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#212121",    // main dark background
          secondary: "#CFCFCF",  // text / light gray
          accent: "#F5AF00",     // buttons / highlights
          neutral: "#212121",    // card background / section bg
          "base-100": "#212121", // override default white background
          info: "#CFCFCF",       // optional info color
          success: "#F5AF00",    // optional success color
        },
      },
    ],
  },
};
