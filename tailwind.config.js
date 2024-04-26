/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image':
          "linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 1) 100%), url('/assets/600.webp')",
      },
    },
  },
  plugins: [],
};


