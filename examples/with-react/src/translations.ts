import { createI18n } from '@mrozio/i18n';

const defaultLocale = localStorage.getItem('locale') || navigator.language.slice(0, 2).toLowerCase() || 'en';

export const { useTranslate, useLocale, translations, setLocale } = createI18n({
    en: {
        section: {
            title: 'Section title',
            subtitle: 'Section subtitle',
            user(name: string) {
                return `Hello, ${name}!`;
            }
        }
    },
    es: {
        section: {
            title: 'Título de la sección',
            subtitle: 'Subtítulo de la sección',
            user(name: string) {
                return `Hola, ${name}!`;
            }
        }
    }
}, {
    defaultLocale,
    onLocaleChange(locale) {
        localStorage.setItem('locale', locale);
    }
});