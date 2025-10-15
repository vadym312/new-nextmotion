import { createTranslator } from '@/utils/i18n';
import { Container } from '@/components/layout/Container';
import { TestimonialsCarousel } from '@/components/layout/TestimonialsCarousel';
import Image from 'next/image';
import {
  Building2,
  BarChart3,
  Database,
  Users2,
  FileStack,
  LayoutDashboard,
  UserCog,
  RefreshCcw,
  Brain,
  Star,
  CheckCircle2,
  Package,
  Receipt,
} from 'lucide-react';

export default function MultiSitePage() {
  const t = createTranslator('en');

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                Multi-site Manager
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                {t('multisite.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('multisite.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('multisite.hero.cta1')}
                </button>
                <button className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('multisite.hero.cta2')}
                </button>
              </div>
            </div>
            <div className="relative lg:h-full">
              <div className="w-full lg:w-auto lg:h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/youare/youare.jpg"
                  alt="Multi-Site Owner"
                  width={420}
                  height={420}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('multisite.challenges.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('multisite.challenges.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((index) => {
              const icons = [BarChart3, Database, Users2, FileStack];
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
                    {t(`multisite.challenges.${itemKey}.title`)}
                  </h3>
                  <p className="text-[#374151] text-sm text-center leading-relaxed">
                    {t(`multisite.challenges.${itemKey}.desc`)}
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
              {t('multisite.solutions.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('multisite.solutions.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-items-center">
            {[0, 1, 2, 3, 4].map((index) => {
              const icons = [LayoutDashboard, UserCog, RefreshCcw, Brain, Star];
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
                    {t(`multisite.solutions.${itemKey}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                    {t(`multisite.solutions.${itemKey}.desc`)}
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
              {t('multisite.data.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('multisite.data.subtitle')}
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
                      {t(`multisite.data.${bulletKey}`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              Powerful tools unifying your locations
            </h2>
            <p className="text-lg text-gray-600">
              Centralized platform for seamless multi-site management and control
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            {[
              {
                name: 'Unified Dashboard',
                desc: 'Real-time view across all sites',
                icon: LayoutDashboard,
                gradient: 'from-blue-50 to-blue-100',
                iconColor: 'text-blue-500'
              },
              {
                name: 'Central Reporting',
                desc: 'Consolidated analytics & KPIs',
                icon: BarChart3,
                gradient: 'from-violet-50 to-violet-100',
                iconColor: 'text-violet-500'
              },
              {
                name: 'Staff Management',
                desc: 'Cross-location team coordination',
                icon: UserCog,
                gradient: 'from-emerald-50 to-emerald-100',
                iconColor: 'text-emerald-500'
              },
              {
                name: 'Inventory Sync',
                desc: 'Shared resources tracking',
                icon: Package,
                gradient: 'from-orange-50 to-orange-100',
                iconColor: 'text-orange-500'
              },
              {
                name: 'Group Billing',
                desc: 'Multi-site financial management',
                icon: Receipt,
                gradient: 'from-teal-50 to-teal-100',
                iconColor: 'text-teal-500'
              }
            ].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`relative aspect-video bg-gradient-to-br ${tool.gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className={`w-16 h-16 ${tool.iconColor}`} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#0F172A] text-base mb-2 text-center">
                      {tool.name}
                    </h3>
                    <p className="text-[#4B5563] text-sm text-center leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('multisite.testimonial.title')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel
              testimonials={[
                {
                  quote: "Managing multiple locations used to be a nightmare. Nextmotion's centralized system gives me complete visibility and control across all our clinics.",
                  author: "Dr. Robert Taylor",
                  role: "Multi-Site Owner, 5 Locations",
                  rating: 5,
                },
                {
                  quote: "The unified reporting and analytics are invaluable. I can compare performance across locations and make data-driven decisions instantly.",
                  author: "Dr. Patricia Moore",
                  role: "Regional Director, UK",
                  rating: 5,
                },
                {
                  quote: "Staff management across multiple sites is now seamless. The centralized training materials and protocols ensure consistency everywhere.",
                  author: "Dr. James Anderson",
                  role: "Group Medical Director",
                  rating: 5,
                },
              ]}
              autoPlay={true}
              interval={6000}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1650EF] to-[#1E40AF]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              {t('multisite.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('multisite.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('multisite.cta.primary')}
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('multisite.cta.secondary')}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
