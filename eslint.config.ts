import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
  {
    rules: {
      semi: 'error',
      quotes: ['error', 'single'],
      'no-empty-function': ['error'],
      'arrow-parens': ['error', 'as-needed'],
      'no-console': 'error',
      indent: ['error', 2]
    }
  }
]);
