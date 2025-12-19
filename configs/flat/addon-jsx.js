'use strict';

// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js

module.exports = {
  name: 'airbnb:addon-jsx',
  plugins: {
    get ['@stylistic']() {
      return require('@stylistic/eslint-plugin');
    },
  },
  rules: {
    '@stylistic/jsx-pascal-case': ['error', { allowAllCaps: true }],
    "@stylistic/jsx-closing-tag-location": "error",
    "@stylistic/jsx-closing-bracket-location": ["error", "line-aligned"],
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    '@stylistic/jsx-curly-spacing': ["error", { when: 'never', allowMultiline: true }],
    '@stylistic/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    '@stylistic/jsx-self-closing-comp': 'error',
    // deprecated, but still needed for a proper formatting
    '@stylistic/jsx-indent': ['error', 2],
    '@stylistic/jsx-indent-props': ['error', 2],
    '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    '@stylistic/jsx-equals-spacing': ['error', 'never'],
    '@stylistic/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    '@stylistic/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    '@stylistic/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent',
    }],
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
};
