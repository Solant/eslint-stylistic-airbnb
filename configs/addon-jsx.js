'use strict';

const rules = require('./flat/addon-jsx');

module.exports = {
  plugins: ['@stylistic'],
  rules,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
