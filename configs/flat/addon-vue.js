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
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'error',
    'vue/block-tag-newline': ['error', { singleline: 'always', multiline: 'always' }],
    'vue/define-macros-order': 'error',
    'vue/html-comment-content-newline': ['error', 'always'],
    'vue/prefer-separate-static-class': ['error'],
    'vue/no-template-target-blank': 'error',
    'vue/no-potential-component-option-typo': 'error',

    // boolean props
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/no-boolean-default': 'error',
  },
}
