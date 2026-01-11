'use strict';

const { rules } = require('./flat/compat');

module.exports = {
  plugins: ['@stylistic'],
  rules,
};
