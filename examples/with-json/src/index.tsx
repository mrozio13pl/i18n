import { createRoot } from 'react-dom/client';
import { useLocale, useTranslate } from './i18n';
import { LanguagePicker } from './language-picker';

function App() {
    const t = useTranslate();
    const [locale] = useLocale();

    return (
        <div>
            <h1>{t('section.title')}</h1>
            <h2>{t('section.subtitle')}</h2>
            <p>Language: {locale}</p>
            <LanguagePicker />
        </div>
    );
}

createRoot(document.getElementById('root')!).render(<App />);