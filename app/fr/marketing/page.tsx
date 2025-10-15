import { Container } from '@/components/layout/Container';
import { TestimonialsCarousel } from '@/components/layout/TestimonialsCarousel';
import Image from 'next/image';
import Link from 'next/link';
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
} from 'lucide-react';

export default function MarketingPageFR() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Megaphone className="w-4 h-4" />
                Responsable Marketing
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                Développez votre cabinet esthétique avec un marketing intelligent
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Convertissez plus de prospects, fidélisez plus de patients et mettez en valeur vos résultats avec des outils marketing puissants conçus pour les cliniques esthétiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/fr/contact_form" className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  Demander une démo
                </Link>
                <button className="px-8 py-4 bg-white border-2 border-[#1650EF] text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="relative lg:h-full">
              <div className="w-full lg:w-auto lg:h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/youare/youare.jpg"
                  alt="Professionnel Marketing"
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
              Défis marketing en médecine esthétique
            </h2>
            <p className="text-lg text-gray-600">
              Se démarquer sur un marché concurrentiel et convertir plus de patients
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[
              { icon: Target, title: 'Génération de leads', desc: 'Attirer des patients potentiels qualifiés' },
              { icon: Share2, title: 'Création de contenu', desc: 'Créer du contenu avant/après engageant' },
              { icon: MessageSquare, title: 'Engagement patient', desc: 'Construire confiance et fidélité' },
              { icon: BarChart3, title: 'Suivi ROI', desc: 'Mesurer l\'efficacité marketing' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-[#FFF8F0] border border-[#FFE4CC] rounded-2xl"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#FFE8D1] rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#EA580C]" strokeWidth={2} />
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
              Outils marketing qui convertissent
            </h2>
            <p className="text-lg text-gray-600">
              Tout ce dont vous avez besoin pour attirer et fidéliser plus de patients
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-items-center">
            {[
              { icon: Sparkles, title: 'NM Revolution', desc: 'Créez automatiquement des vidéos avant/après dynamiques' },
              { icon: Share2, title: 'Export réseaux sociaux', desc: 'Partagez les résultats sur les plateformes sociales' },
              { icon: Users, title: 'Recommandations patients', desc: 'Transformez les patients satisfaits en ambassadeurs' },
              { icon: BarChart3, title: 'Analytics', desc: 'Suivez les performances des campagnes et le ROI' },
              { icon: MessageSquare, title: 'Portail patient', desc: 'Engagez les patients dans leur parcours' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 w-full ${
                    index === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
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
              Des outils puissants amplifiant votre portée
            </h2>
            <p className="text-lg text-gray-600">
              Plateforme marketing conçue pour mettre en valeur vos résultats et développer votre pratique
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            {[
              {
                name: 'Galerie Avant/Après',
                desc: 'Présentez vos meilleurs résultats',
                icon: ImageIcon,
                gradient: 'from-purple-50 to-purple-100',
                iconColor: 'text-purple-500'
              },
              {
                name: 'Outils Réseaux Sociaux',
                desc: 'Partage contenu automatisé',
                icon: Share2,
                gradient: 'from-blue-50 to-blue-100',
                iconColor: 'text-blue-500'
              },
              {
                name: 'Générateur Vidéo',
                desc: 'Histoires patients dynamiques',
                icon: Video,
                gradient: 'from-red-50 to-red-100',
                iconColor: 'text-red-500'
              },
              {
                name: 'Suivi Campagnes',
                desc: 'Analyses ROI & conversion',
                icon: TrendingUpIcon,
                gradient: 'from-green-50 to-green-100',
                iconColor: 'text-green-500'
              },
              {
                name: 'Avis Patients',
                desc: 'Gestion réputation',
                icon: Star,
                gradient: 'from-amber-50 to-amber-100',
                iconColor: 'text-amber-500'
              }
            ].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`relative aspect-video bg-gradient-to-br ${tool.gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className={`w-16 h-16 ${tool.iconColor}`} strokeWidth={1.5} />
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
                  quote: "Les outils marketing ont transformé notre façon d'attirer de nouveaux patients. Notre engagement sur les réseaux sociaux a triplé depuis que nous partageons les résultats avec Nextmotion.",
                  author: "Amanda Foster",
                  role: "Directrice Marketing, San Francisco",
                  rating: 5,
                },
                {
                  quote: "Le générateur de vidéos avant/après est phénoménal. Nous créons du contenu marketing professionnel en minutes, pas en heures. Notre taux de conversion n'a jamais été aussi élevé.",
                  author: "Kevin Brown",
                  role: "Responsable Marketing Digital, Toronto",
                  rating: 5,
                },
                {
                  quote: "Les recommandations patients ont augmenté de 40% depuis l'implémentation des fonctionnalités de partage automatisé. Les analyses nous aident à comprendre ce qui résonne avec notre audience.",
                  author: "Lisa Chen",
                  role: "Spécialiste Marketing, Sydney",
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
              Prêt à booster votre marketing ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Rejoignez les cliniques esthétiques qui utilisent Nextmotion pour attirer plus de patients et développer leur cabinet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact_form" className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                Demander une démo
              </Link>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                En savoir plus
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
