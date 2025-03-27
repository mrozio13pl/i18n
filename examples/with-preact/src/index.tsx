import { render } from 'preact';
import { useLocale, useTranslate } from './translations';

function App() {
    const t = useTranslate();
    const [locale, setLocale] = useLocale();

    return (
        <div>
            <h1>{t('section.title')}</h1>
            <h2>{t('section.subtitle')}</h2>
            <p>Language: {locale}</p>
            <button onClick={() => setLocale('en')}>EN</button>
            <button onClick={() => setLocale('es')}>ES</button>
        </div>
    );    
}

render(<App />, document.getElementById('root')!);