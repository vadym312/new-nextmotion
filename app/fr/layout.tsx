import type { Metadata } from 'next';
import { getTranslations } from '@/utils/i18n';
import { Header } from '@/components/layout/Header';
import { FooterNew } from '@/components/layout/FooterNew';

export const metadata: Metadata = {
  title: 'Le logiciel n°1 pensé exclusivement pour les cliniques esthétiques',
  description:
    'Découvrez Nextmotion, solution pour cliniques esthétiques : photos avant/après, gestion des patients, comptabilité certifiée, agenda en ligne.',
  alternates: {
    canonical: 'https://www.nextmotion.net/fr',
  },
};

export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = 'fr';
  const navTranslations = getTranslations(locale, 'navigation');
  const commonTranslations = getTranslations(locale, 'common');

  return (
    <>
      <Header locale={locale} translations={navTranslations} />
      <main>{children}</main>
      <FooterNew
        locale={locale}
        translations={{ ...navTranslations, ...commonTranslations.footer }}
      />
    </>
  );
}
