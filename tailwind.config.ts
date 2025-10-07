import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#0a0a0b',
          card: '#111114',
          line: '#2a2a2e',
        },
        brand: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: { purple: '#A78BFA' }
      },
      boxShadow: {
        card: '0 8px 30px -12px rgba(16,185,129,.25)',
        inset: 'inset 0 1px 0 0 rgba(255,255,255,.04)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config