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
        // Cool charcoal + teal/forest — clean hospitality ops, not whiskey wood
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#0d9488', // Teal brand
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#042f2e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b', // Cool slate
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399', // Brighter teal-green for hover/emphasis
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        warm: {
          // Name kept for churn control; values are cool soft neutrals
          50: '#f8fafb',
          100: '#f1f5f7',
          200: '#e2e8ed',
          300: '#c8d2db',
          400: '#9aabba',
          500: '#718496',
          600: '#586a7c',
          700: '#455564',
          800: '#384554',
          900: '#2f3a47',
        },
        dark: {
          50: '#f4f7f8',
          100: '#e8eef1',
          200: '#d0dbe2',
          300: '#a8b8c4',
          400: '#7a8f9e',
          500: '#5a6f7e',
          600: '#455660',
          700: '#2a3540',
          800: '#1c2430',
          900: '#0f1419', // Cool charcoal
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
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
        'warm': '0 4px 6px -1px rgba(13, 148, 136, 0.12), 0 2px 4px -1px rgba(13, 148, 136, 0.06)',
      },
    },
  },
  plugins: [],
}
export default config
