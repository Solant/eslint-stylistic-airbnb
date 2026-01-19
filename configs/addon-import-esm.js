'use strict';

const { rules } = require('./flat/addon-import-esm');

module.exports = {
  plugins: ['import-x'],
  rules,
};
