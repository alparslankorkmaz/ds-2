/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/img/hero-img.jpg')",
        golyazi: "url('/img/golyazi.jpeg')",
      },

      colors: {
        "ds-green": "#1C7C54",
        "ds-light-green": "#DDF1CF",
        "ds-purple": "#A5B5EB",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
