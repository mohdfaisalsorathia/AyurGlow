/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFBF8',
          100: '#FAF7F2',
          200: '#F5EDE6',
          300: '#EDD9C8',
        },
        gold: {
          light: '#EDD9C8',
          DEFAULT: '#C4956A',
          dark: '#A67A52',
        },
        charcoal: '#1C1C1C',
        muted: '#6B6866',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
