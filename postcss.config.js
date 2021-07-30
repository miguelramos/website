/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    // PostCSS plugin to unwrap nested rules like how Sass does it.
    require('postcss-nested')
  ]
};
