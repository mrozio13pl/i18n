import { createI18n } from '@mrozio/i18n';
import en from '../langs/en.json';
import de from '../langs/de.json';

export const { useTranslate, useLocale, locales, setLocale } = createI18n({ en, de });