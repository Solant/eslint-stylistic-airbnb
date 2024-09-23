const bestPractices = require('./rules/best-practices.js');
const errors = require('./rules/errors.js');
const es6 = require('./rules/es6.js');
const strict = require('./rules/strict.js');
const style = require('./rules/style.js');
const variables = require('./rules/variables.js');

module.exports = {
  rules: {
    ...bestPractices.rules,
    ...errors.rules,
    ...es6.rules,
    ...strict.rules,
    ...style.rules,
    ...variables.rules,
  },
};
