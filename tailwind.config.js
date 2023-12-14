/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".blueButton": {
          backgroundColor: "#3490dc", // Replace with the color you want
          "&:hover": {
            backgroundColor: "#2779bd", // Replace with the hover color
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
