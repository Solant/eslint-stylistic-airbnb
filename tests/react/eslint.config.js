import airbnb from 'eslint-stylistic-airbnb';
import react from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,jsx}'] },
  react.configs.flat.recommended,
  airbnb.configs['flat/recommended'],
  airbnb.configs['flat/addon-jsx'],
  airbnb.configs['flat/addon-react'],
  {
    settings: {
      react: {
        version: '18.0',
      },
    },
  },
];
