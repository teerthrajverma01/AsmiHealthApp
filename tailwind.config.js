/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      colors: {
        neutral600: "#475467",
        neutral900: "#101828",
        white: "#ffffff",
        neutral300: "#d0d5dd",
        primary04: "#0d3542",
        neutral50501: "#f6f7f9",
        black: "#000000",
        neutral200: "#eaecf0",
        neutral500: "#667085",
        primary03: "#fe5636",
        neutral800: "#1d2939",
        neutral400: "#98a1b2",
        neutral700: "#344054",
        error200: "#fecaca",
        error700: "#b91c1c",
        neutral100: "#f2f4f7",
        white64: "rgba(255, 255, 255, 0.64)",
        darkSlateGrey: "#204551",
        white8: "rgba(255, 255, 255, 0.08)",
        neutral25: "#fcfcfd",
        success700: "#15803d",
        success200: "#bbf7d0",
        warning50: "#fffbeb",
        primary01: "#fed6e1",
        primary02: "#fbb82f",
      },
    },
  },
  plugins: [],
};
