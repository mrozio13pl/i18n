import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { createI18n } from '@mrozio/i18n';

describe('re-rendering', () => {
    const translations = {
        en: {
            hello: 'Hello'
        },
        es: {
            hello: 'Hola'
        }
    };

    it('should re-render when the locale changes', () => {
        const { useTranslate, setLocale } = createI18n(translations);
        const { result } = renderHook(() => useTranslate());

        expect(result.current('hello')).toBe('Hello');

        act(() => {
            setLocale('es');
        });

        expect(result.current('hello')).toBe('Hola');
    });
});