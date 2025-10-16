import { Container } from "@/components/layout/Container";
import { TestimonialsCarousel } from "@/components/layout/TestimonialsCarousel";
import Image from "next/image";
import Link from "next/link";
import {
  Megaphone,
  Share2,
  Target,
  Users,
  MessageSquare,
  BarChart3,
  Sparkles,
  ImageIcon,
  Video,
  TrendingUpIcon,
  Star,
} from "lucide-react";

export default function MarketingPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Megaphone className="w-4 h-4" />
                Marketing Manager
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                Grow Your Aesthetic Practice with Smart Marketing
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Convert more leads, retain more patients, and showcase your
                results with powerful marketing tools built for aesthetic
                clinics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact_form"
                  className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Request a Demo
                </Link>
                <Link href="/starter">
                  <button className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative lg:h-full">
              <div className="w-full lg:w-auto lg:h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/youare/youare.jpg"
                  alt="Marketing Professional"
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
              Marketing Challenges in Aesthetic Medicine
            </h2>
            <p className="text-lg text-gray-600">
              Stand out in a competitive market and convert more patients
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[
              {
                icon: Target,
                title: "Lead Generation",
                desc: "Attracting qualified potential patients",
              },
              {
                icon: Share2,
                title: "Content Creation",
                desc: "Creating engaging before/after content",
              },
              {
                icon: MessageSquare,
                title: "Patient Engagement",
                desc: "Building trust and loyalty",
              },
              {
                icon: BarChart3,
                title: "ROI Tracking",
                desc: "Measuring marketing effectiveness",
              },
            ].map((item, index) => {
              const Icon = item.icon;
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
                    {item.title}
                  </h3>
                  <p className="text-[#374151] text-sm text-center leading-relaxed">
                    {item.desc}
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
              Marketing Tools That Convert
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to attract and retain more patients
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-items-center">
            {[
              {
                icon: Sparkles,
                title: "NM Revolution",
                desc: "Create dynamic before/after videos automatically",
              },
              {
                icon: Share2,
                title: "Social Media Export",
                desc: "Share results directly to social platforms",
              },
              {
                icon: Users,
                title: "Patient Referrals",
                desc: "Turn satisfied patients into advocates",
              },
              {
                icon: BarChart3,
                title: "Analytics",
                desc: "Track campaign performance and ROI",
              },
              {
                icon: MessageSquare,
                title: "Patient Portal",
                desc: "Engage patients with their journey",
              },
            ].map((item, index) => {
              const Icon = item.icon;
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
                    {item.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                    {item.desc}
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
              Powerful tools amplifying your reach
            </h2>
            <p className="text-lg text-gray-600">
              Marketing platform designed to showcase results and grow your
              practice
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            {[
              {
                name: "Before/After Gallery",
                desc: "Showcase your best results",
                icon: ImageIcon,
                gradient: "from-purple-50 to-purple-100",
                iconColor: "text-purple-500",
              },
              {
                name: "Social Media Tools",
                desc: "Automated content sharing",
                icon: Share2,
                gradient: "from-blue-50 to-blue-100",
                iconColor: "text-blue-500",
              },
              {
                name: "Video Generator",
                desc: "Dynamic patient stories",
                icon: Video,
                gradient: "from-red-50 to-red-100",
                iconColor: "text-red-500",
              },
              {
                name: "Campaign Tracking",
                desc: "ROI & conversion analytics",
                icon: TrendingUpIcon,
                gradient: "from-green-50 to-green-100",
                iconColor: "text-green-500",
              },
              {
                name: "Patient Reviews",
                desc: "Reputation management",
                icon: Star,
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
              They trust us
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel
              testimonials={[
                {
                  quote:
                    "The marketing tools have transformed how we attract new patients. Our social media engagement has tripled since we started sharing results with Nextmotion.",
                  author: "Amanda Foster",
                  role: "Marketing Director, San Francisco",
                  rating: 5,
                },
                {
                  quote:
                    "The before/after video generator is phenomenal. We create professional marketing content in minutes, not hours. Our conversion rate has never been higher.",
                  author: "Kevin Brown",
                  role: "Digital Marketing Manager, Toronto",
                  rating: 5,
                },
                {
                  quote:
                    "Patient referrals have increased 40% since implementing the automated sharing features. The analytics help us understand what resonates with our audience.",
                  author: "Lisa Chen",
                  role: "Marketing Specialist, Sydney",
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
              Ready to Supercharge Your Marketing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join aesthetic clinics using Nextmotion to attract more patients
              and grow their practice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact_form"
                className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl"
              >
                Request a Demo
              </Link>
              <Link href="/pricing">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
