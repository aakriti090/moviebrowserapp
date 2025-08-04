// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00FFFF",
      },
      boxShadow: {
        neonGlow: "0 2px 10px 2px rgb(113, 226, 226)", // glow in neon blue
      },
    },
  },
  plugins: [],
};
