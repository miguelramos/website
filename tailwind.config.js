module.exports = {
  darkMode: 'class',
  // mode: 'jit',
  plugins: [],
  content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        black: '#191923',
        nigth: {
          800: '#23232dfa',
          900: '#20212a'
        }
      }
    },
    maxWidth: {
      '120': '30rem',
      '160': '40rem',
      '200': '50rem',
    },
    minWidth: {
      '40': '10rem',
      '60': '15rem',
      '80': '20rem',
      '100': '25rem',
    }
  },
  variants: {}
};
