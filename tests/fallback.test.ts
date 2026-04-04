import { describe, it, expect } from 'vitest';
import { createI18n } from '@mrozio/i18n';

describe('fallback locale', () => {
    const translations = {
        'pt-BR': {
            hello: 'Olá',
            greeting: {
                title: 'Bem-vindo',
                subtitle: 'Bem-vindo ao nosso aplicativo'
            }
        },
        pt: {
            hello: 'Olá',
            greeting: {
                title: 'Bem-vindo'
            }
        },
        en: {
            hello: 'Hello',
            greeting: {
                title: 'Welcome',
                subtitle: 'Welcome to our app'
            }
        },
        es: {
            hello: 'Hola'
        }
    };

    it('should fallback to parent locale when key is missing in specific locale', () => {
        const { translate } = createI18n(translations, {
            defaultLocale: 'pt-BR',
            fallbackLocales: ['pt', 'en']
        });

        expect(translate('greeting.subtitle')).toBe('Bem-vindo ao nosso aplicativo');
        expect(translate('hello')).toBe('Olá');
    });

    it('should fallback to fallbackLocale when key is missing in both specific and parent locale', () => {
        const { translate } = createI18n(translations, {
            defaultLocale: 'pt',
            fallbackLocales: ['en']
        });

        expect(translate('greeting.subtitle')).toBe('Welcome to our app');
    });

    it('should fall through entire fallback chain', () => {
        const { translate } = createI18n(translations, {
            defaultLocale: 'pt-BR',
            fallbackLocales: ['pt', 'en']
        });

        expect(translate('hello')).toBe('Olá');
    });

    it('should handle single fallbackLocale string', () => {
        const { translate } = createI18n(translations, {
            defaultLocale: 'es',
            fallbackLocales: ['en']
        });

        expect(translate('greeting.title')).toBe('Welcome');
    });

    it('should handle empty fallbackLocale array', () => {
        const { translate } = createI18n(translations, {
            defaultLocale: 'es',
            fallbackLocales: []
        });

        expect(translate('hello')).toBe('Hola');
    });

    it('should handle missing fallbackLocale option', () => {
        const { translate } = createI18n(translations, {
            defaultLocale: 'es'
        });

        expect(translate('hello')).toBe('Hola');
    });

    it('should work with locale change and fallback', () => {
        const { translate, setLocale } = createI18n(translations, {
            defaultLocale: 'en',
            fallbackLocales: ['pt']
        });

        setLocale('pt-BR');
        expect(translate('hello')).toBe('Olá');
    });

    it('should handle nested keys with fallback', () => {
        const { translate } = createI18n(translations, {
            defaultLocale: 'pt',
            fallbackLocales: ['en']
        });

        expect(translate('greeting.subtitle')).toBe('Welcome to our app');
    });

    it('should work with function translations and fallback', () => {
        const translationsWithFunctions = {
            'pt-BR': {
                welcome: (name: string) => `Bem-vindo, ${name}!`
            },
            pt: {
                welcome: (name: string) => `Bem-vindo, ${name}!`
            },
            en: {
                welcome: (name: string) => `Welcome, ${name}!`
            }
        };

        const { translate } = createI18n(translationsWithFunctions, {
            defaultLocale: 'pt-BR',
            fallbackLocales: ['pt', 'en']
        });

        const result = translate('welcome');
        expect(typeof result).toBe('function');
        expect(result('John')).toBe('Bem-vindo, John!');
    });
});
