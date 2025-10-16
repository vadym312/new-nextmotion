import { ReactNode } from "react";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  locale: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  tertiaryCta?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onTertiaryClick?: () => void;
  image?: ReactNode;
}

export function Hero({
  locale,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  onPrimaryClick,
  onSecondaryClick,
  onTertiaryClick,
  image,
}: HeroProps) {

  const currentLocale = locale === 'fr' ? '/fr' : ''
  return (
    <section className="relative bg-white pt-24 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`${currentLocale}/contact_form`}>
              <Button
                onClick={onPrimaryClick}
                size="lg"
                className="h-auto w-full sm:w-auto bg-[#1650EF] hover:bg-[#1650EF]/90 text-white shadow-lg px-8 py-3 text-base font-semibold"
              >
                {primaryCta}
              </Button>
            </Link>
            {tertiaryCta && (
              <Link href={`${currentLocale}/starter`}>
                <Button
                  onClick={onTertiaryClick}
                  size="lg"
                  className="h-auto w-full sm:w-auto bg-white border-2 border-[#1650EF] text-[#1650EF] hover:bg-gray-50 shadow-lg px-8 py-3 text-base font-semibold"
                >
                  {tertiaryCta}
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          {image || (
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5ppBRo2iFYg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
