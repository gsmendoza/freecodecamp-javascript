module.exports = {
  plugins: [
    'jasmine',
  ],
  env: {
    browser: true,
    es2020: true,
    jasmine: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
  },
};
