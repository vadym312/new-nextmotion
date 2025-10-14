import { createTranslator } from '@/utils/i18n';
import { Container } from '@/components/layout/Container';
import {
  TrendingUp,
  Target,
  Database,
  BarChart3,
  Camera,
  Star,
  Zap,
  MessageSquare,
  Users,
  Sparkles,
  FileText,
  LineChart,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function MarketingPage() {
  const t = createTranslator('en');

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                {t('marketing.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('marketing.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('marketing.hero.cta1')}
                </button>
                <button className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('marketing.hero.cta2')}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center text-gray-500 p-8">
                  <TrendingUp className="w-24 h-24 mx-auto mb-4 text-[#1650EF]" />
                  <p className="text-sm">
                    {/* TODO: replace with asset */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('marketing.challenges.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('marketing.challenges.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[
              { icon: Camera, key: 'item1' },
              { icon: Star, key: 'item2' },
              { icon: Database, key: 'item3' },
              { icon: Target, key: 'item4' },
            ].map(({ icon: Icon, key }, index) => (
              <div
                key={index}
                className="p-6 bg-[#FFF8F0] border border-[#FFE4CC] rounded-2xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#FFE8D1] rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#EA580C]" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="font-bold text-[#0F172A] text-base mb-2 text-center">
                  {t(`marketing.challenges.${key}.title`)}
                </h3>
                <p className="text-[#374151] text-sm text-center leading-relaxed">
                  {t(`marketing.challenges.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('marketing.solutions.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('marketing.solutions.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {[
              { icon: Camera, key: 'item1' },
              { icon: MessageSquare, key: 'item2' },
              { icon: Sparkles, key: 'item3' },
              { icon: BarChart3, key: 'item4' },
              { icon: Zap, key: 'item5' },
            ].map(({ icon: Icon, key }, index) => (
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
                  {t(`marketing.solutions.${key}.title`)}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                  {t(`marketing.solutions.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('marketing.data.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('marketing.data.subtitle')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 sm:p-12 border border-blue-100">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { icon: BarChart3, key: 'bullet1' },
                { icon: Users, key: 'bullet2' },
                { icon: FileText, key: 'bullet3' },
                { icon: LineChart, key: 'bullet4' },
              ].map(({ icon: Icon, key }, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Icon
                        className="w-6 h-6 text-[#1650EF]"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#4B5563] text-base leading-relaxed">
                      {t(`marketing.data.${key}`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('marketing.testimonial.title')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 text-center shadow-sm border border-gray-100">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                {t('marketing.testimonial.quote')}
              </blockquote>
              <p className="text-gray-900 font-semibold text-lg">
                {t('marketing.testimonial.author')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1650EF] to-[#1E40AF]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              {t('marketing.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('marketing.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('marketing.cta.primary')}
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('marketing.cta.secondary')}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
