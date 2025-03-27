'use client';

import { useLocale, useTranslate } from '../lib/i18n';

export default function Page() {
    const t = useTranslate();
    const [locale, setLocale] = useLocale();

    return (
        <div>
            <h1>{t('section.title')}</h1>
            <h2>{t('section.subtitle')}</h2>
            <p>Language: {locale}</p>
            <button onClick={() => setLocale('en')}>EN</button>
            <button onClick={() => setLocale('es')}>ES</button>
            <button onClick={() => setLocale('de')}>DE</button>
        </div>
    );
}