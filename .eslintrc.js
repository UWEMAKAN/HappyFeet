module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-debugger': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': 'off',
    'comma-dangle': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  root: true
};
