/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#092635",
        primaryLight: "#9EC8B9",
        primaryDark: "#5C8374",
        primaryContrast: "#FFFFFF", // For text or elements on primary background
        secondary: "#5C8374",
      },
    },
  },
  plugins: [],
};
