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

    // strict
    '@stylistic/multiline-ternary': ['error', 'never'],
    'func-style': ['error', 'expression'],
    '@stylistic/line-comment-position': ['error', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],
    // strict-test-me
    '@stylistic/padding-line-between-statements': ['error',
      // copy value
      { blankLine: 'always', prev: '*', next: 'directive' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      // strict
      { blankLine: 'always', prev: 'block', next: '*' },
    ],
  },
}
