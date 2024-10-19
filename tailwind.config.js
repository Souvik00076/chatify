/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#6D00DB',
        'primary-gray': '#CCCCCC',
      },
      backgroundImage: theme => ({
        app_container: "url('./assets/app_background.svg')",
        desktop_container: "url('./assets/background_desktop.svg')",
      }),
    },
  },
  plugins: [],
};
