/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".greyButton": {
          backgroundColor: "#b3b3b3", // Replace with the color you want
          "&:hover": {
            backgroundColor: "#dedede", // Replace with the hover color
          },
          color: "#000",
          fontWeight: "bold",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
        },
        ".blueButton": {
          backgroundColor: "#42a5f5", // Replace with the color you want
          "&:hover": {
            backgroundColor: "#1565c0", // Replace with the hover color
          },
          color: "#fff",
          fontWeight: "bold",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
        },
        ".redButton": {
          backgroundColor: "#ef5350", // Replace with the color you want
          "&:hover": {
            backgroundColor: "#c62828", // Replace with the hover color
          },
          color: "#fff",
          fontWeight: "bold",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
        },
        ".greenButton": {
          backgroundColor: "#4caf50", // Replace with the color you want
          "&:hover": {
            backgroundColor: "#1b5e20", // Replace with the hover color
          },
          color: "#fff",
          fontWeight: "bold",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
