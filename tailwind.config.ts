import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* background: "var(--background)",
        foreground: "var(--foreground)", */
        primary: {
          light: '#FFFFFF', // Custom light mode color
          DEFAULT: '#EEEEEE', // Default color
          dark: '#1C1C1C', // Custom dark mode color
        },
        background: {
          light: '#EEEEEE', // Light mode background
          dark: '##1C1C1C', // Dark mode background
        },
        accent: '#00FAEB', // Accent color
      },
      screens: {
        'xs': '320px',
        'xx': '350px',
        'xr': '400px'
      },
      fontFamily: {
        stretchPro: ['Stretch Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
