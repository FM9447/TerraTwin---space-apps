/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#04070D',
          900: '#070A10',
          850: '#0B101B',
          800: '#0E1422',
          700: '#151D2F',
          600: '#1E293B',
          500: '#334155'
        },
        nasa: {
          blue: '#0B3D91',
          red: '#FC3D21',
          gold: '#F59E0B',
          cyan: '#06B6D4'
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
