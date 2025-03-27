import { createI18n } from '@mrozio/i18n';

export const { useTranslate, useLocale, setLocale } = createI18n({
    en: {
        section: {
            title: 'Section title',
            subtitle: 'Section subtitle'
        }
    },
    es: {
        section: {
            title: 'Título de la sección',
            subtitle: 'Subtítulo de la sección'
        }
    },
});