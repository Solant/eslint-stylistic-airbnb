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
<summary>TypeScript</summary>

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
<summary>JavaScript + React</summary>

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
<summary>TypeScript + React</summary>

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
<summary>JavaScript + Vue</summary>

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
<summary>TypeScript + Vue</summary>

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

### Legacy Config (.eslintrc)

The approach is the same, but the path to the config files is different:

```javascript
// .eslintrc.js
module.exports = {
  extends: ['node_modules/eslint-stylistic-airbnb/configs/recommended'],
};
```

## Configuration Reference

### Base configs

|Config|Config ID (Legacy)|Best For|Description|
|-|-|-|-|
|`flat/recommended`|`recommended`| New projects or gradual migration | All core Airbnb style rules: 2-space indentation, semicolons, trailing commas, single quotes, const/let over var, prefer-destructuring. Includes modern rules (`prefer-object-has-own`, `no-constant-binary-expression`) and TypeScript member delimiters. |
|`flat/strict`|`strict` | Maximum consistency enforcement | Everything in `recommended` **plus** stricter rules: disallows single-line ternaries, enforces function expressions over declarations, requires comments above code (not inline). ⚠️ May require refactoring. |
|`flat/compat`|`compat` | Upgrading from v1.x | Backward-compatible with previous package versions. Use when migrating to preserve existing behavior before adopting new rules. |

### Addon configs

Add **any combination** of these to extend base configs:

|Config|Dependencies|Description|
|-|-|-|
|`flat/addon-typescript` | `typescript-eslint` | TypeScript-specific rule replacements: replaces base ESLint rules with TypeScript-aware versions for `no-shadow`, `no-unused-vars`, `no-use-before-define`, `no-useless-constructor`, and `no-unused-expressions` to prevent incorrect errors. |
|`flat/addon-jsx`| None | JSX/TSX formatting for React/Preact/Solid: PascalCase components, double quotes, 2-space indentation, self-closing tags, multiline wrapped in parens, one prop per line (multiline). |
|`flat/addoniterators`| None | Relaxes iterator restrictions: allows `for...of` loops. Still disallows `for...in`, `with` statements, and labeled statements. |
|`flat/addon-react` | `eslint-plugin-react` | React component rules: prop types validation, no deprecated APIs, component method ordering, lifecycle conventions, no array index keys, destructured props, function component style. |
|`flat/addon-vue` | `eslint-plugin-vue` | Vue 3 SFC conventions: block order (script/template/style), PascalCase naming, no useless mustaches/v-bind, boolean prop shorthand, separate static classes. |
|`flat/addon-vue-ts` | `eslint-plugin-vue`<br/>`typescript-eslint` | TypeScript in Vue: enforces `<script lang="ts">` and type-based prop definitions. Sets up TS parser for Vue files. |
| `flat/addon-import` | `eslint-plugin-import-x` | 🛠️ WIP 🛠️ Adds import-related rules |
| `flat/addon-import-esm` | `eslint-plugin-import-x` | 🛠️ WIP 🛠️ ESM-style import modules |

## Customizing Rules

You can override any rule to fit your project's needs:

**Flat Config:**
```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb.configs['flat/recommended'],
  {
    rules: {
      // Relax specific rules
      '@stylistic/indent': ['error', 4], // Use 4 spaces instead of 2
      'no-console': 'warn', // Warn instead of error
      'max-len': ['error', { code: 120 }], // Increase line length
    },
  },
];
```

**Legacy Config:**
```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint-stylistic-airbnb/recommended'],
  rules: {
    '@stylistic/indent': ['error', 4],
    'no-console': 'warn',
    'max-len': ['error', { code: 120 }],
  },
};
```

## TypeScript Support

This config works with TypeScript out of the box. For TypeScript projects, you'll need to configure the parser, the preferred way is to use `typescript-eslint` config:

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

Make sure to include `addon-typescript` to prevent incorrect errors in TypeScript files.

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
  extends: ['eslint-stylistic-airbnb/compat'],
};
```

## Troubleshooting

### Conflicts with Prettier

This config is designed to **replace** Prettier. If you have Prettier installed:

1. Remove Prettier and related ESLint plugins
2. Remove `.prettierrc` and `prettier.config.js`
3. Update your IDE to use ESLint for formatting instead of Prettier

### Plugin Not Found Errors

Ensure you've installed the required peer dependencies for the configs you're using:

- `flat/react` requires: `eslint-plugin-react`
- `flat/vue` requires: `eslint-plugin-vue`
- `flat/vue-ts` requires: `eslint-plugin-vue` and `typescript-eslint`

### TypeScript Parsing Errors

Make sure that you use any of `typescript-eslint` configs:

```javascript
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
];
```

## FAQ

### Should I use this instead of Prettier?

Yes! This config provides formatting through ESLint rules using [ESLint Stylistic](https://eslint.style/), which more closely matches the original styleguide and provides better integration with your linting workflow. See [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier) for more context.

### Can I use this with TypeScript?

Absolutely! This config works with TypeScript out of the box. See the [TypeScript Support](#typescript-support) section for setup instructions.

### Which base config should I choose?

- **`flat/recommended`** - Best for most projects. Includes all essential Airbnb rules with modern additions.
- **`flat/strict`** - If you want to follow styleguide more closely and if you are willing to refactor code to meet stricter formatting rules.
- **`flat/compat`** - Only if migrating from v2.x of this package.

### Do I need to install React/Vue plugins?

Only if you're using the React or Vue addons. The base config works standalone for JavaScript/TypeScript projects.

### Why do I get "plugin not found" errors?

Make sure you've installed the peer dependencies for any addon configs you're using. See [Configuration Reference](#configuration-reference) for the complete list of optional dependencies.

### Can I override specific rules?

Yes! See the [Customizing Rules](#customizing-rules) section for examples.

### Is this compatible with ESLint 9?

Yes, ESLint 9 is fully supported using the flat config format.

### Do I need to use a `recommended` config from `@eslint/js`?

No, all recommended rules are already included in the base airbnb config. You don't need to add `@eslint/js` recommended preset separately.

### Why do I have `no-undef` errors?

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

### How do I migrate from `eslint-config-airbnb`?

See the [Migration Guide](#migration-guide) for step-by-step instructions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://opensource.org/licenses/MIT)

## Credits

- Based on the original [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Uses [@stylistic/eslint-plugin](https://eslint.style/) for formatting rules
- Inspired by the philosophy of [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier) by Anthony Fu

## Related Links

- [ESLint Documentation](https://eslint.org/)
- [ESLint Stylistic](https://eslint.style/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Original eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
