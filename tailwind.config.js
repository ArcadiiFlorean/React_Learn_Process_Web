/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        fontFamily: {
          custom: "var(--font3)",
        },
      },
    },
  },
  plugins: [],
};
