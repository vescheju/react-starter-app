import { defineConfig } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default defineConfig([
  {
    ignores: ['.react-router/**', 'build/**', 'node_modules/**', 'dist/**', 'public/**'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  reactRefresh.configs.recommended,
  reactHooks.configs['recommended-latest'],
  jsxA11y.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  eslintConfigPrettier,
  {
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.node,
      },
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
]);