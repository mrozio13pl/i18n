import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '@mrozio/i18n',
    description: 'Simple and type-safe i18n for React',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}