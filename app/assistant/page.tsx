import { Locale, createTranslator } from '@/utils/i18n';
import { Container } from '@/components/layout/Container';
import {
  UserCheck,
  Clock,
  FileText,
  MessageSquare,
  CalendarClock,
  Calendar,
  Users,
  MessageCircle,
  Headphones,
  Sparkles,
  CheckCircle2,
  Smartphone,
} from 'lucide-react';

export default function AssistantPage() {
  const t = createTranslator('en');

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <UserCheck className="w-4 h-4" />
                Clinic Assistant
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                {t('assistant.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('assistant.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('assistant.hero.cta1')}
                </button>
                <button className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('assistant.hero.cta2')}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <UserCheck className="w-48 h-48 text-[#1650EF]/20" strokeWidth={1} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('assistant.challenges.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('assistant.challenges.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((index) => {
              const icons = [Clock, CalendarClock, MessageSquare, FileText];
              const Icon = icons[index];
              const itemKey = `item${index + 1}` as 'item1' | 'item2' | 'item3' | 'item4';
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
                    {t(`assistant.challenges.${itemKey}.title`)}
                  </h3>
                  <p className="text-[#374151] text-sm text-center leading-relaxed">
                    {t(`assistant.challenges.${itemKey}.desc`)}
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
              {t('assistant.solutions.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('assistant.solutions.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-items-center">
            {[0, 1, 2, 3, 4].map((index) => {
              const icons = [Calendar, Users, MessageCircle, Headphones, Sparkles];
              const Icon = icons[index];
              const itemKey = `item${index + 1}` as 'item1' | 'item2' | 'item3' | 'item4' | 'item5';
              return (
                <div
                  key={index}
                  className={`p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 w-full ${
                    index === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                  }`}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1650EF] to-[#1E40AF] rounded-2xl flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-3 text-center">
                    {t(`assistant.solutions.${itemKey}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                    {t(`assistant.solutions.${itemKey}.desc`)}
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
              {t('assistant.data.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('assistant.data.subtitle')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              {[1, 2, 3, 4].map((index) => {
                const bulletKey = `bullet${index}` as 'bullet1' | 'bullet2' | 'bullet3' | 'bullet4';
                return (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <p className="text-[#374151] text-base leading-relaxed">
                      {t(`assistant.data.${bulletKey}`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('assistant.testimonial.title')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 sm:p-12 text-center border border-blue-100">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "{t('assistant.testimonial.quote')}"
              </blockquote>
              <p className="text-gray-900 font-semibold text-lg">
                {t('assistant.testimonial.author')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1650EF] to-[#1E40AF]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              {t('assistant.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('assistant.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('assistant.cta.primary')}
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('assistant.cta.secondary')}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
