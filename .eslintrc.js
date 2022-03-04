module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-unused-vars': ['error'],
    'no-console': ['error'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'indent': ['error', 2],
    'max-len': ['error'],
    'no-use-before-define': ['error'],
  },
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
};
