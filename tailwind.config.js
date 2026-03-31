/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#006FFF',
        'blue-dim': 'rgba(0,111,255,0.10)',
        'blue-border': 'rgba(0,111,255,0.25)',
        dark: '#0a0a0a',
        dark2: '#0d0d0d',
        dark3: '#121212',
        'border-color': '#1e1e1e',
        t1: '#ffffff',
        t2: '#aaaaaa',
        t3: '#777777',
        t4: '#555555',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
