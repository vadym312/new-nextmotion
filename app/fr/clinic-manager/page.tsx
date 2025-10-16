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

export default function ClinicManagerPageFR() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                Manager de clinique
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                Gérez votre clinique en toute confiance
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Rationalisez les opérations, optimisez les flux de travail et
                développez votre cabinet esthétique avec des outils de gestion
                puissants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/fr/contact_form"
                  className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Demander une démo
                </Link>
                <Link href="/fr/pricing">
                  <button className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                    En savoir plus
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative lg:h-full">
              <div className="w-full lg:w-auto lg:h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/youare/youare.jpg"
                  alt="Manager de Clinique"
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
              Défis clés de la gestion
            </h2>
            <p className="text-lg text-gray-600">
              Gérer une clinique implique de jongler avec de multiples
              responsabilités
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Coordination d'équipe",
                desc: "Gérer les horaires et responsabilités",
              },
              {
                icon: Calendar,
                title: "Flux de rendez-vous",
                desc: "Optimiser réservations et capacité",
              },
              {
                icon: FileText,
                title: "Gestion des données",
                desc: "Organiser les dossiers patients",
              },
              {
                icon: BarChart3,
                title: "Insights business",
                desc: "Comprendre les performances",
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
              Outils de gestion puissants
            </h2>
            <p className="text-lg text-gray-600">
              Tout ce dont vous avez besoin pour gérer votre clinique
              efficacement
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-items-center">
            {[
              {
                icon: BarChart3,
                title: "Tableau de bord Analytics",
                desc: "Insights en temps réel sur les performances",
              },
              {
                icon: Users,
                title: "Gestion d'équipe",
                desc: "Coordonner horaires et rôles du personnel",
              },
              {
                icon: Calendar,
                title: "Planification intelligente",
                desc: "Optimiser rendez-vous et capacité",
              },
              {
                icon: FileText,
                title: "Contrôle documentaire",
                desc: "Dossiers patients centralisés",
              },
              {
                icon: TrendingUp,
                title: "Outils de croissance",
                desc: "Suivre et améliorer les indicateurs clés",
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
              Des outils puissants optimisant vos opérations
            </h2>
            <p className="text-lg text-gray-600">
              Plateforme de gestion complète pour des opérations cliniques
              efficaces et des insights précis
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            {[
              {
                name: "Tableau Analytics",
                desc: "Suivi KPI en temps réel",
                icon: BarChart3,
                gradient: "from-blue-50 to-blue-100",
                iconColor: "text-blue-500",
              },
              {
                name: "Planning Personnel",
                desc: "Gestion équipe automatisée",
                icon: Calendar,
                gradient: "from-purple-50 to-purple-100",
                iconColor: "text-purple-500",
              },
              {
                name: "Rapports Financiers",
                desc: "Suivi revenus & dépenses",
                icon: DollarSign,
                gradient: "from-green-50 to-green-100",
                iconColor: "text-green-500",
              },
              {
                name: "Contrôle Inventaire",
                desc: "Système gestion stocks",
                icon: Package,
                gradient: "from-orange-50 to-orange-100",
                iconColor: "text-orange-500",
              },
              {
                name: "Métriques Performance",
                desc: "Insights opérationnels",
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
              Ils nous font confiance
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel
              testimonials={[
                {
                  quote:
                    "Le tableau de bord de gestion me donne des informations en temps réel sur chaque aspect de notre clinique. Je peux prendre des décisions éclairées instantanément.",
                  author: "Jessica Thompson",
                  role: "Manager de Clinique, Miami",
                  rating: 5,
                },
                {
                  quote:
                    "La planification et coordination du personnel n'ont jamais été aussi faciles. Le système gère les conflits automatiquement et tient tout le monde informé.",
                  author: "David Martinez",
                  role: "Responsable Opérations, Los Angeles",
                  rating: 5,
                },
                {
                  quote:
                    "Les outils de reporting sont complets mais faciles à utiliser. Je peux suivre les KPI, les revenus et la satisfaction des patients au même endroit.",
                  author: "Rachel Green",
                  role: "Administratrice de Cabinet, Boston",
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
              Prêt à transformer votre gestion de clinique ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Rejoignez des centaines de cliniques esthétiques qui optimisent
              leurs opérations avec Nextmotion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fr/contact_form"
                className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl"
              >
                Demander une démo
              </Link>
              <Link href="/fr/pricing">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
