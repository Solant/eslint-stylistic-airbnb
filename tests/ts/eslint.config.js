import airbnb from 'eslint-stylistic-airbnb';
import typescript from 'typescript-eslint';

export default [
  { files: ['**/*.{js,jsx,ts}'] },
  ...typescript.configs.recommended,
  airbnb.configs['flat/recommended'],
];
