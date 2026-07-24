/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf7f2',
        sage: '#7f9f8a',
        moss: '#3d5147',
        blush: '#e8d5d0',
        ink: '#1a2420',
        gold: '#c4a35a',
        charcoal: '#2a2a2a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(61, 81, 71, 0.12)',
        luxury: '0 16px 48px rgba(26, 36, 32, 0.08)',
      },
    },
  },
  plugins: [],
};
