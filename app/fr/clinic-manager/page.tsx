"use client";

import { Locale, createTranslator } from '@/utils/i18n';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import {
  AppWindow,
  Activity,
  TrendingDown,
  MessageCircle,
  BarChart2,
  Cpu,
  Users,
  Calendar,
  Briefcase,
  Camera,
} from 'lucide-react';

export default function ManagerPageFr() {
  const t = createTranslator('fr');

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Briefcase className="w-4 h-4" />
                {t('manager.hero.badge')}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                {t('manager.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('manager.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('manager.hero.cta1')}
                </button>
                <button className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('manager.hero.cta2')}
                </button>
              </div>
            </div>
            <div className="relative w-[70%] mx-auto">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                {/* TODO: replace with asset */}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('manager.challenges.title')}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {t('manager.challenges.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((index) => {
              const icons = [AppWindow, Activity, TrendingDown, MessageCircle];
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="p-6 bg-[#FFF8F0] border border-[#FFE4CC] rounded-2xl"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#FFE8D1] rounded-2xl flex items-center justify-center">
                      <Icon
                        className="w-6 h-6 text-[#EA580C]"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-base mb-2 text-center">
                    {t(`manager.challenges.item${index + 1}.title`)}
                  </h3>
                  <p className="text-[#374151] text-sm text-center leading-relaxed">
                    {t(`manager.challenges.item${index + 1}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('manager.solutions.title')}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {t('manager.solutions.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {[0, 1, 2, 3, 4].map((index) => {
              const icons = [BarChart2, Cpu, Users, Calendar, Briefcase];
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1650EF] to-[#1E40AF] rounded-2xl flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-3 text-center">
                    {t(`manager.solutions.item${index + 1}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                    {t(`manager.solutions.item${index + 1}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('manager.data.title')}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {t('manager.data.subtitle')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-gray-100">
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">{t('manager.data.bullet1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">{t('manager.data.bullet2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">{t('manager.data.bullet3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">{t('manager.data.bullet4')}</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('manager.testimonial.title')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 border-l-4 border-blue-500">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                {t('manager.testimonial.quote')}
              </blockquote>
              <p className="text-gray-900 font-semibold text-base">
                {t('manager.testimonial.author')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1650EF] to-[#1E40AF]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              {t('manager.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('manager.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('manager.cta.primary')}
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('manager.cta.secondary')}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
