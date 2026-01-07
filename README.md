# eslint-stylistic-airbnb

A modern Airbnb ESLint config with the original formatting rules using `eslint-stylistic-plugin`.

## Why

The original `eslint-config-airbnb` is not updated for a long time now, has compatibility issues and uses deprecated rules and plugins. This config addresses all of them:

- All deprecated rules are replaced with an updated alternatives
- All deprecated plugins removed or replaced with modern alternatives
- Any ESLint >= 8.57 is supported (including ESLint 9 of course)
- Both flat and legacy formats are supported
- TypeScript support
- Additional airbnb-inspired configs for other frameworks (JSX-based and Vue)

Big part of Airbnb codestyle are the formatting rules, so in order to follow airbnb codestyle as close as possible this config uses `eslint-stylistic-plugin` instead of `prettier`. Here is also a good article on this topic: [why not prettier](https://antfu.me/posts/why-not-prettier).

## Installation

Run the installation command for your package manager:

```bash
npm install -D eslint @stylistic/eslint-plugin eslint-stylistic-airbnb
```

## Usage

You can either use flat `eslint.config.js` (recommended) or legacy `.eslintrc` (in case you need it) configs.

> ⚠️ **Important Note on Plugins**: You must explicitly include the recommended presets for any plugins you use.
>
> The configs provided by this package (e.g., `flat/react`, `flat/vue`) only contain styling rules and Airbnb-specific overrides. They do not enable the core logic/linting rules of the underlying plugins.

You can copy any of our ready to go templates that suit your needs:

| Preset | | |
|--|--|--|
|JavaScript|Flat config|Legacy config|
|TypeScript|Flat config|Legacy config|
|React|Flat config|Legacy config|
|React TypeScript|Flat config|Legacy config|
|Vue|Flat config|Legacy config|
|Vue TypeScript|Flat config|Legacy config|

or create your own config by:

1. Selecting **one** of the base presets:

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb.configs['flat/recommended'],
];
```

2. Adding **any** number of additional presets, for example:

```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  // 1. The Core Config
  airbnb.configs['flat/recommended'],

  // 2. React recommended config
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  
  // 3. React airbnb style
  airbnb.configs['flat/jsx'],
  airbnb.configs['flat/react'],
];
```

## Configuration Reference

### Base configs

|Config ID|Description|
|-|-|
|`flat/recommended` | Baseline Airbnb rules |
| `flat/strict` | Closely matches the original rigid style guide. May require refactoring.|
|`flat/compat` | Backward-compatible config matching previous version of this package. |

### Addon configs

|Addon ID|Description|Dependencies|
|-|-|-|
|`flat/jsx`| Rules for JSX/TSX files | |
|`flat/iterators`|Re-enables iterators | |
|`flat/react` | React-specific style overrides | `eslint-plugin-react` |
|`flat/vue` | Vue.js style overrides | `eslint-plugin-vue` |
|`flat/vue-ts` | Vue.js + TypeScript style overrides. | `eslint-plugin-vue`, `typescript-eslint` |
