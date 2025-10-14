'use client';

import { useEffect, useRef } from 'react';
import { Container } from './Container';

interface LogoCarouselProps {
  title: string;
  subtitle: string;
  logos: string[];
}

export function LogoCarousel({ title, subtitle, logos }: LogoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            {subtitle}
          </p>
        </div>
      </Container>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        <div
          ref={scrollRef}
          className="flex gap-16 overflow-x-hidden whitespace-nowrap"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedLogos.map((logo, index) => {
            let logoPath;
            if (logo === 'Lutétia Paris') {
              logoPath = '/carousel/lutetia.svg';
            } else if (logo === 'Nasser Majed') {
              logoPath = '/carousel/apogee.svg';
            } else if (logo === 'Clinique Champs-Élysées') {
              logoPath = '/carousel/dorow.svg';
            } else {
              logoPath = `/logos/${logo.toLowerCase().replace(/\s+/g, '-')}.svg`;
            }

            return (
              <div
                key={index}
                className="inline-flex items-center justify-center px-8 flex-shrink-0"
              >
                <img
                  src={logoPath}
                  alt={logo}
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
