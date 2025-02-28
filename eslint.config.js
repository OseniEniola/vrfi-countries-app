import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'eslint-config-prettier', // Ensure this is the last config
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Use a stable ECMAScript version
      globals: globals.browser,
      parser: 'espree', // Specify parser (default)
      parserOptions: {
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Disallow console.log and other console methods
      'no-console': ['error', { allow: ['warn', 'error'] }], // Disallow console.log but allow console.warn and console.error

      // Best practices
      'no-unused-vars': 'warn', // Warn on unused variables
      'no-undef': 'error', // Ensure all variables are defined
      'consistent-return': 'error', // Enforce consistent return behavior
      eqeqeq: ['error', 'always'], // Enforce strict equality (=== instead of ==)
    },
  }
);
