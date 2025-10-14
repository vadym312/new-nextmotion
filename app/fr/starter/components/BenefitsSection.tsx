"use client";

import { Users, Clock, TrendingUp, FileText } from "lucide-react";
import { createTranslator } from "@/utils/i18n";

const BenefitsSection = () => {
  const t = createTranslator('fr');

  const benefits = [
    {
      icon: Clock,
      title: t('starter.benefits.timeGain.title'),
      description: t('starter.benefits.timeGain.description'),
    },
    {
      icon: TrendingUp,
      title: t('starter.benefits.revenue.title'),
      description: t('starter.benefits.revenue.description'),
    },
    {
      icon: FileText,
      title: t('starter.benefits.admin.title'),
      description: t('starter.benefits.admin.description'),
    },
    {
      icon: Users,
      title: t('starter.benefits.patient.title'),
      description: t('starter.benefits.patient.description'),
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('starter.benefits.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('starter.benefits.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
