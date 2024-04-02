/* eslint-disable no-undef */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7E2DD2",
        secondary: "#C299E6",
        special: "#7FCE39",
        Dark: "#441A6A",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
