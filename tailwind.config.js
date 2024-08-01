/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#2482c5",
        bgComponent: "#FFFFFF",
      },
      spacing: {
        "13%": "13%",
        "80%": "80%",
      },
    },
  },
  plugins: [],
};
