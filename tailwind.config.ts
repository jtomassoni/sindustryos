import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, inviting, not super bright - Irish dive bar aesthetic
        // Lively and warm but moody
        primary: {
          50: '#fef3e2',
          100: '#fde4b8',
          200: '#fbc98a',
          300: '#f9a85c',
          400: '#f78a3a',
          500: '#f56b1a', // Primary warm amber/gold
          600: '#d95415',
          700: '#b84014',
          800: '#963316',
          900: '#7a2d15',
        },
        secondary: {
          50: '#f5f1f0',
          100: '#e8ddd9',
          200: '#d4c0b8',
          300: '#b99a8e',
          400: '#9d7a6b',
          500: '#8a6251', // Deep burgundy/brown
          600: '#735044',
          700: '#5f4239',
          800: '#503830',
          900: '#45322c',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Warm amber accent
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529', // Dark base (not pure black)
          900: '#1a1d20',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'warm': '0 4px 6px -1px rgba(245, 107, 26, 0.1), 0 2px 4px -1px rgba(245, 107, 26, 0.06)',
      },
    },
  },
  plugins: [],
}
export default config

