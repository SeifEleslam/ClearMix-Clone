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
        bgsec5: "#111a44",
        prim: "#e60f47",
        sec: "#ff5800",
        txprim: "#9b9bc9",
        txdef: "#fff",
        txsub: "#4f4f66",
        bgprim: "#080810",
        bgsec: "#252536",
      },
      boxShadow: {
        // "3xl": "0 11px 41px 0 rgba(0, 0, 0, 1)",
        // xxl: "0 -1px 21px 0 rgba(0, 0, 0, 1)",
        gold: "0 25px 50px -12px rgba(196, 2, 53, .3)",
      },
    },
  },
  plugins: [],
};
