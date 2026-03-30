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

    // override max-len
    '@stylistic/max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      // ignore long eslint-disable comments
      ignorePattern: '^\\s*(\\/\\/|\\/\\*)\ eslint(-disable)?',
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

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
