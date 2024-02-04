/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./docs/**/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "bright-orange": "var(--bright-orange)",
        "dark-cyan": "var(--dark-cyan)",
        "very-dark-cyan": "var(--very-dark-cyan)",
        "transparent-white": "var( --transparent-white)",
        "very-light-gray": "var(--very-light-gray)",
      },
      fontFamily: {
        "lexend-deca": "var(--lexend-deca)",
        "big-shoulder": "var(--big-shoulder)",
      },
    },
  },
  plugins: [],
};
