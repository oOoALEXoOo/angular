import { FlatCompat } from '@eslint/eslintrc';
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
          '@typescript-eslint/no-explicit-any': 'off',
          'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
          }],
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
