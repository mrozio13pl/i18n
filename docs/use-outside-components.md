# Use outside components

You can use translations outside components as well.

## Getting translations

Use `translate` from `createI18n` the same as with the `useTranslate` hook:

```ts{3}
const { translate } = createI18n();

translate('section.title');
```

> [!WARNING]
> This standalone function won't trigger re-renders when locale changes. Be careful when using it.

## Changing locale

Use `getLocale` and `setLocale` from `createI18n` the same as with the `useLocale` hook:

```ts
const { getLocale, setLocale } = createI18n();

setLocale('en');
getLocale(); // 'en'
```