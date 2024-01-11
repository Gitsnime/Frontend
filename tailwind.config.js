const colors = require("tailwindcss/colors");

const primary = {
  DEFAULT: "rgb(74, 78, 105)",
  120: "rgba(74, 78, 105, 0.12)",
  240: "rgba(74, 78, 105, 0.24)",
  380: "rgba(74, 78, 105, 0.38)",
};

const secondary = {
  DEFAULT: "rgb(130, 130, 255)",
  120: "rgba(130, 130, 255, 0.12)",
  240: "rgba(130, 130, 255, 0.24)",
  360: "rgba(130, 130, 255, 0.36)",
};

const accent = {
  DEFAULT: "rgb(156, 39, 176)",
  120: "rgba(156, 39, 176, 0.12)",
  240: "rgba(156, 39, 176, 0.24)",
  360: "rgba(156, 39, 176, 0.36)",
};

const black = {
  DEFAULT: "rgb(34, 34, 34)",
  120: "rgba(34, 34, 34, 0.12)",
  240: "rgba(34, 34, 34, 0.24)",
  380: "rgba(34, 34, 34, 0.38)",
};

// DITAMBAH WHITE MALAH ERROR
// const white = {
//   DEFAULT: "rgb(250, 250, 250)",
//   380: "rgba(250, 250, 250, 0.38)",
//   870: "rgba(250, 250, 250, 0.87)",
// };

const negative = {
  DEFAULT: "rgb(193, 0, 21)",
};

const info = {
  DEFAULT: "rgb(65, 94, 207)",
};
const warning = {
  DEFAULT: "rgb(242, 192, 55)",
};

const positive = {
  DEFAULT: "rgb(33, 186, 69)",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary,
        secondary,
        accent,
        black,
        positive,
        negative,
        warning,
        info,
      },
    },
  },
  plugins: [],
  presets: [require("@morpheme/tailwind-config/preset")],
};
