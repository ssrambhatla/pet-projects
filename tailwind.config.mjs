/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#fff8ef',
        sage: '#7f9f8a',
        moss: '#426150',
        blush: '#f2d8d5',
        ink: '#243028',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(66, 97, 80, 0.16)',
      },
    },
  },
  plugins: [],
};
