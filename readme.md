# @mrozio/i18n [![npm](https://img.shields.io/npm/v/@mrozio/i18n?color=%23FF6F61&label)](https://npm.im/@mrozio/i18n) [![bundle](https://img.shields.io/bundlephobia/minzip/@mrozio/i18n?color=%23FF6F61&label)](https://bundlephobia.com/result?p=@mrozio/i18n)

> Simple and type-safe i18n for React

🌍 Internalization for React, made simple.

## Usage

Define translations:

```tsx
import { createI18n } from '@mrozio/i18n';

const { useTranslate } = createI18n({
    en: {
        section: {
            title: 'Hello World'
        }
    },
    de: { /* ... */ }
});
```

Use them inside your component:

```tsx
function Component() {
    const t = useTranslate();

    return <h1>{t('section.title')}</h1>; 
}
```

## Documentation

https://mrozio13pl.github.io/i18n

