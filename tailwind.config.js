module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",

      extend: {
        width: {
          192: "48rem",
        },

        container: {
          center: true,
          padding: "2rem",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
