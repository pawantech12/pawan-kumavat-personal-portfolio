/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 0 5px rgba(39, 25, 77, .02), 0 3px 20px rgba(112, 81, 239, .04), 0 10px 28px rgba(39, 25, 77, .03)",
      },
    },
  },
  plugins: [],
};
