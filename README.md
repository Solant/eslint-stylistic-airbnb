# eslint-stylistic-airbnb

Airbnb config for ESLint with style rules via @stylistic plugin

# Installation

Install all required dependencies

```shell
npm install -D eslint @stylistic/eslint-plugin eslint-stylistic-airbnb
```

Add following to your eslint config:

```javascript
// Flat config
// eslint.config.mjs
import stylistic from '@stylistic/eslint-plugin';
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      '@stylistic': stylistic,
    },
  },
];
```

```javascript
// Legacy config
// .eslintrc.js
module.exports = {
  plugins: ['@stylistic'],
  rules: {
    ...require('eslint-stylistic-airbnb').rules,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
```

# TypeScript

If you use typescript, install additional dependency:

```shell
npm install -D typescript-eslint
```

And add following to your eslint config:

```javascript
// Flat config
// eslint.config.mjs
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      '@stylistic': stylistic,
    },
  },
];
```

```javascript
// Legacy config
// .eslintrc.js
module.exports = {
  plugins: [
    '@typescript-eslint',
    '@stylistic',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    ...require('eslint-stylistic-airbnb').rules, 
  },
};
```

# Notes

This config is created from the base airbnb config as is, with no changes to original rules

- rules that required newer eslint version are enabled
- node related rules are not implemented
- import rules are not implemented
- react rules are not implemented (except of some jsx style options)
- `func-style` rule is turned off, just like in original config (airbnb config contradicts with airbnb styleguide, this
  option set to be "backward-compatible")
