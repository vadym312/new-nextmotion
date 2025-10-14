import { createTranslator } from "@/utils/i18n";

export default function Hero() {
  const t = createTranslator('en');

  return (
    <section className="py-24 bg-[#EAF0F6]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-20">
        <h1 className="text-[#1650EF] text-4xl md:text-4xl font-bold mb-8">
          {t("blog.hero.title")}
        </h1>

        <p className="text-[#081F4D] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          {t("blog.hero.description")}
        </p>
      </div>
    </section>
  );
}
