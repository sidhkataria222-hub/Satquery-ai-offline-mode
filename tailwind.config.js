/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        geo: {
          50: '#f0fdf4',
          100: '#dcfce7',
          900: '#022c22',
        }
      }
    },
  },
  plugins: [],
}
