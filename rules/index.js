'use strict';

const bestPractices = require('./best-practices');
const errors = require('./errors');
const es6 = require('./es6');
const strict = require('./strict');
const style = require('./style');
const variables = require('./variables');

module.exports = {
  ...bestPractices.rules,
  ...errors.rules,
  ...es6.rules,
  ...strict.rules,
  ...style.rules,
  ...variables.rules,
};
