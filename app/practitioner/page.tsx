import { createTranslator } from "@/utils/i18n";
import { Container } from "@/components/layout/Container";
import { TestimonialsCarousel } from "@/components/layout/TestimonialsCarousel";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Clock,
  FileText,
  Eye,
  MessageCircle,
  Brain,
  Camera,
  FolderHeart,
  Share2,
  Sparkles,
  Bot,
  Video,
  Calendar,
} from "lucide-react";

export default function PractitionerPage() {
  const t = createTranslator("en");

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Stethoscope className="w-4 h-4" />
                Aesthetic Practitioner
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                {t("practitioner.hero.title")}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t("practitioner.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact_form">
                  <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                    {t("practitioner.hero.cta1")}
                  </button>
                </Link>
                <Link href="/starter">
                  <button className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                    {t("practitioner.hero.cta2")}
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative lg:h-full">
              <div className="w-full lg:w-auto lg:h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/youare/youare.jpg"
                  alt="Aesthetic Practitioner"
                  width={420}
                  height={420}
                  className="w-full h-full object-cover"
                  priority
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
              {t("practitioner.challenges.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("practitioner.challenges.subtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[0, 1, 2, 3].map((index) => {
              const icons = [Clock, FileText, Eye, MessageCircle];
              const Icon = icons[index];
              const itemKey = `item${index + 1}` as
                | "item1"
                | "item2"
                | "item3"
                | "item4";
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
                  <h3 className="font-bold text-[#0F172A] text-base mb-2 text-center">
                    {t(`practitioner.challenges.${itemKey}.title`)}
                  </h3>
                  <p className="text-[#374151] text-sm text-center leading-relaxed">
                    {t(`practitioner.challenges.${itemKey}.desc`)}
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
              {t("practitioner.solutions.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("practitioner.solutions.subtitle")}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-items-center">
            {[0, 1, 2, 3, 4].map((index) => {
              const icons = [Brain, Camera, FolderHeart, Share2, Sparkles];
              const Icon = icons[index];
              const itemKey = `item${index + 1}` as
                | "item1"
                | "item2"
                | "item3"
                | "item4"
                | "item5";
              return (
                <div
                  key={index}
                  className={`p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 w-full ${
                    index === 4
                      ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                      : ""
                  }`}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1650EF] to-[#1E40AF] rounded-2xl flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-3 text-center">
                    {t(`practitioner.solutions.${itemKey}.title`)}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                    {t(`practitioner.solutions.${itemKey}.desc`)}
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
              {t("practitioner.data.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("practitioner.data.subtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            {[
              {
                name: "NM Capture",
                desc: "Standardized before/after photos",
                icon: Camera,
                gradient: "from-blue-50 to-blue-100",
                iconColor: "text-blue-500",
              },
              {
                name: "NM Consult",
                desc: "Smart patient records",
                icon: FileText,
                gradient: "from-emerald-50 to-emerald-100",
                iconColor: "text-emerald-500",
              },
              {
                name: "Copilot AI",
                desc: "Conversational AI assistant",
                icon: Bot,
                gradient: "from-purple-50 to-purple-100",
                iconColor: "text-purple-500",
              },
              {
                name: "NM Revolution",
                desc: "Dynamic patient videos",
                icon: Video,
                gradient: "from-red-50 to-red-100",
                iconColor: "text-red-500",
              },
              {
                name: "NM Agenda",
                desc: "Doctolib synchronization",
                icon: Calendar,
                gradient: "from-amber-50 to-amber-100",
                iconColor: "text-amber-500",
              },
            ].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div
                    className={`relative aspect-video bg-gradient-to-br ${tool.gradient}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        className={`w-16 h-16 ${tool.iconColor}`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#0F172A] text-base mb-2 text-center">
                      {tool.name}
                    </h3>
                    <p className="text-[#4B5563] text-sm text-center leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
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
              {t("practitioner.testimonial.title")}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel
              testimonials={[
                {
                  quote:
                    "Nextmotion has streamlined my entire practice. The AI-powered consultation notes save me 2 hours daily, and patients love the 3D simulations.",
                  author: "Dr. Emma Wilson",
                  role: "Aesthetic Surgeon, London",
                  rating: 5,
                },
                {
                  quote:
                    "The before/after photo management is exceptional. Everything is organized, standardized, and easy to share. My marketing has never been better.",
                  author: "Dr. Michael Chen",
                  role: "Cosmetic Doctor, Singapore",
                  rating: 5,
                },
                {
                  quote:
                    "Integration with my existing workflow was seamless. The patient portal has significantly improved engagement and satisfaction scores.",
                  author: "Dr. Sarah Johnson",
                  role: "Dermatologist, New York",
                  rating: 5,
                },
              ]}
              autoPlay={true}
              interval={6000}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1650EF] to-[#1E40AF]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              {t("practitioner.cta.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t("practitioner.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact_form">
                <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                  {t("practitioner.cta.primary")}
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                  {t("practitioner.cta.secondary")}
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
