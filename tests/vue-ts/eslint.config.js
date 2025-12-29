import airbnb from 'eslint-stylistic-airbnb';
import vue from 'eslint-plugin-vue';
import typescript from 'typescript-eslint';

export default [
  { files: ['**/*.{js,jsx,vue}'] },
  ...typescript.configs.recommended,
  ...vue.configs['flat/recommended'],
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-vue'],
  airbnb.configs['flat/addon-vue-ts'],
];
