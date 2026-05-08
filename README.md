# eslint-stylistic-airbnb

![NPM Downloads](https://img.shields.io/npm/dm/eslint-stylistic-airbnb)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Airbnb-style ESLint config, updated for modern use with ESLint Stylistic formatting.

## Why

The original `eslint-config-airbnb` is outdated. This config fixes that by:

- Replacing deprecated rules and plugins with modern alternatives.
- Supporting ESLint >=8.57 (including v9).
- Offering both flat and legacy config formats.
- Adding TypeScript support.
- Adding support for other file types like CSS, SASS, SCSS and so on.
- Including Airbnb-inspired addons for JSX, React, and Vue.

It uses [ESLint Stylistic](https://eslint.style/) instead of Prettier for formatting to match Airbnb's style closely.

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

Just grab any of the ready-to-go presets:

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
  // global ignores
  { ignores: ['dist'] },

  airbnb.configs['flat/recommended'],
  
  {
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
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
  // global ignores
  { ignores: ['dist'] },

  ...tseslint.configs.recommended,

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-typescript'],

  {
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
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
  // global ignores
  { ignores: ['dist'] },

  react.configs.flat.recommended,
  reactHooks.configs.recommended,

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-jsx'],
  airbnb.configs['flat/addon-react'],

  {
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
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
  // global ignores
  { ignores: ['dist'] },

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
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
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
  // global ignores
  { ignores: ['dist'] },

  ...pluginVue.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-vue'],

  {
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
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
  // global ignores
  { ignores: ['dist'] },

  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-vue'],
  airbnb.configs['flat/addon-typescript'],
  airbnb.configs['flat/addon-vue-ts'],

  {
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
];
```
</details>


### Customization

Your config should include at least **one** base config:

- `flat/recommended`
- `flat/strict`
- `flat/compat`

```javascript
// eslint.config.mjs
import airbnb from 'eslint-stylistic-airbnb';
import globals from 'globals';

export default [
  // global ignores
  { ignores: ['dist'] },

  airbnb.configs['flat/recommended'],
  
  {
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
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
  // global ignores
  { ignores: ['dist'] },

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
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
];
```
> [!WARNING]
> When building your own config file, always make sure to:
> - Insert all Airbnb configs after all other configs, but before any overrides
> - Always use at least the `recommended` preset for all plugins that you use

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

All base styling rules are compatible with TypeScript out of the box, but you still need to configure the parser. The preferred way is to use the `typescript-eslint` config.

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

For older setups:

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    './node_modules/eslint-stylistic-airbnb/configs/recommended',
    './node_modules/eslint-stylistic-airbnb/configs/addon-jsx',
  ],
};
```

Note: Prefer flat config for new projects—it's the future-proof choice.

## Configuration Reference

### Base configs

#### `flat/recommended`

Base Airbnb styles. All deprecated rules have been removed or replaced with modern alternatives. Some of the rules that were not enabled by default in the original Airbnb config due to semver versioning have been enabled.

<details>
<summary>Usage:</summary>

```javascript
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb.configs['flat/recommended'],
];
```
</details>

#### `flat/strict`

Same as `flat/recommended` but with stricter rules that were not enabled in the original Airbnb config, though mentioned in the [Airbnb Style Guide](https://github.com/airbnb/javascript).

<details>
<summary>Usage:</summary>

```javascript
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb.configs['flat/strict'],
];
```
</details>

#### `flat/compat`

The original Airbnb config but without deprecated rules, for gradual migration purposes.

<details>
<summary>Usage:</summary>

```javascript
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb.configs['flat/compat'],
];
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

# pnpm
pnpm add -D eslint-plugin-import-x

# yarn
yarn add -D eslint-plugin-import-x
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import importX from 'eslint-plugin-import-x';

export default [
  importX.configs['flat/recommended'],
  
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-import'],
];
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

# pnpm
pnpm add -D eslint-plugin-import-x

# yarn
yarn add -D eslint-plugin-import-x
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import importX from 'eslint-plugin-import-x';

export default [
  importX.configs['flat/recommended'],
  
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-import'],
  airbnb.configs['flat/addon-import-esm'],
];
```
</details>

#### `flat/addon-typescript`

Contains only Airbnb-specific replacements for `typescript-eslint` extension rules. All the base TypeScript styling is handled by the base config using ESLint Stylistic. Requires `typescript-eslint` to be installed. Should always be enabled if using TypeScript to prevent parser errors.


<details>
<summary>Usage:</summary>

Install additional dependencies:
```bash
# npm
npm install -D typescript-eslint

# pnpm
pnpm add -D typescript-eslint

# yarn
yarn add -D typescript-eslint
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-typescript'],
];
```
</details>

#### `flat/addon-iterators`

Allows `for...of` loops. Still disallows `for...in`, `with` statements, and labeled statements.

<details>
<summary>Usage:</summary>

```javascript
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-iterators'],
];
```
</details>

#### `flat/addon-jsx`

Stylistic rules for `jsx` and `tsx` files.

<details>
<summary>Usage:</summary>

```javascript
import airbnb from 'eslint-stylistic-airbnb';

export default [
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-jsx'],
];
```
</details>

#### `flat/addon-react`

React-specific rules. Pair with `flat/addon-jsx`. Requires `eslint-plugin-react` (must-have) and `eslint-plugin-react-hooks` (highly recommended).

<details>
<summary>Usage:</summary>

Install additional dependencies:
```bash
# npm
npm install -D eslint-plugin-react eslint-plugin-react-hooks

# pnpm
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks

# yarn
yarn add -D eslint-plugin-react eslint-plugin-react-hooks
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  react.configs.flat.recommended,
  reactHooks.configs.recommended,
  
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-jsx'],
  airbnb.configs['flat/addon-react'],
];
```
</details>

#### `flat/addon-vue`

Stylistic rules for `.vue` files. Requires `eslint-plugin-vue`. These rules are not part of the Airbnb style guide; instead, they are based on the base and React-specific style guides.

<details>
<summary>Usage:</summary>

Install additional dependencies:
```bash
# npm
npm install -D eslint-plugin-vue

# pnpm
pnpm add -D eslint-plugin-vue

# yarn
yarn add -D eslint-plugin-vue
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import pluginVue from 'eslint-plugin-vue';

export default [
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

# pnpm
pnpm add -D typescript-eslint eslint-plugin-vue

# yarn
yarn add -D typescript-eslint eslint-plugin-vue
```

Update eslint config:
```javascript
import airbnb from 'eslint-stylistic-airbnb';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
  ...tseslint.configs['flat/recommended'],
  ...pluginVue.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-typescript'],
  airbnb.configs['flat/addon-vue'],
  airbnb.configs['flat/addon-vue-ts'],
];
```
</details>

## IDE Configuration

> IDE configurations below are based on [**@antfu/eslint-config**](https://github.com/antfu/eslint-config), adapted for this project.

<details>
<summary>VS Code</summary>

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in your IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "@stylistic/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "json",
    "jsonc"
  ]
}
```

</details>

<details>
<summary>Zed</summary>

Add the following settings to your `.zed/settings.json`:

```jsonc
{
  // Use ESLint's --fix:
  "code_actions_on_format": {
    "source.fixAll.eslint": true
  },
  "formatter": [],
  // Enable eslint for all supported languages
  "languages": {
    "HTML": {
      "language_servers": ["...", "eslint"]
    },
    "JSON": {
      "language_servers": ["...", "eslint"]
    },
    "JSONC": {
      "language_servers": ["...", "eslint"]
    }
    // Add other languages as needed
  },
  "lsp": {
    "eslint": {
      "settings": {
        "workingDirectories": ["./"],

        // Silent the stylistic rules in your IDE, but still auto fix them
        "rulesCustomizations": [
          { "rule": "@stylistic/*", "severity": "off", "fixable": true },
          { "rule": "*-indent", "severity": "off", "fixable": true },
          { "rule": "*-spacing", "severity": "off", "fixable": true },
          { "rule": "*-spaces", "severity": "off", "fixable": true },
          { "rule": "*-order", "severity": "off", "fixable": true },
          { "rule": "*-dangle", "severity": "off", "fixable": true },
          { "rule": "*-newline", "severity": "off", "fixable": true },
          { "rule": "*quotes", "severity": "off", "fixable": true },
          { "rule": "*semi", "severity": "off", "fixable": true }
        ]
      }
    }
  }
}
```

</details>

<details>
<summary>Neovim</summary>

Update your configuration to use the following:

```lua
local customizations = {
  { rule = '@stylistic/*', severity = 'off', fixable = true },
  { rule = '*-indent', severity = 'off', fixable = true },
  { rule = '*-spacing', severity = 'off', fixable = true },
  { rule = '*-spaces', severity = 'off', fixable = true },
  { rule = '*-order', severity = 'off', fixable = true },
  { rule = '*-dangle', severity = 'off', fixable = true },
  { rule = '*-newline', severity = 'off', fixable = true },
  { rule = '*quotes', severity = 'off', fixable = true },
  { rule = '*semi', severity = 'off', fixable = true },
}

local lspconfig = require('lspconfig')
-- Enable eslint for all supported languages
lspconfig.eslint.setup(
  {
    filetypes = {
      "javascript",
      "javascriptreact",
      "javascript.jsx",
      "typescript",
      "typescriptreact",
      "typescript.tsx",
      "vue",
      "html",
      "json",
      "jsonc",
    },
    settings = {
      -- Silent the stylistic rules in your IDE, but still auto fix them
      rulesCustomizations = customizations,
    },
  }
)
```

### Neovim format on save

There's few ways you can achieve format on save in neovim:

- `nvim-lspconfig` has a `EslintFixAll` command predefined, you can create a autocmd to call this command after saving file.

```lua
lspconfig.eslint.setup({
  --- ...
  on_attach = function(client, bufnr)
    vim.api.nvim_create_autocmd("BufWritePre", {
      buffer = bufnr,
      command = "EslintFixAll",
    })
  end,
})
```

- Use [conform.nvim](https://github.com/stevearc/conform.nvim).
- Use [none-ls](https://github.com/nvimtools/none-ls.nvim)
- Use [nvim-lint](https://github.com/mfussenegger/nvim-lint)

</details>

## Formatting other file types (css, scss, html, and others)

This config supports formatting of CSS and other non-JS file types using [eslint-plugin-format](https://github.com/antfu/eslint-plugin-format), which wraps external formatters like [oxfmt](https://github.com/oxc-project/oxc).

<details>
<summary>Usage:</summary>

Install additional dependencies (this example uses `oxfmt`, but you can choose any formatter supported by `eslint-plugin-format`):

```bash
# npm
npm install -D eslint-plugin-format oxfmt

# pnpm
pnpm add -D eslint-plugin-format oxfmt

# yarn
yarn add -D eslint-plugin-format oxfmt
```

Update eslint config:

```javascript
// eslint.config.js
import format from 'eslint-plugin-format';

export default [
  { ignores: ['dist'] },

  airbnb.configs['flat/recommended'],

  // Format standalone styling files
  {
    files: ['**/*.{css,scss}'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: { format },
    rules: {
      // format using oxfmt
      'format/oxfmt': ['error'],
      // format using dprint
      // 'format/dprint': ['error'],
      // format using prettier
      // 'format/prettier': ['error'],
    },
  },

  {
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
];
```

</details>

<details>
<summary>Usage with Vue SFC blocks:</summary>

Vue SFC blocks require additional processing to extract blocks for formatting. Install additional dependencies:

```bash
pnpm add -D eslint-plugin-format oxfmt eslint-merge-processors eslint-processor-vue-blocks
```

Update eslint config:
```javascript
// eslint.config.js
import format from 'eslint-plugin-format';
import { mergeProcessors } from 'eslint-merge-processors';
import processorVueBlocks from 'eslint-processor-vue-blocks';

export default [
  { ignores: ['dist'] },

  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-vue'],
  airbnb.configs['flat/addon-typescript'],
  airbnb.configs['flat/addon-vue-ts'],

  // Extract <style> blocks from .vue files for formatting
  {
    files: ['**/*.vue'],
    processor: mergeProcessors([
      pluginVue.processors['.vue'],
      processorVueBlocks({ blocks: { styles: true } }),
    ]),
  },

  // Format standalone styling files
  {
    files: ['**/*.{css,scss}'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: { format },
    rules: {
      'format/oxfmt': ['error'],
    },
  },

  {
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
];
```

Update eslint config:
```javascript
// eslint.config.js
import airbnb from 'eslint-stylistic-airbnb';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import format from 'eslint-plugin-format';
import { mergeProcessors } from 'eslint-merge-processors';
import processorVueBlocks from 'eslint-processor-vue-blocks';

export default [
  { ignores: ['dist'] },

  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-vue'],
  airbnb.configs['flat/addon-typescript'],
  airbnb.configs['flat/addon-vue-ts'],

  // Extract <style> blocks from .vue files for formatting
  {
    files: ['**/*.vue'],
    processor: mergeProcessors([
      pluginVue.processors['.vue'],
      processorVueBlocks({ blocks: { styles: true } }),
    ]),
  },

  // Format standalone CSS files
  {
    files: ['**/*.css'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: { format },
    rules: {
      'format/oxfmt': ['error'],
    },
  },

  {
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
];
```
</details>

## Troubleshooting

### Conflicts with Prettier

This config replaces Prettier. If conflicts arise:

- Remove Prettier, `eslint-config-prettier`, and `eslint-plugin-prettier`.
- Delete `.prettierrc` or `prettier.config.js`.
- Configure your editor to format with ESLint instead.

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

1. Uninstall old packages:
   ```bash
   npm uninstall eslint-config-airbnb eslint-config-airbnb-base eslint-config-airbnb-typescript
   ```

2. Install this package (see [Installation](#installation)).

3. Update your config:
   - Replace `'airbnb'` in the extends array with `'./node_modules/eslint-stylistic-airbnb/configs/recommended'` (or `compat`, if you want to minimize the number of changes)
   - Replace `'airbnb-typescript'` in the extends array with `'./node_modules/eslint-stylistic-airbnb/configs/addon-typescript'`
   - Replace `'airbnb/hooks'` with `'plugin:react-hooks/recommended'`

4. Remove Prettier if using:
   ```bash
   npm uninstall prettier eslint-config-prettier eslint-plugin-prettier
   ```

5. Depending on the version of `eslint-config-airbnb`, you might get a different number of changes. Tweak rules as needed.

> [!WARNING]
> If you encounter an error like `TypeError: Cannot read properties of undefined (reading 'length')` in rule like `@stylistic/....` try downgrading the `@stylistic/eslint-plugin` package to version `2.1.0`.

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
  extends: ['./node_modules/eslint-stylistic-airbnb/configs/compat'],
};
```

## Contributing

Contributions welcome! Open an issue to discuss ideas first.

## License

[MIT](https://opensource.org/licenses/MIT)

## Credits

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [ESLint Stylistic](https://eslint.style/)
- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
