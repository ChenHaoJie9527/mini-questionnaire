/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "8rem",
        "2xl": "12rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
