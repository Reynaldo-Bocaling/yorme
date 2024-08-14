/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Sigmar One", "sans-serif"],
      },
      backgroundColor: {
        "sky-blue": "#00C3FF",
        "dark-violet": "#400072",
      },
      colors: {
        "yellow-10": "#FFAE00",
        "dark-violet": "#400072",
        "sky-blue": "#00C3FF",
      },
    },
  },
  plugins: [],
};
