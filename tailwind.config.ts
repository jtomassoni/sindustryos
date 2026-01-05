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
        // Editorial, warm, hospitality-focused palette
        // Think aged whiskey, worn leather, warm wood, patina
        primary: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8ddd0',
          300: '#d4c4b0',
          400: '#b8a085',
          500: '#9d8266', // Aged wood / whiskey
          600: '#7d6852',
          700: '#5f4f40',
          800: '#453a30',
          900: '#2e2620',
        },
        secondary: {
          50: '#f7f5f3',
          100: '#ebe7e2',
          200: '#d4ccc2',
          300: '#b8aa9c',
          400: '#9d8874',
          500: '#7d6b5a', // Warm taupe
          600: '#655548',
          700: '#4f4339',
          800: '#3d342c',
          900: '#2a231e',
        },
        accent: {
          50: '#fef7ed',
          100: '#fdebd5',
          200: '#fad4aa',
          300: '#f6b874',
          400: '#f0953d', // Warm amber (softer than before)
          500: '#d97717',
          600: '#b85f14',
          700: '#964a16',
          800: '#7a3c15',
          900: '#653212',
        },
        warm: {
          50: '#fefaf6',
          100: '#fdf4eb',
          200: '#fae6d1',
          300: '#f5d0b0',
          400: '#edb584',
          500: '#e0955a', // Warm terracotta
          600: '#c77a42',
          700: '#a35f36',
          800: '#844d2e',
          900: '#6c4026',
        },
        dark: {
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e6e1d9',
          300: '#d4ccc0',
          400: '#b8ada0',
          500: '#9d8f80',
          600: '#7d7164',
          700: '#5f554b',
          800: '#453d36',
          900: '#2e2824', // Warm dark (not pure black)
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'], // For headings
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


