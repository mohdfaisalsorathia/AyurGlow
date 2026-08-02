/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFBF5',
          100: '#F8F5ED',
          200: '#F0EBD8',
          300: '#E4DCCA',
        },
        gold: {
          light: '#D4B896',
          DEFAULT: '#B8860B',
          dark: '#96710A',
        },
        sage: {
          50:  '#F0F5F0',
          100: '#DCE8DC',
          200: '#B8D1B8',
          300: '#8FB88F',
          400: '#6B9E6B',
          500: '#4A7C4A',
          600: '#3A6340',
          700: '#2D4F32',
          800: '#1F3822',
          900: '#142518',
        },
        forest: {
          50:  '#EFF5EE',
          100: '#D3E4D1',
          200: '#A8C9A4',
          300: '#7DAE77',
          400: '#5A9353',
          500: '#3E7A3A',
          600: '#2F5F2D',
          700: '#234923',
          800: '#1A351A',
          900: '#0F220F',
        },
        earth: {
          light: '#D4C4A8',
          DEFAULT: '#8B7355',
          dark: '#5C4A33',
        },
        charcoal: '#1C1C1C',
        muted: '#5A6B5A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
