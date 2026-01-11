import airbnb from 'eslint-stylistic-airbnb';
import globals from 'globals';

export default [
  {
    files: ['**/*.spec.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  airbnb.configs['flat/recommended'],
];
