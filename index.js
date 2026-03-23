'use strict';

module.exports = {
  configs: {
    compat: require('./configs/compat'),
    recommended: require('./configs/recommended'),
    strict: require('./configs/strict'),
    'addon-iterators': require('./configs/addon-iterators'),
    'addon-jsx': require('./configs/addon-jsx'),
    'addon-react': require('./configs/addon-react'),
    'addon-vue': require('./configs/addon-vue'),
    'addon-vue-ts': require('./configs/addon-vue-ts'),
    'addon-import': require('./configs/addon-import'),
    'addon-typescript': require('./configs/addon-typescript'),

    'flat/compat': require('./configs/flat/compat'),
    'flat/recommended': require('./configs/flat/recommended'),
    'flat/strict': require('./configs/flat/strict'),
    'flat/addon-iterators': require('./configs/flat/addon-iterators'),
    'flat/addon-jsx': require('./configs/flat/addon-jsx'),
    'flat/addon-react': require('./configs/flat/addon-react'),
    'flat/addon-vue': require('./configs/flat/addon-vue'),
    'flat/addon-vue-ts': require('./configs/flat/addon-vue-ts'),
    'flat/addon-import': require('./configs/flat/addon-import'),
    'flat/addon-typescript': require('./configs/flat/addon-typescript'),
  },
};
