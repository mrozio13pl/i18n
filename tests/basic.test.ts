import { describe, expect, it } from 'vitest';
import { createI18n } from '@mrozio/i18n';

describe('createI18n()', () => {
    it('exports', () => {
        expect(createI18n).toBeTypeOf('function');
    });

    it('works', () => {
        const i18n = createI18n({
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
            }
        });

        expect(i18n.useLocale).toBeTypeOf('function');
        expect(i18n.useTranslate).toBeTypeOf('function');
        expect(i18n.locales).toEqual(['en', 'es']);
        expect(i18n.setLocale).toBeTypeOf('function');
        expect(i18n.translate).toBeTypeOf('function');
        expect(i18n.translations).toBeTypeOf('object');
    });
});