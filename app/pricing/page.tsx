"use client";

import { createTranslator } from '@/utils/i18n';
import { Container } from '@/components/layout/Container';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const t = createTranslator('en');

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('tarifs.plans.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('tarifs.plans.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {['starter', 'essential', 'premium', 'enterprise'].map((key) => {
              const isPopular = key === 'essential';
              const features = [];
              for (let i = 1; i <= 6; i++) {
                const featureText = t(`tarifs.plans.${key}.f${i}`);
                if (featureText && !featureText.startsWith('plans.')) {
                  features.push(featureText);
                }
              }

              return (
                <div
                  key={key}
                  className={`relative rounded-2xl border p-6 shadow-sm hover:shadow-md transition flex flex-col ${
                    isPopular ? 'border-[#1650EF] ring-2 ring-[#1650EF] ring-opacity-50' : 'border-gray-200'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#1650EF] text-white text-sm font-semibold px-4 py-1 rounded-full">
                        {t('tarifs.plans.popular')}
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1 text-[#0F172A]">{t(`tarifs.plans.${key}.title`)}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {t(`tarifs.plans.${key}.desc`)}
                  </p>
                  <p className="text-3xl font-bold text-[#1650EF] mb-2">
                    {t(`tarifs.plans.${key}.price`)}
                  </p>
                  {t(`plans.${key}.oldPrice`) && (
                    <p className="text-sm line-through text-gray-400 mb-3">
                      {t(`tarifs.plans.${key}.oldPrice`)}
                    </p>
                  )}
                  <ul className="text-sm space-y-2 mb-5 flex-grow">
                    {features.map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-gray-700">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition ${
                    key === 'starter' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-[#1650EF] text-white hover:bg-[#1650EF]/90'
                  }`}>
                    {t(`tarifs.plans.${key}.cta`)}
                  </button>
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
              {t('tarifs.cloud.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('tarifs.cloud.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {['t1', 't2', 't3', 't4'].map((tier) => (
              <div key={tier} className="rounded-xl p-6 bg-white shadow-sm text-center border border-gray-200 hover:shadow-md transition">
                <h4 className="font-semibold text-[#0F172A] mb-2">{t(`tarifs.cloud.tiers.${tier}.title`)}</h4>
                <p className="text-3xl font-bold text-[#1650EF] mt-1 mb-3">
                  {t(`tarifs.cloud.tiers.${tier}.price`)}
                </p>
                <p className="text-sm text-gray-600">
                  {t(`tarifs.cloud.tiers.${tier}.text`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('tarifs.addons.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('tarifs.addons.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {['nm3d', 'copilot', 'api'].map((addon) => (
              <div key={addon} className="rounded-xl p-8 bg-gray-50 shadow-sm text-center border border-gray-200 hover:shadow-md transition">
                <h4 className="font-semibold text-[#0F172A] text-lg mb-2">{t(`tarifs.addons.${addon}.title`)}</h4>
                <p className="text-3xl font-bold text-[#1650EF] mt-1 mb-4">
                  {t(`tarifs.addons.${addon}.price`)}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(`tarifs.addons.${addon}.text`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t('tarifs.annual.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('tarifs.annual.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {['b1', 'b2', 'b3'].map((b) => (
              <div key={b} className="rounded-xl p-6 bg-white shadow-sm text-center border border-gray-200">
                <h4 className="font-semibold text-[#0F172A] text-lg mb-3">{t(`tarifs.annual.${b}.title`)}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(`tarifs.annual.${b}.text`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {t('tarifs.services.title')}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {['s1', 's2', 's3'].map((s) => (
              <div key={s} className="rounded-xl p-6 bg-gray-50 shadow-sm text-center border border-gray-200">
                <h4 className="font-semibold text-[#0F172A] text-lg mb-3">{t(`tarifs.services.${s}.title`)}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(`tarifs.services.${s}.text`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1650EF] to-[#1E40AF]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              {t('tarifs.final.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('tarifs.final.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('tarifs.final.cta1')}
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t('tarifs.final.cta2')}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
