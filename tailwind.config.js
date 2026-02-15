module.exports = {
  darkMode: 'class',
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'oklch(0.979 0.021 166.113)',
          100: 'oklch(0.95 0.052 163.051)',
          200: 'oklch(0.905 0.093 164.15)',
          300: 'oklch(0.845 0.143 164.978)',
          400: 'oklch(0.765 0.177 163.223)',
          500: 'oklch(0.696 0.17 162.48)',
          600: 'oklch(0.596 0.145 163.225)',
          700: 'oklch(0.508 0.118 165.612)',
          800: 'oklch(0.432 0.095 166.913)',
          900: 'oklch(0.378 0.077 168.94)',
          950: 'oklch(0.262 0.051 172.552)',
        },
        black: '#000000',
        white: '#FFFFFF',
        bg: {
          light: '#F4F4F6',
          dark: '#161616',
        },
        fg: {
          light: '#323232',
          dark: '#FFFFFF',
        },
        card: {
          light: '#FFFFFF',
          dark: '#202020',
        },
        border: {
          light: '#E9E9E9',
          dark: '#101010',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  }
}
