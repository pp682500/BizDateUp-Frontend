/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandYellow: "#FFF7D1",
        brandAccent: "#FCDC3B",
        brandIndigo: "#4f46e5"
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xl: "1rem"
      }
    },
  },
  plugins: [],
};
