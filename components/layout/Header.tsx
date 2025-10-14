'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Locale } from '@/utils/i18n';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_EN, NAV_FR } from '@/config/nav.config';

interface HeaderProps {
  locale: Locale;
  translations: Record<string, string>;
}

export function Header({ locale, translations }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navConfig = locale === 'en' ? NAV_EN : NAV_FR;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between h-20">
          <Link href={`${locale === 'en' ? '/' : '/fr'}`} className="flex items-center group">
            <Image
              src="/nmlogo.svg"
              alt="Nextmotion"
              width={144}
              height={48}
              className="hidden lg:block h-6 w-auto group-hover:opacity-90 transition-opacity duration-300"
              priority
            />
            <Image
              src="/nmlogomobile.svg"
              alt="Nextmotion"
              width={144}
              height={48}
              className="lg:hidden h-12 w-auto group-hover:opacity-90 transition-opacity duration-300"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium bg-transparent hover:bg-gray-50">
                    {navConfig.solutions.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {navConfig.solutions.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="text-sm font-medium text-gray-900 group-hover:text-[#1650EF] transition-colors">
                              {translations[link.label]}
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 border-t border-gray-100 pt-4 mt-2">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            {navConfig.moreSolutions.title}
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {navConfig.moreSolutions.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="group block p-3 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all"
                              >
                                <div className="text-sm font-medium text-gray-900 group-hover:text-[#1650EF] transition-colors">
                                  {translations[link.label]}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium bg-transparent hover:bg-gray-50">
                    {navConfig.personas.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-6">
                      <div className="grid gap-3">
                        {navConfig.personas.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="text-sm font-medium text-gray-900 group-hover:text-[#1650EF] transition-colors">
                              {translations[link.label]}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href={navConfig.pricing.href}
                    className="inline-flex h-10 items-center px-4 text-sm font-medium text-gray-700 hover:text-[#1650EF] transition-colors"
                  >
                    {translations[navConfig.pricing.label]}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium bg-transparent hover:bg-gray-50">
                    {navConfig.resources.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[350px] p-6">
                      <div className="grid gap-3">
                        {navConfig.resources.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="text-sm font-medium text-gray-900 group-hover:text-[#1650EF] transition-colors">
                              {translations[link.label]}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-[#1650EF] hover:bg-gray-50"
            >
              <a href={navConfig.login.href} target="_blank" rel="noopener noreferrer">
                {translations[navConfig.login.label]}
              </a>
            </Button>
            <LanguageSwitcher currentLocale={locale} />
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-[#1650EF] to-[#0EA5E9] hover:from-[#1650EF]/90 hover:to-[#0EA5E9]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={navConfig.cta.href}>
                {translations[navConfig.cta.label]}
              </Link>
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-[#1650EF] to-[#0EA5E9] hover:from-[#1650EF]/90 hover:to-[#0EA5E9]/90 text-white shadow-md"
            >
              <Link href={navConfig.cta.href}>
                {translations[navConfig.cta.label]}
              </Link>
            </Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="px-2">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 p-0 bg-white">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-gray-50 to-white">
                    <Link href={`/${locale}`} className="flex items-center">
                      <Image
                        src="/nmlogomobile.svg"
                        alt="Nextmotion"
                        width={144}
                        height={48}
                        className="h-6 w-auto"
                        priority
                      />
                    </Link>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          {navConfig.solutions.title}
                        </div>
                        <div className="space-y-1">
                          {navConfig.solutions.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#1650EF] hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {translations[link.label]}
                            </Link>
                          ))}
                          {navConfig.moreSolutions.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#1650EF] hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {translations[link.label]}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          {navConfig.personas.title}
                        </div>
                        <div className="space-y-1">
                          {navConfig.personas.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#1650EF] hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {translations[link.label]}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={navConfig.pricing.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 text-sm font-medium text-gray-900 hover:text-[#1650EF] hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {translations[navConfig.pricing.label]}
                      </Link>

                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          {navConfig.resources.title}
                        </div>
                        <div className="space-y-1">
                          {navConfig.resources.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#1650EF] hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {translations[link.label]}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t bg-gray-50 p-6 space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">{translations[navConfig.login.label]}</span>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-[#1650EF] hover:bg-blue-50"
                      >
                        <a href={navConfig.login.href} target="_blank" rel="noopener noreferrer">
                          {translations[navConfig.login.label]}
                        </a>
                      </Button>
                    </div>
                    <LanguageSwitcher currentLocale={locale} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}
