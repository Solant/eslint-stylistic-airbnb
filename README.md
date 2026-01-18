# eslint-stylistic-airbnb

![NPM Downloads](https://img.shields.io/npm/dm/eslint-stylistic-airbnb)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A modern Airbnb ESLint config with the original formatting rules using [ESLint Stylistic](https://eslint.style/).

## Features

✨ **Modern & Maintained** - Updated for ESLint 9+ with no deprecated rules or plugins

🎨 **Formatting Included** - Uses [ESLint Stylistic](https://eslint.style/) instead of Prettier

📦 **Multiple Formats** - Supports both flat config and legacy `.eslintrc`

🔷 **TypeScript Ready** - Built-in TypeScript support

⚛️ **Framework Support** - Dedicated configs for JSX-based frameworks, React and Vue.js

🎯 **Flexible** - Choose from recommended, strict, or compatibility modes

🔧 **Customizable** - Easy to override rules while maintaining the base style

## Why

The original `eslint-config-airbnb` is not updated for a long time now, has compatibility issues and uses deprecated rules and plugins. This config addresses all of them:

- All deprecated rules are replaced with an updated alternatives
- All deprecated plugins removed or replaced with modern alternatives
- Any ESLint >= 8.57 is supported (including ESLint 9 of course)
- Both flat and legacy formats are supported
- TypeScript support
- Additional airbnb-inspired configs for other frameworks (JSX-based and Vue)

Big part of Airbnb codestyle are the formatting rules, so in order to follow airbnb codestyle as close as possible this config uses [ESLint Stylistic](https://eslint.style/) instead of `prettier`. Here is also a good article on this topic: [why not prettier](https://antfu.me/posts/why-not-prettier).

## Prerequisites

- Node.js >= 16.x
- ESLint >= 8.57.0

## Installation

Install the core packages:

```bash
# npm
npm install -D eslint @stylistic/eslint-plugin eslint-stylistic-airbnb globals

# pnpm
pnpm add -D eslint @stylistic/eslint-plugin eslint-stylistic-airbnb globals

# yarn
yarn add -D eslint @stylistic/eslint-plugin eslint-stylistic-airbnb globals
```
## Usage

Just grab any of the ready to go presets:

<details>
<summary>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height="14px" width="14px" />
    JavaScript
</summary>

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import globals from 'globals';

export default [
  airbnb.configs['flat/recommended'],
  
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
```
</details>

<details>
<summary>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="14px" width="14px" />
    TypeScript
</summary>

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  ...tseslint.configs.recommended,

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-typescript'],

  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
```
</details>

<details>
<summary>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height="14px" width="14px" />
    JavaScript +
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height="14px" width="14px" />
    React
</summary>

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  react.configs.flat.recommended,
  reactHooks.configs.recommended,

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-jsx'],
  airbnb.configs['flat/addon-react'],

  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
```
</details>

<details>
<summary>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="14px" width="14px" />
    TypeScript +
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height="14px" width="14px" />
    React
</summary>

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.recommended,

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-typescript'],
  airbnb.configs['flat/addon-jsx'],
  airbnb.configs['flat/addon-react'],
  
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
```
</details>

<details>
<summary>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height="14px" width="14px" />
    JavaScript +
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" height="14px" width="14px" />
    Vue
</summary>

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  ...pluginVue.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-vue'],

  {
    languageOptions: {
      globals: globals.browser,
    },
  }
];
```
</details>

<details>
<summary>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="14px" width="14px" />
    TypeScript +
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" height="14px" width="14px" />
    Vue
</summary>

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-vue'],
  airbnb.configs['flat/addon-typescript'],

  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
```
</details>


### Customization

Your config should include at least one **base** config:

- `flat/recommended`
- `flat/strict`
- `flat/compat`

```javascript
// eslint.config.mjs
import airbnb from 'eslint-stylistic-airbnb';
import globals from 'globals';

export default [
  airbnb.configs['flat/recommended'],
  
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
```

And **any** number of additional configs, based on the framework, language and plugins that you use, for example:

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.recommended,

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-typescript'],
  airbnb.configs['flat/addon-jsx'],
  airbnb.configs['flat/addon-react'],
  
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
```
> [!WARNING]
> When building your own config file, always make sure to:
> - Insert all airbnb configs after all other configs, but before any overrides
> - Always use the at least the `recommended` preset for all plugins that you use

You can edit any rules just like in any other ESLint config:

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb.configs['flat/recommended'],
  {
    rules: {
      // Use 4 spaces instead of 2
      '@stylistic/indent': ['error', 4],
    },
  },
];
```

### TypeScript

All base styling rules are compatible with TypeScript out of the box, but you still need to configure the parser, the preferred way is to use `typescript-eslint` config.

**Flat Config:**
```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-typescript'],
];
```

Make sure to include `addon-typescript` to prevent incorrect errors for [extension rules](https://typescript-eslint.io/rules#extension-rules) in TypeScript files.

### Legacy Config (.eslintrc)

The approach is the same, but the path to the config files is different:

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'node_modules/eslint-stylistic-airbnb/configs/recommended',
    'node_modules/eslint-stylistic-airbnb/configs/addon-jsx',
  ],
};
```

## Configuration Reference

### Base configs

#### `flat/recommended`

Base Airbnb styles. All deprecated rules have been removed or replaced with modern alternatives. Some of the rules that was not enabled by default in the original Airbnb config due to semver versioning have been enabled.

<details>
<summary>Usage:</summary>

```javascript
import airbnb from 'eslint-stylistic-airbnb';

module.exports = {
  airbnb.configs['flat/recommended'],
};
```
</details>

#### `flat/strict`

Same as `flat/recommended` but with stricter rules that were not enabled in the original Airbnb config, but mentioned in the [Airbnb Style Guide](https://github.com/airbnb/javascript).

<details>
<summary>Usage:</summary>

```javascript
import airbnb from 'eslint-stylistic-airbnb';

module.exports = {
  airbnb.configs['flat/strict'],
};
```
</details>

#### `flat/compat`

The original Airbnb config but without deprecated rules, for gradual migration purposes.

<details>
<summary>Usage:</summary>

```javascript
import airbnb from 'eslint-stylistic-airbnb';

module.exports = {
  airbnb.configs['flat/compat'],
};
```
</details>

### Addon configs

#### `flat/addon-import`

Import-related Airbnb rules. Requires `eslint-plugin-import-x`.

<details>
<summary>Usage:</summary>

Install additional dependencies:
```bash
# npm
npm install -D eslint-plugin-import-x

#pnpm
pnpm install -D eslint-plugin-import-x

#yarn
yarn add -D eslint-plugin-import-x
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import importX from 'eslint-plugin-import-x';

module.exports = {
  importX.configs['flat/recommended'],
  
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-import'],
};
```
</details>

#### `flat/addon-import-esm`

Addition to the `flat/addon-import`, makes all imports ESM-style (with extension).

<details>
<summary>Usage:</summary>

Install additional dependencies:
```bash
# npm
npm install -D eslint-plugin-import-x

#pnpm
pnpm install -D eslint-plugin-import-x

#yarn
yarn add -D eslint-plugin-import-x
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import importX from 'eslint-plugin-import-x';

module.exports = {
  importX.configs['flat/recommended'],
  
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-import'],
  airbnb.configs['flat/addon-import-esm'],
};
```
</details>

#### `flat/addon-typescript`

Contains only Airbnb-specific replacements for `typescript-eslint` extension rules, all the base TypeScript styling is handled by the base config using ESlint Stylistic. Requires `typescript-eslint` to be installed. Should be always enabled if using TypeScript to prevent incorrect errors.


<details>
<summary>Usage:</summary>

Install additional dependencies:
```bash
# npm
npm install -D typescript-eslint

#pnpm
pnpm install -D typescript-eslint

#yarn
yarn add -D typescript-eslint
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import tseslint from 'typescript-eslint';

module.exports = {
  ...tseslint.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-typescript'],
};
```
</details>

#### `flat/addon-iterators`

Allows `for...of` loops. Still disallows `for...in`, `with` statements, and labeled statements.

<details>
<summary>Usage:</summary>

```javascript
import airbnb from 'eslint-stylistic-airbnb';

module.exports = {
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-iterators'],
};
```
</details>

#### `flat/addon-jsx`

Stylistic rules for `jsx` and `tsx` files.

<details>
<summary>Usage:</summary>

```javascript
import airbnb from 'eslint-stylistic-airbnb';

module.exports = {
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-jsx'],
};
```
</details>

#### `flat/addon-react`

React-specific rules. Use it together with `flat/addon-jsx`. Requires `eslint-plugin-react` (hard requirement) and `eslint-plugin-react-hooks` (is not required, but you definetely need it).

<details>
<summary>Usage:</summary>

Install additional dependencies:
```bash
# npm
npm install -D eslint-plugin-react eslint-plugin-react-hooks

#pnpm
pnpm install -D eslint-plugin-react eslint-plugin-react-hooks

#yarn
yarn add -D eslint-plugin-react eslint-plugin-react-hooks
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import react from 'eslint-config-react';
import reactHooks from 'eslint-config-react-hooks';

module.exports = {
  react.configs.flat.recommended,
  reactHooks.configs.recommended,
  
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-jsx'],
  airbnb.configs['flat/addon-react'],
};
```
</details>

#### `flat/addon-vue`

Stylistic rules for `.vue` files. Requires `eslint-plugin-vue`. Those rules are not part of Airbnb style guide, instead they are based on base and react-specific styleguide.

<details>
<summary>Usage:</summary>

Install additional dependencies:
```bash
# npm
npm install -D eslint-plugin-vue

#pnpm
pnpm install -D eslint-plugin-vue

#yarn
yarn add -D eslint-plugin-vue
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import pluginVue from 'eslint-plugin-vue';

module.exports = [
  ...pluginVue.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-vue'],
];
```
</details>

#### `flat/addon-vue-ts`

TypeScript-specific rules for `.vue` files. Use it together with `flat/addon-vue` and `flat/addon-typescript`. Requires `typescript-eslint` and `eslint-plugin-vue`.

<details>
<summary>Usage:</summary>

Install additional dependencies:
```bash
# npm
npm install -D typescript-eslint eslint-plugin-vue

#pnpm
pnpm install -D typescript-eslint eslint-plugin-vue

#yarn
yarn add -D typescript-eslint eslint-plugin-vue
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

module.exports = [
  ...tseslint.configs['flat/recommended'],
  ...pluginVue.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-typescript'],
  airbnb.configs['flat/addon-vue'],
  airbnb.configs['flat/addon-vue-ts'],
];
```
</details>

## Troubleshooting

### Conflicts with Prettier

This config is designed to **replace** Prettier. If you have Prettier installed:

1. Remove Prettier and related ESLint plugins
2. Remove `.prettierrc` and `prettier.config.js`
3. Update your IDE to use ESLint for formatting instead of Prettier

### Incorrect errors in TypeScript

Make sure to add `addon-typescript`.

### `no-undef` errors

Make sure to specify globals via the `languageOptions.globals` property in your flat config. For example, to enable browser globals:

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import globals from 'globals';

export default [
  airbnb.configs['flat/recommended'],
  
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
```

You can also combine multiple environments: `{ ...globals.browser, ...globals.node }`. See the [globals package](https://www.npmjs.com/package/globals) for available options.

## FAQ

### Do I need to use a `recommended` config from `@eslint/js`?

No, all recommended rules are already included in the base airbnb config. You don't need to add `@eslint/js` recommended preset separately.

## Migration Guide

### From `eslint-config-airbnb`

1. **Uninstall the old package:**
   ```bash
   npm uninstall eslint-config-airbnb eslint-config-airbnb-base
   ```

2. **Install this package** (see [Installation](#installation))

3. **Update your config:**
   - Flat config: Replace `airbnb` with `airbnb.configs['flat/recommended']`
   - Legacy: Replace `'airbnb'` with `'eslint-stylistic-airbnb/recommended'`

4. **Remove Prettier** (if using):
   ```bash
   npm uninstall prettier eslint-config-prettier eslint-plugin-prettier
   ```

5. **Test and adjust** rules as needed

### From v2.x of this package

Use the `flat/compat` or `compat` config to maintain v2.x behavior:

```javascript
// eslint.config.js (flat config)
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb.configs['flat/compat'],
];
```

```javascript
// .eslintrc.js (legacy config)
module.exports = {
  extends: ['node_modules/eslint-stylistic-airbnb/configs/compat'],
};
```

## Contributing

Contributions are welcome! Please open an issue first to discuss what you would like to change.

## License

[MIT](https://opensource.org/licenses/MIT)

## Credits

- Based on the original [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Uses [@stylistic/eslint-plugin](https://eslint.style/) for formatting rules
