import { Locale, createTranslator } from '@/utils/i18n';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import {
  Calendar,
  Users,
  MapPin,
  Smartphone,
  Link,
  Share2,
  Globe,
  Clock,
  CheckCircle,
  TrendingUp,
  Check,
  Shield,
  Star,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AgendaPage() {
  const t = createTranslator('fr');

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Calendar className="w-4 h-4" />
                {t('agenda.hero.badge')}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                {t('agenda.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('agenda.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('agenda.hero.cta')}
                </button>
                <button className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  {t('agenda.hero.ctaSecondary')}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/agenda/agendahero.jpg"
                  alt="Nextmotion Agenda"
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
              {t('agenda.problems.title')}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((index) => {
              const icons = [Calendar, Users, MapPin, Share2];
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
                    {t(`agenda.problems.items.${index}`)}
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
              {t('agenda.solution.title')}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((index) => {
              const icons = [Users, CheckCircle, Globe, Share2];
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
                    {t(`agenda.solution.items.${index}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                    {t(`agenda.solution.items.${index}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/agenda/agendadesktop.jpg"
                alt="Nextmotion Agenda Desktop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('agenda.benefits.title')}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 max-w-7xl mx-auto">
            {[0, 1, 2].map((index) => {
              const icons = [Clock, TrendingUp, Smartphone];
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
                    {t(`agenda.benefits.items.${index}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-base leading-relaxed text-center">
                    {t(`agenda.benefits.items.${index}.description`)}
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
              {t('agenda.ecosystem.title')}
            </h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/agenda/nmecosystem.jpg"
                alt="Nextmotion Ecosystem"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('agenda.testimonial.title')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 text-center shadow-sm">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-[#FDB022] fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('agenda.testimonial.quote')}
              </blockquote>
              <p className="text-gray-900 font-semibold">
                {t('agenda.testimonial.author')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('agenda.pricing.title')}
            </h2>
            <p className="text-xl text-gray-700">
              {t('agenda.pricing.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((planIndex) => {
              const plan = t(`pricing.plans.${planIndex}`, {
                returnObjects: true,
              }) as any;
              const isRecommended = plan.recommended;
              const isGreen = plan.ctaVariant === 'green';

              return (
                <div
                  key={planIndex}
                  className={`relative p-6 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col ${
                    isRecommended
                      ? 'border-[#1650EF] ring-2 ring-[#1650EF] ring-opacity-50'
                      : 'border-gray-200'
                  }`}
                >
                  {isRecommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#1650EF] text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Populaire
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    {plan.price === 'Sur devis' ||
                    plan.price === 'Custom quote' ? (
                      <div className="text-3xl font-bold text-[#0F172A]">
                        {plan.price}
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm text-gray-500">€</span>
                          <span className="text-4xl font-bold text-[#0F172A]">
                            {plan.price}
                          </span>
                          <span className="text-gray-600">{plan.period}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-400 line-through">
                            €{plan.originalPrice}
                          </span>
                          <span className="text-xs text-gray-500">
                            {plan.note}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex-1 space-y-3 mb-6">
                    {plan.features.map(
                      (feature: string, featureIndex: number) => {
                        const isBold =
                          feature.startsWith('**') && feature.endsWith('**');
                        const displayText = isBold
                          ? feature.slice(2, -2)
                          : feature;

                        return (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-2"
                          >
                            <Check
                              className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                              strokeWidth={2.5}
                            />
                            <span
                              className={`text-sm text-gray-700 ${
                                isBold ? 'font-bold' : ''
                              }`}
                            >
                              {displayText}
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      isGreen
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-[#1650EF] text-white hover:bg-[#1650EF]/90'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    {plan.support}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] text-center sm:text-4xl mb-12">
              {t('agenda.faq.title')}
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {[0, 1, 2, 3].map((index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl px-6 border-none hover:bg-gray-50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#0F172A] hover:no-underline py-5">
                    {t(`agenda.faq.items.${index}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5">
                    {t(`agenda.faq.items.${index}.answer`)}
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
              {t('agenda.finalCta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('agenda.finalCta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('agenda.finalCta.cta')}
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('agenda.finalCta.ctaSecondary')}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
