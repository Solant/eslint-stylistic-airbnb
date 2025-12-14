import type { Linter } from 'eslint';

declare const airbnb: {
  configs: {
    'flat/compat': Linter.Config;
    'flat/recommended': Linter.Config;
    'flat/strict': Linter.Config;
  };
};

export = airbnb;
