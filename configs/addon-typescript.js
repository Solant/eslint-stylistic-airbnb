'use strict';

const { rules } = require('./flat/addon-typescript');

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules,
};
