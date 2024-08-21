// eslint-disable-next-line import/no-extraneous-dependencies
import { FlatCompat } from '@eslint/eslintrc';
// eslint-disable-next-line import/no-extraneous-dependencies
import { fixupConfigRules } from '@eslint/compat';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: true,
});

export default [
  ...fixupConfigRules(
    compat.extends('airbnb-base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended'),
  ),
  ...compat.config({
    plugins: [],
    env: {
      es2020: true,
      node: true,
    },
    parserOptions: {
      project: './tsconfig.json',
    },
    overrides: [
      {
        files: ['*.ts'],
        parser: '@typescript-eslint/parser',
        extends: [],
        rules: {
          'import/prefer-default-export': 'off',
          '@typescript-eslint/comma-dangle': 'off',
          'import/no-extraneous-dependencies': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
          '@typescript-eslint/lines-between-class-members': 'off',
        },
      },
      // {
      //   files: ['*.html'],
      //   parser: '@angular-eslint/template-parser',
      //   extends: ['plugin:@angular-eslint/template/recommended'],
      // },
    ],
  }),
];
