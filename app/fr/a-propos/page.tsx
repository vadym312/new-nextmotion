import { createTranslator } from "@/utils/i18n";
import { Container } from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { Heart, Lightbulb, Target, Users, Sparkles } from "lucide-react";

export default function AProposPage() {
  const t = createTranslator("fr");

  const timelineYears = t("about.timeline.years", {
    returnObjects: true,
  }) as Array<{
    year: string;
    desc: string;
  }>;

  const values = t("about.values.items", { returnObjects: true }) as Array<{
    name: string;
    desc: string;
  }>;

  const teamMedical = t("about.teamMedical.members", {
    returnObjects: true,
  }) as Array<{
    name: string;
    role: string;
    desc?: string;
  }>;

  const teamOperational = t("about.teamOperational.members", {
    returnObjects: true,
  }) as Array<{
    name: string;
    role: string;
    desc?: string;
  }>;

  const medicalPhotos: Record<string, string> = {
    "Per Heden": "/about/perheden.jpg",
    "Constantin Stan": "/about/constantinstan.jpg",
    "Jean-Paul Meningaud": "/about/jeanpaulmeningaud.jpg",
    "Dr Nabila Azib": "/about/nabilaazib.jpg",
    "Dr Diala Haykal": "/about/diala haykal.jpg",
  };

  const operationalPhotos: Record<string, string> = {
    "Dr Emmanuel Elard": "/about/emmanuelelard.jpg",
    Yasmina: "/about/yasmina.jpeg",
    Santiago: "/about/santiago.jpeg",
    Romain: "/about/romain.jpeg",
    Loan: "/about/loan.jpg",
    Théo: "/about/theo.jpg",
    Jérôme: "/about/jerome.jpg",
    Yannig: "/about/yannig.jpg",
  };

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t("about.hero.subtitle")}
            </p>
            <Link href="/contact_form">
              <button className="px-8 py-4 bg-[#1650EF] text-white rounded-xl hover:bg-[#1650EF]/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                {t("about.hero.cta")}
              </button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/about/nmteam.jpg"
                  alt="Nextmotion Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("about.intro.paragraph")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-12 text-center">
              {t("about.timeline.title")}
            </h2>
            <div className="space-y-8">
              {timelineYears.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-bold text-[#1650EF]">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-px h-full bg-gray-300 relative top-4"></div>
                  <div className="flex-1 pb-8">
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-6">
              {t("about.mission.title")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("about.mission.paragraph")}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-12 text-center">
              {t("about.values.title")}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const icons = [Lightbulb, Target, Sparkles, Heart];
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#1650EF] to-[#1E40AF] rounded-2xl flex items-center justify-center shadow-md">
                        <Icon
                          className="w-7 h-7 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                    <h3 className="font-bold text-[#0F172A] text-lg mb-3 text-center">
                      {value.name}
                    </h3>
                    <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                      {value.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-12 text-center">
              {t("about.teamMedical.title")}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMedical.map((member, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100">
                      {medicalPhotos[member.name] ? (
                        <Image
                          src={medicalPhotos[member.name]}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Users className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-[#1650EF] text-sm font-semibold mb-3 text-center">
                    {member.role}
                  </p>
                  {member.desc && (
                    <p className="text-[#4B5563] text-sm leading-relaxed text-center">
                      {member.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-12 text-center">
              {t("about.teamOperational.title")}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamOperational.map((member, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                      {operationalPhotos[member.name] ? (
                        <Image
                          src={operationalPhotos[member.name]}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-[#1650EF]" />
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-base mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-[#1650EF] text-xs font-medium mb-2 text-center">
                    {member.role}
                  </p>
                  {member.desc && (
                    <p className="text-[#4B5563] text-xs leading-relaxed text-center">
                      {member.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mb-4">
              {t("about.partners.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              {t("about.partners.subtitle")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {[
                { name: "AMWC", logo: "/about/amwc.jpeg" },
                { name: "IMCAS", logo: "/about/IMCAS.jpg" },
                { name: "Vivacy", logo: "/about/vivacy.jpg" },
                { name: "Merz", logo: "/about/merz.jpeg" },
                { name: "Fillmed", logo: "/about/fillmed.jpg" },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-full h-16 flex items-center justify-center relative">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={64}
                      className="object-contain max-h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1650EF] to-[#1E40AF]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              {t("about.cta.title")}
            </h2>
            <Link href="/contact_form">
              <button className="px-8 py-4 bg-white text-[#1650EF] rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-xl hover:shadow-2xl">
                {t("about.cta.cta")}
              </button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
