/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'spooky-orange': '#FF6600',
        'spooky-purple': '#6600FF',
        'spooky-green': '#00FF66',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}