# Creating translations

To create translations, use `createI18n` function exported from the library.

## API

### `createI18n(translations, options?)`

This function returns all the necessary ingredients to get your translations working.

### Params

#### `translations`

Nested object with translations for each language.<br />
Can be an object of strings or functions with parameters.

For example:

```ts
const translations = {
    en: {
        section: {
            title: ''
        }
    },
    es: {
        /* ... */
    }
}
```

#### options (_optional_)

Options for creating i18n.

##### defaultLocale

Sets the default locale, uses first locale from translations by default.

##### onLocaleChange

A function which is fired whenever locale changes, with the new locale being its parameter, e.g.

```ts
onLocaleChange(locale) {
    console.log('New locale', locale);
}
```

### Hooks & helpers

The `createI18n` function returns all hooks and functions you need for handling translations:

- [`useTranslate`](/hooks/use-translate) hook
- [`useLocale`](/hooks/use-locale) hook
- [`translate`](/use-outside-components) - same as the `useTranslate` hook but as a standalone function
- `getLocale` - function that returns the current locale
- `setLocale` - function for changing locale
- `translations` - Translations
- `locales` - All locales used in translations

For example:

```ts
const {
    useTranslate,
    useLocale,
    translate,
    locale,
    setLocale,
    translations,
    locales
} = createI18n({ /* ... */ });
```

## Usage

Let's create our first translations.

::: code-group

```ts [translations.ts]
import { createI18n } from '@mrozio/i18n';

export const { useTranslate } = createI18n({
    en: {
        section: {
            title: 'Hello World'
        }
    }
});
```

:::

Then use these translations in our component:

```tsx
import { useTranslate } from './translation';

function App() {
    const t = useTranslate();

    return <h1>{t('section.title')}</h1>;
}
```