/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f2',
          100: '#e0e9e5',
          200: '#c2d3cc',
          300: '#9eb8af',
          400: '#7b9e92',
          500: '#5f8477',
          600: '#475749',
          700: '#364137',
          800: '#2b332b',
          900: '#1f241f',
        },
      },
    },
  },
  plugins: [],
}