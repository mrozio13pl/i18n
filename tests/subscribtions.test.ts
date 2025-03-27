import { describe, it, expect, vi } from 'vitest';
import { createI18n } from '@mrozio/i18n';

describe('subscriptions', () => {
    const translations = {
        en: {
            hello: 'Hello'
        },
        es: {
            hello: 'Hola'
        }
    };

    it('should notify subscribers when the locale changes', () => {
        const { setLocale, subscribe } = createI18n(translations);
        const callback = vi.fn();

        subscribe(callback);
        setLocale('es');

        expect(callback).toHaveBeenCalled();
    });

    it('should not notify unsubscribed callbacks', () => {
        const { setLocale, subscribe } = createI18n(translations);
        const callback = vi.fn();

        const unsubscribe = subscribe(callback);
        unsubscribe();
        setLocale('es');

        expect(callback).not.toHaveBeenCalled();
    });
});