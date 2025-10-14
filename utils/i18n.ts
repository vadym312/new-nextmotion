export type Locale = 'fr' | 'en';

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';

export function getTranslations(
  locale: Locale,
  type: 'common' | 'navigation' = 'common'
) {
  try {
    return require(`@/messages/${locale}/${type}.json`);
  } catch (error) {
    return require(`@/messages/${defaultLocale}/${type}.json`);
  }
}

export function createTranslator(
  locale: Locale,
  type: 'common' | 'navigation' = 'common'
) {
  const messages = getTranslations(locale, type);

  return function t(key: string, options?: { returnObjects?: boolean }): any {
    const keys = key.split('.');
    let value: any = messages;

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }

    if (options?.returnObjects) {
      return value;
    }

    return typeof value === 'string' ? value : key;
  };
}
