import type { Linter } from 'eslint';

declare const airbnb: {
  configs: {
    compat: Linter.LegacyConfig,
    recommended: Linter.LegacyConfig,
    strict: Linter.LegacyConfig,
    'addon-iterators': Linter.LegacyConfig,
    'addon-jsx': Linter.LegacyConfig,
    'addon-react': Linter.LegacyConfig,
    'addon-vue': Linter.LegacyConfig,
    'addon-vue-ts': Linter.LegacyConfig,
    'addon-import': Linter.LegacyConfig,
    'addon-typescript': Linter.LegacyConfig,

    'flat/compat': Linter.Config;
    'flat/recommended': Linter.Config;
    'flat/strict': Linter.Config;
    'flat/addon-iterators': Linter.Config;
    'flat/addon-jsx': Linter.Config;
    'flat/addon-react': Linter.Config;
    'flat/addon-vue': Linter.Config;
    'flat/addon-vue-ts': Linter.Config;
    'flat/addon-import': Linter.Config;
    'flat/addon-typescript': Linter.Config;
  };
};

export = airbnb;
