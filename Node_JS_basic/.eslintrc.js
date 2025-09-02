module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'script',
  },
  rules: {
    'no-console': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'import/extensions': 'off',
    'comma-dangle': ['error', 'always-multiline'],
  },
};
