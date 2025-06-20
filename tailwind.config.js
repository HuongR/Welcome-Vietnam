import lineClamp from '@tailwindcss/line-clamp'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeLeft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0.8', transform: 'translateX(-10px)' }
        },
        fadeRight: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0.8', transform: 'translateX(10px)' }
        }
      },
      animation: {
        'fade-left': 'fadeLeft 0.3s ease forwards',
        'fade-right': 'fadeRight 0.3s ease forwards'
      }
    }
  },
  plugins: [lineClamp],
}