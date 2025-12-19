'use strict';

module.exports = {
  name: 'airbnb:addon-vue',
  rules: {
    // blocks
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/padding-line-between-blocks': 'error',

    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/html-button-has-type': ['error', {
      button: true,
      submit: true,
      reset: true
    }],
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',

    'vue/no-static-inline-styles': 'error',

    // boolean props
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/no-boolean-default': 'error',
  },
}
