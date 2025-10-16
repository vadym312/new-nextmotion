import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTAProps {
  locale: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  secondaryButtonText?: string;
  onButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

export function CTA({
  locale,
  title,
  subtitle,
  buttonText,
  secondaryButtonText,
  onButtonClick,
  onSecondaryButtonClick,
}: CTAProps) {

  const currentLocale = locale === 'fr' ? 'fr' : ''

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-[#2563EB] via-[#1650EF] to-[#1E40AF] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      <Container>
        <div className="text-center max-w-3xl mx-auto relative">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 text-lg text-white/95 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${currentLocale}/contact_form`}>
              <Button
                onClick={onButtonClick}
                size="lg"
                className="h-auto w-full sm:w-auto bg-white text-[#1650EF] hover:bg-gray-50 shadow-lg px-8 py-3 text-base font-semibold"
              >
                {buttonText}
              </Button>
            </Link>
            {secondaryButtonText && (
              <Link href={`/${currentLocale}/starter`}>
                <Button
                  onClick={onSecondaryButtonClick}
                  size="lg"
                  className="h-auto w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-lg px-8 py-3 text-base font-semibold"
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
