/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        5: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      colors: {
        "color-text": "#ffffff",
      },
      backgroundColor: {
        "green-primary": "#17e444",
        "green-light": "#17e44380",
      },
      borderColor: {
        "green-primary": "#17e444",
      },
    },
  },
  plugins: [],
};
