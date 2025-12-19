import airbnb from 'eslint-stylistic-airbnb';

export default [
  { files: ['**/*.{js,jsx}'] },
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-jsx'],
];
