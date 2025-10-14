"use client";

import { createTranslator } from "@/utils/i18n";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  const t = createTranslator('en');

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Stars */}
        <div className="flex justify-center mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 italic">
          &quot;{t('starter.testimonial.quote')}&quot;
        </blockquote>

        {/* Author */}
        <div className="space-y-2">
          <p className="text-xl font-semibold text-gray-900">
            {t('starter.testimonial.author.name')}
          </p>
          <p className="text-gray-600">
            {t('starter.testimonial.author.title')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
