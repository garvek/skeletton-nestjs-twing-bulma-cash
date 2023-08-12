module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [],
  extends: ['plugin:prettier/recommended'],
  root: false,
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {},
};
