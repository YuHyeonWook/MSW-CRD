/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryLight: "var(--color-primary-light)",
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};
