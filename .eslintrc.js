module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js', 'webpack', 'build', 'babel.config.js'],
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
    'import',
  ],
  rules: {
    'max-len': [2, { code: 120 }],
    'arrow-parens': 0,
    'comma-dangle': [2, 'always-multiline'],
    'arrow-spacing': 2,
    'no-lonely-if': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'no-alert': 2,
    'prefer-destructuring': [2, { object: true, array: false }],
    'no-shadow': 2,
    'no-use-before-define': 0,
    'no-console': 2,
    'prefer-template': 2,
    'arrow-body-style': [2, 'as-needed'],
    'linebreak-style': [2, 'unix'],

    'sort-destructure-keys/sort-destructure-keys': 2,

    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': 2,
    'react/jsx-key': 2,
    'react/require-default-props': 0,
    'react/destructuring-assignment': 2,
    'react/forbid-prop-types': 2,
    'react/jsx-no-target-blank': 2,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/function-component-definition': 0,

    'react-hooks/rules-of-hooks': 2,

    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    'import/newline-after-import': 2,
    'import/no-unresolved': 2,

    'simple-import-sort/exports': 2,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w', 'styled-components'],
          ['^'],
          ['^(containers|images|utils|components|hooks|reduxConfig)/'],
          ['^\\.'],
          ['style|Style'],
        ],
      },
    ],

    '@typescript-eslint/default-param-last': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
