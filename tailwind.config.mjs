/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        title: ['21rem']
      },
      colors: {
        'primary-ligth': '#f3f4f6',
        'primary-dark': '#1a1a1a',
        'content-ligth': '#667085',
        'content-dark': '#C0C5D0',
        'accent-pink': '#FF0080',
        'accent-dark-blue': '#363F72',
        'acent-orange': 'C4320A',
        'accent-yellow': '#FFD700',
        'accent-green': '#027A48',
        'accent-blue': '#3538C'
      }
    }
  },
  plugins: []
}
