const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // https://eslint.org/docs/latest/rules/init-declarations
    'init-declarations': 'off',

    // https://eslint.org/docs/latest/rules/no-catch-shadow
    // replaced with no-shadow
    // 'no-catch-shadow': 'off',

    // https://eslint.org/docs/latest/rules/no-delete-var
    'no-delete-var': 'error',

    // https://eslint.org/docs/latest/rules/no-label-var
    'no-label-var': 'error',

    // https://eslint.org/docs/latest/rules/no-restricted-globals
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
    ].concat(confusingBrowserGlobals.map((g) => ({
      name: g,
      message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
    }))),

    // https://eslint.org/docs/latest/rules/no-shadow
    'no-shadow': 'error',

    // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // https://eslint.org/docs/latest/rules/no-undef
    'no-undef': 'error',

    // https://eslint.org/docs/latest/rules/no-undef-init
    'no-undef-init': 'error',

    // https://eslint.org/docs/latest/rules/no-undefined
    'no-undefined': 'off',

    // https://eslint.org/docs/latest/rules/no-unused-vars
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // https://eslint.org/docs/latest/rules/no-use-before-define
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  },
};
