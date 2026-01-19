'use strict';

const { rules, languageOptions } = require('./flat/addon-vue-ts');

module.exports = {
  rules,
  parser: languageOptions.parserOptions.parser,
};
