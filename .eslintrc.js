module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'react-hooks', '@typescript-eslint', 'simple-import-sort', 'sort-destructure-keys'],
  rules: {
    'max-len': ['error', { code: 120 }],
    'arrow-parens': 'off',
    'comma-dangle': 'error',
    'arrow-spacing': 'error',
    'no-lonely-if': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    yoda: 'error',
    'no-alert': 'error',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-shadow': 'error',
    'no-use-before-define': 'off',
    'no-console': 'error',
    'no-unused-vars': 'error',
    'prefer-template': 'error',
    'arrow-body-style': ['error', 'as-needed'],

    'sort-destructure-keys/sort-destructure-keys': 'error',

    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'error',
    'react/jsx-key': 'error',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'error',
    'react/forbid-prop-types': 'error',
    'react/jsx-no-target-blank': 'error',

    'react-hooks/rules-of-hooks': 'error',

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'error',

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w', 'styled-components'],
          ['^'],
          ['^(containers|images|utils|components|hooks|POC|forms)/'],
          ['^\\.'],
          ['style|Style'],
        ],
      },
    ],
  },
};
