/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: "#e60f47",
        sec: "#ff5800",
        txprim: "#9b9bc9",
        txdef: "#fff",
        bgprim: "#080810",
        bgsec: "#252536",
        // dark theme
        dprim: "",
        dtxprim: "",
        dbgprim: "",
      },
    },
  },
  plugins: [],
};
