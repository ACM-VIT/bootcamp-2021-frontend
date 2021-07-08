module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      width: {
        192: "48rem",
        160: "40rem",
        175: "43.75rem",
        152: "38rem",
        140: "35rem",
        120: "30rem",
        150: "37.5rem",
        310: "77.5rem",
      },
      zIndex: {
        "-10": "-10",
      },
      lineHeight: {
        16: "4rem",
        9: "3rem",
        7.5: "1.875",
      },
      inset: {
        112: "28rem",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontSize: {
        "landing-large": ["4.4rem", "4.5rem"],
        "landing-xsmall": ["2.6rem", "3rem"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
