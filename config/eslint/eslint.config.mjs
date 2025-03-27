// @ts-check
import eslintJs from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import json from 'eslint-plugin-json';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
    globalIgnores(['**/node_modules/**', '**/dist/**', '**/build/**', '**/cache/**', '**/coverage/**', '**/.vitepress/**', '**/tsconfig.json']),
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs', '**/*.cts', '**/*.mts'],
        rules: {
            semi: 'error',
            indent: ['error', 4],
            quotes: ['error', 'single'],
            'prefer-const': 'error',
            '@eslint-react/dom/no-missing-button-type': 'off',
        },
        extends: [
            eslintJs.configs.recommended,
            eslintReact.configs['recommended-typescript'],
            tseslint.configs.recommended,
        ],
    },
    {
        files: ['**/*.json'],
        extends: [json.configs.recommended],
    }
]);