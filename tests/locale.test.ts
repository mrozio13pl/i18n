import { describe, it, expect } from 'vitest';
import { createI18n } from '@mrozio/i18n';

describe('locale management', () => {
    const translations = {
        en: {
            hello: 'Hello'
        },
        es: {
            hello: 'Hola'
        }
    };

    it('should default to the first locale if no default is provided', () => {
        const { getLocale } = createI18n(translations);
        expect(getLocale()).toBe('en');
    });

    it('should use the provided default locale', () => {
        const { getLocale } = createI18n(translations, { defaultLocale: 'es' });
        expect(getLocale()).toBe('es');
    });

    it('should update the locale using setLocale', () => {
        const { setLocale, getLocale } = createI18n(translations);
        setLocale('es');
        expect(getLocale()).toBe('es');
    });

    it('should call onLocaleChange when the locale is updated', () => {
        let newLocale: string | null = null;
        const { setLocale } = createI18n(translations, {
            onLocaleChange: (locale) => {
                newLocale = locale;
            }
        });
        setLocale('es');
        expect(newLocale).toBe('es');
    });
});