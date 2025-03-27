import type { Delve } from '@mrozio/dlv';

export type Locale = string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Translation<Args = any> = 
    | string 
    | { [key: string]: Translation }
    | ((...args: Args[]) => string);

export type Translations<TLocales extends Locale[] = Locale[]> = Readonly<Record<TLocales[number], Translation>>;

export type TranslationOutput<Output> = 
    Output extends (...args: infer TArgs) => string
    ? (...args: TArgs) => string : Output extends string 
    ? string : Output extends Record<string, Translation>
    ? <TSubKey extends DotNested<Output>>(subkey: TSubKey) => TranslationOutput<Delve<Output, TSubKey>>
    : never;

export type TranslationReturn<
    TTranslations extends Translations,
    TKey extends DotNested<TTranslations[keyof TTranslations]>,
    Output = Delve<TTranslations[keyof TTranslations], TKey>
> = TranslationOutput<Output>;

// helpers
export type DotNested<T> = T extends object
    ? {
        [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${DotNested<T[K]>}`}`;
    }[keyof T]
    : never;

// Microsoft/TypeScript#29729
export type LiteralStringUnion<LiteralType> = LiteralType | (string & Record<never, never>);

export type Subscriber = () => void;