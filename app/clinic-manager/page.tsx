import { Container } from "@/components/layout/Container";
import { TestimonialsCarousel } from "@/components/layout/TestimonialsCarousel";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Users,
  BarChart3,
  Calendar,
  FileText,
  TrendingUp,
  DollarSign,
  Package,
  Activity,
} from "lucide-react";

export default function ClinicManagerPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                Clinic Manager
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                Manage Your Clinic with Confidence
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Streamline operations, optimize workflows, and grow your
                aesthetic practice with powerful management tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact_form">
                  <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                    Request a Demo
                  </button>
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
                  alt="Clinic Manager"
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
              Key Management Challenges
            </h2>
            <p className="text-lg text-gray-600">
              Running a clinic involves juggling multiple responsibilities
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Staff Coordination",
                desc: "Managing team schedules and responsibilities",
              },
              {
                icon: Calendar,
                title: "Appointment Flow",
                desc: "Optimizing patient booking and capacity",
              },
              {
                icon: FileText,
                title: "Data Management",
                desc: "Keeping patient records organized",
              },
              {
                icon: BarChart3,
                title: "Business Insights",
                desc: "Understanding clinic performance",
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
              Powerful Management Tools
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to run your clinic efficiently
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-items-center">
            {[
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                desc: "Real-time insights into clinic performance",
              },
              {
                icon: Users,
                title: "Team Management",
                desc: "Coordinate staff schedules and roles",
              },
              {
                icon: Calendar,
                title: "Smart Scheduling",
                desc: "Optimize appointments and capacity",
              },
              {
                icon: FileText,
                title: "Document Control",
                desc: "Centralized patient records",
              },
              {
                icon: TrendingUp,
                title: "Growth Tools",
                desc: "Track and improve key metrics",
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
              Powerful tools optimizing your operations
            </h2>
            <p className="text-lg text-gray-600">
              Complete management platform for efficient clinic operations and
              insights
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            {[
              {
                name: "Analytics Dashboard",
                desc: "Real-time KPI tracking",
                icon: BarChart3,
                gradient: "from-blue-50 to-blue-100",
                iconColor: "text-blue-500",
              },
              {
                name: "Staff Scheduling",
                desc: "Automated team management",
                icon: Calendar,
                gradient: "from-purple-50 to-purple-100",
                iconColor: "text-purple-500",
              },
              {
                name: "Financial Reports",
                desc: "Revenue & expense tracking",
                icon: DollarSign,
                gradient: "from-green-50 to-green-100",
                iconColor: "text-green-500",
              },
              {
                name: "Inventory Control",
                desc: "Stock management system",
                icon: Package,
                gradient: "from-orange-50 to-orange-100",
                iconColor: "text-orange-500",
              },
              {
                name: "Performance Metrics",
                desc: "Operational insights",
                icon: Activity,
                gradient: "from-pink-50 to-pink-100",
                iconColor: "text-pink-500",
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
                    "The management dashboard gives me real-time insights into every aspect of our clinic. I can make informed decisions instantly.",
                  author: "Jessica Thompson",
                  role: "Clinic Manager, Miami",
                  rating: 5,
                },
                {
                  quote:
                    "Staff scheduling and coordination has never been easier. The system handles conflicts automatically and keeps everyone informed.",
                  author: "David Martinez",
                  role: "Operations Manager, Los Angeles",
                  rating: 5,
                },
                {
                  quote:
                    "The reporting tools are comprehensive yet easy to use. I can track KPIs, revenue, and patient satisfaction all in one place.",
                  author: "Rachel Green",
                  role: "Practice Administrator, Boston",
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
              Ready to Transform Your Clinic Management?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join hundreds of aesthetic clinics optimizing their operations
              with Nextmotion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact_form">
                <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                  Request a Demo
                </button>
              </Link>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                Learn more
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
