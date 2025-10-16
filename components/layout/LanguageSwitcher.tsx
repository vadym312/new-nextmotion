'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Locale } from '@/utils/i18n';
import { Button } from '@/components/ui/button';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

const URL_MAPPINGS: Record<string, { en: string; fr: string }> = {
  '/about': { en: '/about', fr: '/fr/a-propos' },
  '/fr/a-propos': { en: '/about', fr: '/fr/a-propos' },
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const activeLocale: Locale = pathname && pathname.startsWith('/fr') ? 'fr' : 'en';

  const setLanguagePreference = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=${60 * 60 * 24 * 365}; path=/; samesite=lax`;
  };

  // Handle language switch with cookie update
  const handleLanguageSwitch = (newLocale: Locale) => {
    setLanguagePreference(newLocale);
    const newPath = getLocalePath(newLocale);
    router.push(newPath);
  };

  const getLocalePath = (newLocale: Locale) => {
    if (!pathname) return newLocale === 'en' ? '/' : '/fr';

    if (pathname === '/' || pathname === '') {
      return newLocale === 'en' ? '/' : '/fr';
    }

    if (URL_MAPPINGS[pathname]) {
      return URL_MAPPINGS[pathname][newLocale];
    }

    if (pathname.startsWith('/fr')) {
      if (newLocale === 'en') {
        const restPath = pathname.substring(3);
        return restPath || '/';
      }
      return pathname;
    }

    if (newLocale === 'fr') {
      return `/fr${pathname}`;
    }

    return pathname;
  };

  return (
    <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1 bg-white">
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 px-3 ${
          activeLocale === 'fr' ? 'bg-gray-100 font-medium' : 'text-gray-600'
        }`}
        onClick={() => handleLanguageSwitch('fr')}
      >
        FR
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 px-3 ${
          activeLocale === 'en' ? 'bg-gray-100 font-medium' : 'text-gray-600'
        }`}
        onClick={() => handleLanguageSwitch('en')}
      >
        EN
      </Button>
    </div>
  );
}
