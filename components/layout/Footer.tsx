import Link from 'next/link';
import { Container } from './Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Locale } from '@/utils/i18n';

interface FooterProps {
  locale: Locale;
  translations: any;
}

export function Footer({ locale, translations }: FooterProps) {
  return (
    <footer className="bg-[#0A1628] text-white">
      <Container>
        <div className="py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold">
                  NEXT<span className="text-[#1650EF]">MOTION</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                {translations.tagline}
              </p>
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-300">{translations.newsletter}</p>
                <div className="flex gap-2 max-w-md">
                  <Input
                    type="email"
                    placeholder={translations.emailPlaceholder}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#1650EF]"
                  />
                  <Button className="bg-[#1650EF] hover:bg-[#1650EF]/90 whitespace-nowrap">
                    {translations.subscribe}
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{translations.product}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href={`/${locale}#features`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.features}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}#pricing`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.pricing}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}#security`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.security}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}#integrations`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.integrations}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{translations.company}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href={`/${locale}/about`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/careers`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.careers}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/blog`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.blog}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/press`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.press}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{translations.support}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href={`/${locale}/help`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.help}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/docs`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.docs}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/contact`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.contact}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/status`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations.status}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Nextmotion. {translations.rights}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href={`/${locale}/legal`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {translations.legal}
              </Link>
              <Link
                href={`/${locale}/privacy`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {translations.privacy}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {translations.terms}
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
