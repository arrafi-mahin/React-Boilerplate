/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#001E17',
        primary1: '#023535',
        primary2: '#015958',
        primary3: '#008F8C',
        primary4: '#0CABA8',
        primary5: '#0FC2C0',
        light: '#E2E8F0',
        gray:'#88A4AB',
        label: '#88A4AB',
        danger: '#e53e3e'
      },
      fontFamily:{
        nunito: ['Nunito Sans', 'sans-serif'],
      },

    },
  },
  plugins: [],
}