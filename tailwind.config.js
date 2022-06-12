module.exports = {
  content: [
    "./pages/index.js",
    "./components/list.js",
    "./pages/ThreeBox.js",
    "./pages/ThreeDistortedSphere.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}