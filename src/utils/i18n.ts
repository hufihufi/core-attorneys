import { de } from '../i18n/de';
import { en } from '../i18n/en';

export type Locale = 'de' | 'en';

export const defaultLocale: Locale = 'de';
export const locales: Locale[] = ['de', 'en'];

export function useTranslations(locale: Locale) {
  return locale === 'de' ? de : en;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'en') return 'en';
  if (firstSegment === 'de') return 'de';
  return defaultLocale;
}

/**
 * Returns the localized URL for the same page in another locale.
 * e.g. /de/team/ → /en/team/
 */
export function getAlternateLocaleUrl(url: URL, targetLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(url);
  const pathname = url.pathname;

  // Remove the current locale prefix
  const withoutLocale = pathname.replace(
    new RegExp(`^/${currentLocale}`),
    ''
  );

  return `/${targetLocale}${withoutLocale || '/'}`;
}

/**
 * Builds a localized internal URL path.
 */
export function getLocalizedUrl(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
}

/**
 * Returns the hreflang value for a locale.
 */
export function getHreflang(locale: Locale): string {
  return locale === 'de' ? 'de-CH' : 'en';
}

/**
 * Formats a date according to locale conventions.
 */
export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === 'de' ? 'de-CH' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Replaces {year} placeholder in copyright strings.
 */
export function replacePlaceholders(str: string, values: Record<string, string | number>): string {
  return str.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
}
