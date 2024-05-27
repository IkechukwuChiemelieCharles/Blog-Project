/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*js"],
  theme: {
    extend: {
      colors: {
        btnCol: "#4B6BFB;",
        paragraphCol: "#3B3C4A",
        headerCol: "#181A2A",
        advetBxCol: "#E8E8EA",
        iconCol: " #696A75",
        searchCol: "#F4F4F5",
        headFootercol: "#F6F6F7",
        bgCol: "#FFFFFF",
        darkMdBg: "#181A2A",
        darkFooterBg: "#242535 ",
        linkHover: "#4B6BFB ",
      },
      dropShadow: {
        "3xl": "0 0 3px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleX(0)" },
          "80%": { transform: "scaleX(1.2)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
    fontFamily: {
      myFont: ["Plus Jarkata Sans"],
      myFont2: ["Work Sans"],
      myFont3: ["Source Serif"],
    },
  },
  plugins: [],
};
