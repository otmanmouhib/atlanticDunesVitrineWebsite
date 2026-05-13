module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6fb",
          100: "#d8eaf7",
          200: "#b5d5ed",
          300: "#8bb8df",
          400: "#5f94c5",
          500: "#3c74a7",
          600: "#335c87",
          700: "#2b496c",
          800: "#243b55",
          900: "#1f3146"
        },
        accent: {
          50: "#ecf9f1",
          100: "#d8f1e0",
          200: "#b4e6c2",
          300: "#89d298",
          400: "#57b76b",
          500: "#3f9851",
          600: "#337a42",
          700: "#2d6639",
          800: "#27542f",
          900: "#22472a"
        }
      }
    }
  },
  plugins: []
};
