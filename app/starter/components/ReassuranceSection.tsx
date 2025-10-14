"use client";

import { Server, Award, Trophy } from "lucide-react";
import { createTranslator } from "@/utils/i18n";

const ReassuranceSection = () => {
  const t = createTranslator('en');

  const items = [
    {
      icon: Server,
      title: t('starter.reassurance.aws.title'),
      description: t('starter.reassurance.aws.description'),
    },
    {
      icon: Award,
      title: t('starter.reassurance.innovation.title'),
      description: t('starter.reassurance.innovation.description'),
    },
    {
      icon: Trophy,
      title: t('starter.reassurance.certification.title'),
      description: t('starter.reassurance.certification.description'),
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReassuranceSection;
