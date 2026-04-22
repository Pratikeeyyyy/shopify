/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: "#A3A6FF",
        sec: "#62FAE3",
        ter: "#131313",
        dark: "#0A0A0A",
        soft: "#1A1A1A",
        muted: "#9CA3AF",
        bordercolor: "#1A1A1A99",
        navcolor: "#ADAAAA",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif" , ""],
      },
    },
  },
  plugins: [],
};
