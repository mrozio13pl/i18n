import { locales, setLocale } from './i18n';

export function LanguagePicker() {
    return (
        <select onChange={(e) => setLocale(e.target.value)}>
            {locales.map((locale) => (
                <option key={locale}>{locale}</option>
            ))}
        </select>
    );
}