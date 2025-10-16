import { Metadata } from "next";
import Link from "next/link";
import { createTranslator } from "@/utils/i18n";
import { Hero } from "@/components/layout/Hero";
import { CTA } from "@/components/layout/CTA";
import { Container } from "@/components/layout/Container";
import { LogoCarousel } from "@/components/layout/LogoCarousel";
import { TestimonialsCarousel } from "@/components/layout/TestimonialsCarousel";
import {
  Camera,
  Heart,
  Bot,
  TrendingUp,
  Star,
  DollarSign,
  User,
  Clock,
  Image,
  FileCheck,
  Calendar,
  Globe,
  Video,
  Workflow,
  Plug,
  Check,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OrganizationSchema } from "./components/OrganizationSchema";
import { SoftwareApplicationSchema } from "./components/SoftwareApplicationSchema";

export const metadata: Metadata = {
  title:
    "Management software for aesthetic clinics: simplify your appointments and cash management.",
  description:
    "Optimize the management of your aesthetic clinic with our software dedicated to physicians, aesthetic surgeons, and managers. Simplify appointment scheduling, cash management, and much more.",
  alternates: {
    canonical: "https://www.nextmotion.net",
  },
};

export default function Home() {
  const t = createTranslator("en");

  return (
    <>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        primaryCta={t("hero.cta")}
        secondaryCta={t("hero.ctaSecondary")}
        tertiaryCta={t("hero.ctaTertiary")}
      />

      <LogoCarousel
        title={t("trustedBy.title")}
        subtitle={t("trustedBy.subtitle")}
        logos={t("logos.clinics", { returnObjects: true }) as string[]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {t("challenges.title")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-7xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Lack of revenue",
                description:
                  "too many rejected quotes, loss of business opportunities",
              },
              {
                icon: User,
                title: "Complex patient experience",
                description:
                  "a less than smooth journey that harms satisfaction and retention",
              },
              {
                icon: Clock,
                title: "Time-consuming management",
                description:
                  "paper consents, scattered tools, heavy administrative tasks",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-[#FFF8F0] border border-[#FFE4CC] rounded-2xl"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-[#FFE8D1] rounded-2xl flex items-center justify-center">
                      <Icon
                        className="w-6 h-6 text-[#EA580C]"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <p className="text-[#374151] text-base text-center leading-relaxed">
                    <span className="font-bold text-[#0F172A]">
                      {item.title}
                    </span>{" "}
                    : {item.description}
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
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Our mission: simplify your daily routine and boost your results
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-7xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "+ Revenue",
                description:
                  "standardized before/after photos, integrated CRM, marketing tracking",
              },
              {
                icon: Heart,
                title: "+ Patient satisfaction",
                description:
                  "digitalized consultation, electronic consents, patient portal",
              },
              {
                icon: Clock,
                title: "- Time wasted",
                description:
                  "automations, AI secretary, calendar synced with Doctolib",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
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
                    {item.title}
                  </h3>
                  <p className="text-[#4B5563] text-base leading-relaxed text-center">
                    {item.description}
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
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              A modular solution adapted to your needs
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {[
              {
                icon: Camera,
                title: "Nextmotion Capture",
                description: "comparable and standardized before/after photos",
                image: "/solutions/nmcapturehome.jpg",
                link: "/capture",
              },
              {
                icon: FileCheck,
                title: "Nextmotion Consult",
                description: "smart patient file and automated reports",
                image: "/solutions/nmconsulthome.jpg",
                link: "/consult",
              },
              {
                icon: Calendar,
                title: "Nextmotion Agenda",
                description: "planning and synchronization with Doctolib",
                image: "/solutions/nmcalendarhome.jpg",
                link: "/agenda",
              },
              {
                icon: Globe,
                title: "Patient Portal",
                description: "online space to share documents and results",
                image: "/solutions/portalhome.jpg",
                link: null,
              },
              {
                icon: Image,
                title: "Nextmotion 3D",
                description:
                  "realistic and interactive morphological simulations",
                image: "/solutions/nm3Dhome.jpg",
                link: "/3d",
              },
              {
                icon: Video,
                title: "Nextmotion Revolution",
                description:
                  "standardized and dynamic videos for your patients",
                image: "/solutions/nmrevolutionhome.jpg",
                link: "/revolution",
              },
            ].map((module, index) => {
              const content = (
                <>
                  <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-6 overflow-hidden">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-base mb-2 text-center">
                    {module.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                    {module.description}
                  </p>
                </>
              );

              return module.link ? (
                <Link
                  key={index}
                  href={module.link}
                  className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group block"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300"
                >
                  {content}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/contact_form"
              className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Request a demo
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {t("ai.title")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-7xl mx-auto">
            {[
              { icon: Bot, index: 0 },
              { icon: Workflow, index: 1 },
              { icon: Plug, index: 2 },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.index}
                  className="p-8 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1650EF] to-[#1E40AF] rounded-2xl flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 text-center">
                    {t(`ai.items.${item.index}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-base leading-relaxed text-center">
                    {t(`ai.items.${item.index}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/ai-copilot">
              <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                {t("ai.cta")}
              </button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {t("results.title")}
            </h2>
          </div>

          <div className="grid gap-12 sm:grid-cols-3">
            {[0, 1, 2].map((index) => {
              const icons = [TrendingUp, Heart, Star];
              const Icon = icons[index];
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#059669]" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-[#0F172A] mb-2">
                    {t(`results.items.${index}.value`)}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {t(`results.items.${index}.label`)}
                  </p>
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
              They trust us
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel
              testimonials={[
                {
                  quote:
                    "Nextmotion has transformed our practice. The before/after photo management is exceptional and our patients love the 3D simulations.",
                  author: "Dr. Sophie Martin",
                  role: "Aesthetic Surgeon, Paris",
                  rating: 5,
                },
                {
                  quote:
                    "The AI assistant saves us hours every week. The automated reports are accurate and our workflow has never been smoother.",
                  author: "Dr. Jean Dupont",
                  role: "Aesthetic Doctor, Lyon",
                  rating: 5,
                },
                {
                  quote:
                    "Our patient satisfaction has increased significantly since we started using Nextmotion. The patient portal is a game-changer.",
                  author: "Dr. Marie Laurent",
                  role: "Medical Spa Director, Bordeaux",
                  rating: 5,
                },
                {
                  quote:
                    "The Doctolib integration and calendar synchronization have eliminated double bookings. Our team is much more efficient.",
                  author: "Dr. Pierre Rousseau",
                  role: "Clinic Manager, Nice",
                  rating: 5,
                },
              ]}
              autoPlay={true}
              interval={6000}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t("pricing.title")}
            </h2>
            <p className="text-xl text-gray-700">
              {t("pricing.subtitle")}{" "}
              <span className="text-[#1650EF] font-semibold">
                {t("pricing.subtitleHighlight1")}
              </span>
              {t("pricing.subtitleMiddle")}{" "}
              <span className="text-[#1650EF] font-semibold">
                {t("pricing.subtitleHighlight2")}
              </span>
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

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] text-center sm:text-4xl mb-12">
              {t("faq.title")}
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {[0, 1, 2, 3, 4].map((index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-xl px-6 border-none hover:bg-gray-100 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#0F172A] hover:no-underline py-5">
                    {t(`faq.items.${index}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5">
                    {t(`faq.items.${index}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <CTA
        title={t("finalCta.title")}
        subtitle={t("finalCta.subtitle")}
        buttonText={t("finalCta.cta")}
        secondaryButtonText={t("finalCta.ctaSecondary")}
      />
      <OrganizationSchema />
      <SoftwareApplicationSchema />
    </>
  );
}
