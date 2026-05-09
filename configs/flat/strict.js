'use strict';

const rules = require('../../rules');

module.exports = {
  name: 'airbnb:strict',
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

    // strict
    '@stylistic/multiline-ternary': ['error', 'never'],
    'func-style': ['error', 'expression'],
    '@stylistic/line-comment-position': ['error', {
      position: 'above',
      ignorePattern: '',
      applyDefaultIgnorePatterns: true,
    }],
  },
}
