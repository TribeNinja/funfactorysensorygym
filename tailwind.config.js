module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        ffsgPink: "#FE346E",
        ffsgLightPink: "#FFEBF1",
        ffsgPurple: "#57358F",
        ffsgGray: "#EDEDED",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
