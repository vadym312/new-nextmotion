import { Locale, createTranslator } from '@/utils/i18n';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { RevolutionCarousel } from '@/components/layout/RevolutionCarousel';
import {
  Camera,
  Smartphone,
  RotateCcw,
  Sun,
  Smile,
  Zap,
  Link,
  Cloud,
  Monitor,
  TrendingUp,
  Clock,
  Share2,
  Check,
  Shield,
  Download,
  Server,
  X,
  Play,
  Workflow,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function RevolutionPage() {
  const t = createTranslator('en');

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Camera className="w-4 h-4" />
                {t('revolution.hero.badge')}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                {t('revolution.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('revolution.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('revolution.hero.cta')}
                </button>
                <a
                  href="https://youtu.be/3aI4hHgQKek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Play video
                </a>
              </div>
            </div>
            <div className="relative w-[70%] mx-auto">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/revolution/revolutionhero.jpg"
                  alt="Nextmotion Revolution Device"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('revolution.concept.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              {t('revolution.concept.subtitle')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              {t('revolution.concept.text')}
            </p>
            <div className="mt-12 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src="/revolution/revolution.gif"
                alt="Nextmotion Revolution"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('revolution.benefits.title')}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            {[0, 1, 2, 3, 4].map((index) => {
              const icons = [Camera, RotateCcw, Sun, Smile, Zap];
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
                    {t(`revolution.benefits.item${index + 1}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                    {t(`revolution.benefits.item${index + 1}.desc`)}
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
              {t('revolution.workflow.title')}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 max-w-7xl mx-auto">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-sm mb-6">
                  <img
                    src={`/revolution/how${step}.jpg`}
                    alt={`How it works step ${step}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t(`revolution.workflow.step${step}`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('revolution.value.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              {t('revolution.value.subtitle')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
              {t('revolution.value.text')}
            </p>
            <RevolutionCarousel />
            <div className="flex justify-center mt-8">
              <a
                href="https://youtu.be/3aI4hHgQKek"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                View Before/After
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('revolution.integration.title')}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 max-w-7xl mx-auto">
            {[0, 1, 2].map((index) => {
              const icons = [Link, Cloud, Monitor];
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
                    {t(`revolution.integration.item${index + 1}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-base leading-relaxed text-center">
                    {t(`revolution.integration.item${index + 1}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-2">
                  {t('revolution.pricing.title')}
                </h2>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#1650EF]">
                    {t('revolution.pricing.price')}
                  </span>
                </div>
                <p className="text-xl text-gray-700 font-semibold">
                  {t('revolution.pricing.subtitle')}
                </p>
                <p className="text-base text-gray-500">
                  {t('revolution.pricing.starterPackValue')}
                </p>
              </div>

              <ul className="space-y-4">
                {[0, 1, 2, 3, 4].map((index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1650EF]/10 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-[#1650EF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      {t(`revolution.pricing.features.${index}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                {t('revolution.pricing.cta')}
              </button>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center h-[300px]">
              <img
                src="/revolution/revolutiondimensions.jpeg"
                alt="Nextmotion Revolution Dimensions"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] text-center sm:text-4xl mb-12">
              {t('revolution.faq.title')}
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl px-6 border-none hover:bg-gray-50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#0F172A] hover:no-underline py-5">
                    {t(`revolution.faq.q${index}.q`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5">
                    {t(`revolution.faq.q${index}.a`)}
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
              {t('revolution.final.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('revolution.final.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('revolution.final.cta1')}
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('revolution.final.cta2')}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
