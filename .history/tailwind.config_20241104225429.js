/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          500: "#00bfd6",
        },
        btnLogin: {
          200: "#03b2c7"
        }
      },
    },
  },
  plugins: [],
}

