# use-locale

Hook for changing the current locale used for displaying translations.

## Usage

This looks like your regular React's `useState`.

```tsx{9}
import { createI18n } from '@mrozio/i18n';

const { useLocale } = createI18n({
    en: {},
    es: {}
});

function Component() {
    const [locale, setLocale] = useLocale();

    return (
        <select value={locale} onChange={setLocale}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
        </select>
    );
}
```