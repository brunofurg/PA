module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#6ea5d4",
      secondary: "#428bca",
      terciary: "#0060a4",
      danger: "#e3342f",
      topic1: "#61a5fa",
      topic2: "#92c5fc",
      topic3: "#0061a2",
      border1: "#aac1e8",
      border2: "",
    }),

    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
