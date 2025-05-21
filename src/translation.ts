import { useState, useEffect } from 'react';
import delve from '@mrozio/dlv';
import type { DotNested, LiteralStringUnion, Subscriber, TranslationReturn, Translations } from '@/types';

export type TranslationOptions<T extends Translations> = {
    defaultLocale?: LiteralStringUnion<keyof T>;
    onLocaleChange?: (locale: keyof T) => void;
}

/**
 * Create i18n instance.
 * @param translations - Translations
 * @param options - Options
 * 
 * @example
 * ```tsx
 * // translations.ts
 * import { createI18n } from '@mrozio/i18n';
 *
 * export const { useTranslate, useLocale } = createI18n({
 *     en: {
 *         section: {
 *             title: 'Section title',
 *             subtitle: 'Section subtitle'
 *         }
 *     },
 *     es: {
 *         section: {
 *             title: 'Título de la sección',
 *             subtitle: 'Subtítulo de la sección'
 *         }
 *     }
 * });
 * ```
 */
export function createI18n<T extends Translations>(translations: T, options: TranslationOptions<typeof translations> = {}) {
    const subscribers = new Set<Subscriber>();

    const locales: (keyof T)[] = Object.keys(translations);
    let storedLocale: keyof T = locales.includes(options.defaultLocale as never) ? options.defaultLocale! : locales[0];

    function subscribe(callback: Subscriber) {
        subscribers.add(callback);
        return () => subscribers.delete(callback);
    }

    function setLocale(locale: LiteralStringUnion<keyof T>) {
        if (locales.includes(locale)) {
            storedLocale = locale;
            subscribers.forEach((callback) => callback());
            options.onLocaleChange?.(locale);
        }
    }

    const translate = <
        TTranslations extends Translations = typeof translations,
        TKey extends DotNested<TTranslations[keyof TTranslations]> = DotNested<TTranslations[keyof TTranslations]>
    >(
            key: TKey,
            _translations: TTranslations = translations[storedLocale] as never
        ): TranslationReturn<TTranslations, TKey> => {
        if (typeof _translations === 'string' || typeof _translations === 'function') {
            return _translations as TranslationReturn<TTranslations, TKey>;
        }
    
        const translation = delve(_translations, key);
    
        if (typeof translation === 'string' || typeof translation === 'function') {
            return translation as TranslationReturn<TTranslations, TKey>;
        }
    
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ((subkey: string) => translate(subkey, translation as any)) as TranslationReturn<TTranslations, TKey>;
    };

    function useTranslate() {
        const forceUpdate = useState(0)[1];

        useEffect(() => {
            return subscribe(() => forceUpdate(n => n + 1)) as never;
        }, []);

        return translate;
    }

    // eslint-disable-next-line @eslint-react/hooks-extra/no-unnecessary-use-prefix
    function useLocale() {
        return [storedLocale, setLocale] as const;
    }

    return {
        /**
         * Hook for translations.
         * 
         * @param key - Path to the translation.
         * @example
         * ```tsx
         * import { createI18n } from '@mrozio/i18n';
         * 
         * const { useTranslate } = createI18n({
         *      en: {
         *          hello: 'Hello',
         *          section: {
         *              title: 'Section title',
         *              subtitle: 'Section subtitle'
         *          }
         *      },
         *      es: {
         *          hello: 'Hola',
         *          section: {
         *              title: 'Título de la sección',
         *              subtitle: 'Subtítulo de la sección'
         *          }
         *      }
         * });
         * 
         * function App() {
         *     const t = useTranslate();
         * 
         *     return (
         *         <>
         *             <h1>{t('hello')}</h1>
         *             <h1>{t('section.title')}</h1>
         *             <h1>{t('section')('subtitle')}</h1>
         *         </>
         *     );
         * }
         * ```
         */
        useTranslate,

        /**
         * Hook for locale.
         * 
         * @example
         * ```tsx
         * import { createI18n } from '@mrozio/i18n';
         * 
         * const { useLocale } = createI18n({});
         * 
         * function App() {
         *     const [locale, setLocale] = useLocale();
         * 
         *     return (
         *         <>
         *             <h1>{locale}</h1>
         *             <button onClick={() => setLocale('en')}>EN</button>
         *             <button onClick={() => setLocale('es')}>ES</button>
         *         </>
         *     );
         * }
         * ```
         */    
        useLocale,

        /** Current locale. */
        getLocale() {
            return storedLocale;
        },

        /**
         * Set the locale.
         * 
         * @param locale - Locale to set.
         * @example
         * ```tsx
         * import { createI18n } from '@mrozio/i18n';
         * 
         * const { setLocale } = createI18n({});
         * 
         * setLocale('en'); // Updates the locale to 'en'.
         * ```
         */
        setLocale,

        /** Translations object. */
        translations, 

        /** List of locales used in your translations. */
        locales,

        /**
         * Use translations outside components.
         * 
         * @param key - Path to the translation.
         * @example
         * ```tsx
         * import { createI18n } from '@mrozio/i18n';
         * 
         * const { translate } = createI18n({});
         * 
         * const title = translate('section.title');
         * ```
         */
        translate,

        /**
         * Subscribe to locale changes.
         * 
         * @param callback - Function to call when locale changes.
         * @example
         * ```tsx
         * import { createI18n } from '@mrozio/i18n';
         * 
         * const { subscribe } = createI18n({});
         * 
         * subscribe(() => console.log('Locale changed!'));
         * ```
         */
        subscribe
    };
}