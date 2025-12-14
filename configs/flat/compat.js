'use strict';

const rules = require('../../rules');

module.exports = {
  name: 'airbnb:compat',
  plugins: {
    get ['@stylistic']() {
      return require('@stylistic/eslint-plugin');
    },
  },
  rules,
};
