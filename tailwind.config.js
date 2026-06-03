/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dirt: {
          50: '#fdf6ee',
          100: '#f7e8d0',
          200: '#eed097',
          300: '#e4b45a',
          400: '#d9932a',
          500: '#c47318',
          600: '#a35812',
          700: '#7d4011',
          800: '#643315',
          900: '#532b14',
        },
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        slate: {
          850: '#1a2332',
          900: '#0f172a',
          950: '#020817',
        }
      },
    },
  },
  plugins: [],
}
