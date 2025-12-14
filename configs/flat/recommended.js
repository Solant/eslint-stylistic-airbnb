'use strict';

const rules = require('../../rules');

module.exports = {
  name: 'airbnb:recommended',
  plugins: {
    get ['@stylistic']() {
      return require('@stylistic/eslint-plugin');
    },
  },
  rules: {
    // base
    ...rules,

    // recommended
    'prefer-object-has-own': 'error',
    'no-alert': 'error',
    'no-empty-static-block': 'error',
    'no-object-constructor': 'error',
    'no-constant-binary-expression': 'error',
    '@stylistic/member-delimiter-style': ['error', {
      multiline: {
        delimiter: "semi",
        requireLast: true,
      },
      singleline: {
        delimiter: "semi",
        requireLast: false,
      },
      multilineDetection: "brackets",
    }],
  },
};
