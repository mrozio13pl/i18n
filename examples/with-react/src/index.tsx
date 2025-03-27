import { createRoot } from 'react-dom/client';
import { useLocale, useTranslate } from './translations';

export function App() {
    const t = useTranslate();
    const [locale, setLocale] = useLocale();
    const section = t('section');

    return (
        <div>
            <h1>{section('user')('John')}</h1>
            <h1>{t('section.title')}</h1>
            <p>Language: {locale}</p>
            <button onClick={() => setLocale('en')}>EN</button>
            <button onClick={() => setLocale('es')}>ES</button>
        </div>
    );
}

createRoot(document.getElementById('root')!).render(<App />);