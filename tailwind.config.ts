import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10233F',
        canvas: '#F5F7FB',
        brand: '#0E4DA4',
        mint: '#14B8A6'
      },
      boxShadow: {
        card: '0 12px 30px rgba(16, 35, 63, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
