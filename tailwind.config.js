module.exports = {
  darkMode: 'class',
  mode: 'jit',
  plugins: [],
  purge: {
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
    enabled: process.env.NODE_ENV === 'production',
    safeList: []
  },
  theme: {
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
