import { createI18n } from '@mrozio/i18n';

export const { useLocale, useTranslate } = createI18n({
    en: {
        section: {
            title: 'Section title',
            subtitle: 'Section subtitle'
        }
    },
    de: {
        section: {
            title: 'Seitentitel',
            subtitle: 'Seitentitel'
        }
    },
    es: {
        section: {
            title: 'Título de la sección',
            subtitle: 'Subtítulo de la sección'
        }
    },
}, {
    defaultLocale: 'en'
});