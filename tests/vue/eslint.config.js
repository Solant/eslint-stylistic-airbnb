import airbnb from 'eslint-stylistic-airbnb';
import vue from 'eslint-plugin-vue';

export default [
  { files: ['**/*.{js,jsx,vue}'] },
  ...vue.configs['flat/recommended'],
  airbnb.configs['flat/recommended'],
];
