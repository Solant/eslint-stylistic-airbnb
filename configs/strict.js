'use strict';

const { rules } = require('./flat/strict');

module.exports = {
  plugins: ['@stylistic'],
  rules,
};
