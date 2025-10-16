import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const FRENCH_SPEAKING_COUNTRIES = [
  'FR', 'BE', 'CH', 'CA', 'LU', 'MC', 'BF', 'BJ', 'BI', 'CM', 'CF', 'TD', 'KM',
  'CG', 'CD', 'CI', 'DJ', 'GQ', 'GA', 'GN', 'HT', 'MG', 'ML', 'NE', 'RW', 'SN',
  'SC', 'TG', 'VU', 'NC', 'PF', 'WF', 'RE', 'GP', 'MQ', 'GF', 'YT', 'PM'
];

function getLocaleFromRequest(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');

  if (acceptLanguage) {
    const languages = acceptLanguage.split(',').map(lang => {
      const [code] = lang.trim().split(';');
      return code.split('-')[0].toUpperCase();
    });

    if (languages.includes('FR')) {
      return 'fr';
    }
  }

  const country = request.geo?.country;
  if (country && FRENCH_SPEAKING_COUNTRIES.includes(country)) {
    return 'fr';
  }

  return '';
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasLocale = pathname.startsWith('/') || pathname.startsWith('/fr');

  if (!pathnameHasLocale && pathname === '/') {
    const locale = getLocaleFromRequest(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
