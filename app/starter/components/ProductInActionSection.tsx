"use client";

import { Monitor, Package, Smartphone, Tablet } from "lucide-react";
import { createTranslator } from "@/utils/i18n";

const ProductInActionSection = () => {
  const t = createTranslator('en');

  const features = [
    {
      icon: Smartphone,
      title: t('starter.productInAction.capture.title'),
      description: t('starter.productInAction.capture.description'),
      placeholder: 'capture.jpg',
    },
    {
      icon: Monitor,
      title: t('starter.productInAction.patientFile.title'),
      description: t('starter.productInAction.patientFile.description'),
      placeholder: 'patient-interface.jpg',
    },
    {
      icon: Tablet,
      title: t('starter.productInAction.signature.title'),
      description: t('starter.productInAction.signature.description'),
      placeholder: 'ipad-signature.jpg',
    },
    {
      icon: Package,
      title: t('starter.productInAction.inventory.title'),
      description: t('starter.productInAction.inventory.description'),
      placeholder: 'inventory-management.jpg',
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('starter.productInAction.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('starter.productInAction.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              {/* Image Placeholder */}
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <feature.icon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <span className="text-gray-500 text-sm">{feature.placeholder}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInActionSection;
