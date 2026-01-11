'use strict';

module.exports = {
  name: 'airbnb:addon-vue-ts',
  rules: {
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/define-props-declaration': ['error', 'type-based'],
  },
  languageOptions: {
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
  },
};
