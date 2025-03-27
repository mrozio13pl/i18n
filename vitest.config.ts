import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
    resolve: {
        alias: {
            '@mrozio/i18n': resolve('./src/index.ts')
        }
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        dir: 'tests',
        coverage: {
            include: ['src'],
        },
    }
});