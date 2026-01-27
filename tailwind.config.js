/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        accent: ["Rock Salt", "cursive"],
        "bw-gradual": ["Bw Gradual", "sans-serif"],
      },
    },
  },

  plugins: [],
};
