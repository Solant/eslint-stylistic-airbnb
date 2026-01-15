'use strict';

const rules = require('../../rules/import').rules;

module.exports = {
  rules: {
    ...rules,
    'import-x/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          [
            'parent',
            'sibling',
            'index',
          ],
        ],
        'newlines-between': 'always',
      },
    ],

    'import-x/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      vue: 'never',
      svelte: 'never',
    }],
  },
};
