/** Prepend locale prefix to a path */
export const withLocale = (locale: string, href: string) => `/${locale}${href}`;
