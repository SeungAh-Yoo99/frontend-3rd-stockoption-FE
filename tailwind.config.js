/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#BFD7FE",
        bgComponent: "#FFFFFF",
      },
      spacing: {
        "5%": "5%",
        "8%": "8%",
        "9%": "9%",
        "10%": "10%",
        "13%": "13%",
        "80%": "80%",
        "85%": "85%",
        "87%": "87%",
        "90%": "90%",
      },
    },
  },
  plugins: [],
};
