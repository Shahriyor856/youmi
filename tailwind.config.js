/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        spectre: "#fefefe",
      },
      animation: {
        "scroll-left": "scroll-left 28s  linear infinite",
        "scroll-right": "scroll-right 32s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 25s linear infinite",
        "scroll-right": "scroll-right 30s linear infinite",
      },
    },
  },
  plugins: [],
};
