/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "8/10-screen": "80vw",
        "9/10-screen": "90vw",
        "8/10": "80%",
        "9/10": "90%",
      },
      height: {
        "8/10-screen": "80vh",
        "9/10-screen": "90vh",
        "8/10": "80%",
        "9/10": "90%",
      },
      backgroundImage: {
        "diagonal-grey-sprites-pattern":
          "repeating-linear-gradient(-54deg, #e1e1e1 2%, #c6b095 2% 4%, #e1e1e1 4% 6%)",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
}
