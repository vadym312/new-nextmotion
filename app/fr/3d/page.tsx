import { Locale, createTranslator } from '@/utils/i18n';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import {
  Layers,
  Eye,
  Clock,
  BookOpen,
  Brain,
  Users,
  Workflow,
  Microscope,
  Shield,
  Monitor,
  Tablet,
  Share2,
  Check,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ThreeDPage() {
  const t = createTranslator('fr');

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Layers className="w-4 h-4" />
                {t('3d.hero.badge')}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                {t('3d.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('3d.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('3d.hero.cta')}
                </button>
                <a
                  href="https://www.youtube.com/watch?v=CILpFl28cfM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl text-center"
                >
                  {t('3d.hero.ctaSecondary')}
                </a>
              </div>
            </div>
            <div className="relative w-full mx-auto">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/3d/3dhero.jpg"
                  alt="Nextmotion 3D"
                  className="w-full h-full object-cover"
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
              {t('3d.problems.title')}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((index) => {
              const icons = [Brain, Eye, Clock, BookOpen];
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
                  <p className="text-[#374151] text-base text-center leading-relaxed">
                    {t(`3d.problems.items.${index}`)}
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
              {t('3d.solution.title')}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((index) => {
              const icons = [Layers, Clock, Users, Microscope];
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
                    {t(`3d.solution.items.${index}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                    {t(`3d.solution.items.${index}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/3d/3dhow.jpg"
                alt="Nextmotion 3D Workflow"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('3d.benefits.title')}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 max-w-7xl mx-auto">
            {[0, 1, 2].map((index) => {
              const icons = [Users, BookOpen, Shield];
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] rounded-2xl flex items-center justify-center shadow-sm">
                      <Icon
                        className="w-8 h-8 text-[#059669]"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-xl mb-3 text-center">
                    {t(`3d.benefits.items.${index}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-base leading-relaxed text-center">
                    {t(`3d.benefits.items.${index}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('3d.workflow.title')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl overflow-hidden border border-blue-100">
            <img
              src="/3d/nm3dcover.jpg"
              alt="Nextmotion 3D Application"
              className="w-full h-auto object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('3d.science.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {t('3d.science.subtitle')}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-2xl text-gray-600">{t('3d.science.currency')}</span>
                  <span className="text-6xl font-bold text-[#1650EF]">{t('3d.science.price')}</span>
                  <span className="text-2xl text-gray-600">{t('3d.science.period')}</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('3d.science.description')}
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
                  Commencer
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('3d.testimonial.title')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 text-center shadow-sm border border-gray-100">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "{t('3d.testimonial.quote')}"
              </blockquote>
              <p className="text-gray-900 font-semibold text-lg">
                {t('3d.testimonial.author')}
              </p>
            </div>
          </div>
        </Container>
      </section>


      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] text-center sm:text-4xl mb-12">
              {t('3d.faq.title')}
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {[0, 1, 2, 3, 4].map((index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl px-6 border-none hover:bg-gray-50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#0F172A] hover:no-underline py-5">
                    {t(`3d.faq.items.${index}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5">
                    {t(`3d.faq.items.${index}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1650EF] to-[#1E40AF]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              {t('3d.finalCta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('3d.finalCta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('3d.finalCta.cta')}
              </button>
              <a
                href="https://www.youtube.com/watch?v=CILpFl28cfM"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl text-center inline-block"
              >
                {t('3d.hero.ctaSecondary')}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
