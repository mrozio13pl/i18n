import { createI18n } from '@mrozio/i18n';

const defaultLocale = localStorage.getItem('locale') || navigator.language.slice(0, 2).toLowerCase() || 'en';

export const { useTranslate, useLocale, translations, setLocale } = createI18n({
    en: {
        section: {
            title: 'Section title',
            subtitle: 'Section subtitle',
            user(name: string) {
                return `Hello, ${name}!`;
            },
            jsx() {
                return <h1>Example JSX</h1>;
            }
        }
    },
    es: {
        section: {
            title: 'Título de la sección',
            subtitle: 'Subtítulo de la sección',
            user(name: string) {
                return `Hola, ${name}!`;
            },
            jsx() {
                return <h1>Ejemplo JSX</h1>;
            }
        }
    }
}, {
    defaultLocale,
    onLocaleChange(locale) {
        localStorage.setItem('locale', locale);
    }
});