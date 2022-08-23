module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-return-await': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/valid-v-bind': 'off',
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'array-callback-return': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
