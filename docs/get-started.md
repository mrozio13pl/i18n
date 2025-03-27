# Getting started

## Install

First install the package:

::: code-group

```sh [npm]
npm install @mrozio/i18n
```

```sh [pnpm]
pnpm add @mrozio/i18n
```

```sh [yarn]
yarn add @mrozio/i18n
```

```sh [bun]
bun add @mrozio/i18n
```

:::

## Try it out

Create your translations:

```tsx
// translations.ts
import { createI18n } from '@mrozio/i18n';

export const { useTranslate, useLocale } = createI18n({
    en: {
        intro: {
            title: '@mrozio/i18n',
            text: 'A simple i18n library for React'
        },
        support(contact: string) {
            return `If you need support please contact ${contact}.`;
        }
    },
    es: {
        /* ... */
    }
});
```

Use your translations within your components using the `useTranslate` hook:

```tsx
import { useTranslate } from './translations';

export function App() {
    const t = useTranslate();

    return (
        <div>
            <h1>{t('intro.title')}</h1>
            <p>{t('intro.text')}</p>
            <p>{t('support')('example@example.com')}</p>
        </div>
    );
}
```

Changing locale:

```tsx
import { useLocale } from './translations';

export function ChangeLocale() {
    const [locale, setLocale] = useLocale();

    return (
        <select value={locale} onChange={setLocale}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
        </select>
    );
}
```