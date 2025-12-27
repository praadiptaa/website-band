/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Album-inspired palette
        primary: {
          DEFAULT: '#b81f1f', // vivid album red
          600: '#8b0f0f'
        },
        accent: '#d9a276', // warm beige/gold
        cream: '#f5e6da',
        dark: {
          DEFAULT: '#0b0b0b',
          700: '#050505'
        },
        brown: '#3a2720',
        muted: '#bfb5ae'
      }
    }
  },
  plugins: []
}
