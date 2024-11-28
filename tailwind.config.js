/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
        "spin-slow": "spin 2s linear infinite",
      },
      colors: {
        custom: {
          teal: "#36BFB1",
          darkTeal: "#038C73",
          darkerTeal: "#02735E",
          darkGreen: "#014034",
          black: "#0D0D0D",
        },
      },
    },
  },
};
