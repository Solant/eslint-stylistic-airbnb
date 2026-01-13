'use strict';

module.exports = {
  name: 'airbnb:addon-typescript',
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: true,
      enums: true,
      typedefs: true,
      ignoreTypeReferences: false,
    }],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],
  },
};
