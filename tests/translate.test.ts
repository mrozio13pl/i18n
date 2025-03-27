import { describe, it, expect } from 'vitest';
import { createI18n } from '@mrozio/i18n';

describe('translate', () => {
    const translations = {
        en: {
            hello: 'Hello',
            section: {
                title: 'Section title',
                subtitle: 'Section subtitle'
            }
        },
        es: {
            hello: 'Hola',
            section: {
                title: 'Título de la sección',
                subtitle: 'Subtítulo de la sección'
            }
        }
    };

    const { translate } = createI18n(translations);

    it('should return the correct translation for a top-level key', () => {
        expect(translate('hello')).toBe('Hello');
    });

    it('should return the correct translation for a nested key', () => {
        expect(translate('section.title')).toBe('Section title');
    });

    it('should return a function for a nested object', () => {
        const result = translate('section');
        expect(typeof result).toBe('function');
        expect(result('title')).toBe('Section title');
    });

    it('should handle locale change', () => {
        const { translate, setLocale } = createI18n(translations);
        setLocale('es');
        expect(translate('hello')).toBe('Hola');
    });
});