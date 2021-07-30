/* eslint-disable sort-keys */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@websublime/eslint-config/typescript-react'],
  ignorePatterns: ['tmp/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  root: true,
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-self-import': 'error',
    'simple-import-sort/imports': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  }
};
