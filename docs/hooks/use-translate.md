# use-translate

Exposed by `createI18n`, allows access to translations and updates them whenever locale changes.

## Usage

Assuming these are your translations:

```tsx
import { createI18n } from '@mrozio/i18n';

export const { useTranslate } = createI18n({
    en: {
        section: {
            title: 'Hello World',
            welcome(name: string) {
                return `Welcome ${name}!`;
            }
        }
    }
});
```

Use `useTranslate` inside your react component:

```tsx
export function Component() {
    const t = useTranslate();
    
    /* ... */
}
```

### Get to translation with a dot-nested path

Using [dlv](https://npm.im/@mrozio/dlv) under the hood:

```ts
const title = t('section.title');
```

### Using a single section

```ts
const section = t('section');
const title = section('title');

// or

const title = section('section')('title');
```

### Using a function

Pass parameters to a given section.

```ts
const username = 'test user';
const welcome = section('section.welcome')(username);
```