'use strict';

module.exports = {
  configs: {
    compat: require('./configs/compat'),
    recommended: require('./configs/recommended'),
    strict: require('./configs/strict'),
    'flat/compat': require('./configs/flat/compat'),
    'flat/recommended': require('./configs/flat/recommended'),
    'flat/strict': require('./configs/flat/strict'),
    'flat/addon-iterators': require('./configs/flat/addon-iterators'),
    'flat/addon-jsx': require('./configs/flat/addon-jsx'),
    'flat/addon-react': require('./configs/flat/addon-react'),
    'flat/addon-vue': require('./configs/flat/addon-vue'),
  },
};
