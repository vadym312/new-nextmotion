import { createTranslator } from "@/utils/i18n";
import { Container } from "@/components/layout/Container";
import { LogoCarousel } from "@/components/layout/LogoCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FileText,
  Users,
  ClipboardList,
  CreditCard,
  Workflow,
  Clock,
  Check,
  Image as ImageIcon,
  Lock,
  Calendar,
  User,
  Sparkles,
  PenTool,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ConsultPage() {
  const t = createTranslator("en");

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <FileText className="w-4 h-4" />
                {t("consult.hero.badge")}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                {t("consult.hero.title")}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t("consult.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact_form">
                  <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                    {t("consult.hero.cta")}
                  </button>
                </Link>
                <Link href="/starter">
                  <button className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                    {t("consult.hero.ctaSecondary")}
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative w-full sm:w-[70%] mx-auto">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/consult/consulthero.jpg"
                  alt="Nextmotion Consult"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <LogoCarousel
        title={t("trustedBy.title")}
        subtitle={t("trustedBy.subtitle")}
        logos={t("logos.clinics", { returnObjects: true }) as string[]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t("consult.problems.title")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((index) => {
              const icons = [Workflow, ClipboardList, CreditCard, FileText];
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
                    {t(`consult.problems.items.${index}`)}
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
              {t("consult.solution.title")}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((index) => {
              const icons = [Users, ClipboardList, Clock, CreditCard];
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
                    {t(`consult.solution.items.${index}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                    {t(`consult.solution.items.${index}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/consult/consulttrio.jpg"
              alt="Nextmotion Consult Solution Demo"
              className="w-full h-auto"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t("consult.features.title")}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
              const iconConfigs = [
                {
                  Icon: ClipboardList,
                  bgColor: "bg-blue-50",
                  iconColor: "text-blue-600",
                },
                {
                  Icon: ImageIcon,
                  bgColor: "bg-pink-50",
                  iconColor: "text-pink-600",
                },
                {
                  Icon: PenTool,
                  bgColor: "bg-green-50",
                  iconColor: "text-green-600",
                },
                { Icon: Lock, bgColor: "bg-red-50", iconColor: "text-red-600" },
                {
                  Icon: Calendar,
                  bgColor: "bg-orange-50",
                  iconColor: "text-orange-600",
                },
                {
                  Icon: User,
                  bgColor: "bg-cyan-50",
                  iconColor: "text-cyan-600",
                },
                {
                  Icon: Sparkles,
                  bgColor: "bg-yellow-50",
                  iconColor: "text-yellow-600",
                },
                {
                  Icon: Workflow,
                  bgColor: "bg-purple-50",
                  iconColor: "text-purple-600",
                },
              ];
              const { Icon, bgColor, iconColor } = iconConfigs[index];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6"
                >
                  <div
                    className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-8 h-8 ${iconColor}`} strokeWidth={2} />
                  </div>
                  <p className="text-[#374151] text-sm leading-relaxed">
                    {t(`consult.features.items.${index}.title`)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t("consult.copilot.title")}
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              {t("consult.copilot.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              {t("consult.copilot.text")
                .split("\n\n")
                .map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-base text-[#4B5563] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              <div className="pt-2 flex justify-center md:justify-start">
                <Link href="/ai-copilot">
                  <Button
                    size="lg"
                    className="h-auto bg-[#1650EF] text-white hover:bg-[#1E40AF] shadow-lg px-8 py-3 text-base font-semibold"
                  >
                    {t("consult.copilot.cta")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1650EF]/10 to-[#1E40AF]/5 rounded-3xl blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <img
                  src="/consult/copilotai.jpg"
                  alt="Nextmotion Copilot AI"
                  className="w-full h-auto"
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
              {t("consult.ecosystem.title")}
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              {t("consult.ecosystem.tagline")}
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="/consult/nmecosystem.jpg"
              alt="Nextmotion Ecosystem"
              className="w-full h-auto"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t("consult.testimonial.title")}
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
                {t("consult.testimonial.quote")}
              </blockquote>
              <p className="text-gray-900 font-semibold">
                {t("consult.testimonial.author")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t("consult.pricing.title")}
            </h2>
            <p className="text-xl text-gray-700">
              {t("consult.pricing.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((planIndex) => {
              const plan = t(`pricing.plans.${planIndex}`, {
                returnObjects: true,
              }) as any;
              const isRecommended = plan.recommended;
              const isGreen = plan.ctaVariant === "green";

              return (
                <div
                  key={planIndex}
                  className={`relative p-6 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col ${
                    isRecommended
                      ? "border-[#1650EF] ring-2 ring-[#1650EF] ring-opacity-50"
                      : "border-gray-200"
                  }`}
                >
                  {isRecommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#1650EF] text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Popular
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
                    {plan.price === "Sur devis" ||
                    plan.price === "Custom quote" ? (
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
                          feature.startsWith("**") && feature.endsWith("**");
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
                                isBold ? "font-bold" : ""
                              }`}
                            >
                              {displayText}
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>

                  <Link href={isGreen ? "/starter" : "/contact_form"}>
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        isGreen
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-[#1650EF] text-white hover:bg-[#1650EF]/90"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </Link>

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
              {t("consult.faq.title")}
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {[0, 1, 2, 3].map((index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl px-6 border-none hover:bg-gray-50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#0F172A] hover:no-underline py-5">
                    {t(`consult.faq.items.${index}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5">
                    {t(`consult.faq.items.${index}.answer`)}
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
              {t("consult.finalCta.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t("consult.finalCta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact_form">
                <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                  {t("consult.finalCta.cta")}
                </button>
              </Link>
              <Link href="/starter">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                  {t("consult.finalCta.ctaSecondary")}
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
