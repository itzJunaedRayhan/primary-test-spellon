module.exports = {
  mode: 'jit',
  purge: ['./dist/*.{html,js}'],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '576px',
      'md': '768px',
      'lg': '990px',
      'xl': '1200px',
      '2xl' : '1400px'
    },
    extend: {
      fontFamily: {
        WorkSans: "'Work Sans', sans-serif",
      },
      colors: {
        'primary': '#004750',
        'secondary' : '#646464',
      }
    },
  },
  plugins: [],
}
