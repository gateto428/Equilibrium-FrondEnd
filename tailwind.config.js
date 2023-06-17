/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'equilibrium': '#3b144d',
        'pink': '#b777d5',
        'purple': '#9c34cb',
        'gray': '#9e9e9e',
        'white': '#fff',
        'red': "#FF0000",
        'primary': '#fff'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'Montserrat'],
        open: ['Open Sans', ' open-sans']
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    }
  }