import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '@mrozio/i18n',
    description: 'Simple and type-safe i18n for React',
    lang: 'en-US',
    base: '/i18n/',
    cleanUrls: true,
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="85">🌍</text></svg>',
            },
        ],
    ],
    themeConfig: {
        sidebar: [
            { text: 'Get started', link: '/get-started' },
            { text: 'Create translations', link: '/create-translations' },
            {
                text: 'Hooks',
                items: [
                    { text: 'useTranslate', link: '/hooks/use-translate' },
                    { text: 'useLocale', link: '/hooks/use-locale' },
                ]
            },
            {
                text: 'Use outside components',
                link: '/use-outside-components'
            },
            { text: 'Examples', link: 'https://github.com/mrozio13pl/i18n/tree/main/examples' },
        ],
        nav: [
            { text: 'Features', link: '/#features' },
            { text: 'Examples', link: 'https://github.com/mrozio13pl/i18n/tree/main/examples' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/mrozio13pl/i18n' },
            { icon: 'npm', link: 'https://www.npmjs.com/package/@mrozio/i18n' },
        ],
        search: {
            provider: 'local'
        },
        outline: [2, 3],
    },
    vite: {
        plugins: [
            groupIconVitePlugin() as never
        ]
    },
    markdown: {
        config(md) {
            md.use(groupIconMdPlugin);
        },
    },
}); 