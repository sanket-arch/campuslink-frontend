/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        heading: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'Fira Mono',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        // Custom sizes
        'huge': '4rem',
      },
      colors: {
        primary: '#1e40af',
        secondary: '#f59e42',
        accent: '#10b981',
        'link-primary': 'var(--link-primary)',

        // Custom colors
        brand: {
          light: '#e0e7ff',
          DEFAULT: '#6366f1',
          dark: '#3730a3',
        },
      },
    },
  },
  plugins: [],
}