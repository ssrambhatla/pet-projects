/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        slate: {
          light: '#f1f5f9',
          DEFAULT: '#e2e8f0',
          dark: '#475569',
        },
        accent: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
          light: '#e0f2fe',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
