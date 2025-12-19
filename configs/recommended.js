'use strict';

const { rules } = require('./flat/recommended');

module.exports = {
  plugins: ['@stylistic'],
  rules,
};
