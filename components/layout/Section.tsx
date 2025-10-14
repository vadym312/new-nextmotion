import { ReactNode } from 'react';
import { Container } from './Container';
import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  image?: ReactNode;
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'gray';
}

export function Section({
  title,
  subtitle,
  children,
  image,
  imagePosition = 'right',
  background = 'white',
}: SectionProps) {
  return (
    <section
      className={cn(
        'py-16 sm:py-24',
        background === 'gray' ? 'bg-gray-50' : 'bg-white'
      )}
    >
      <Container>
        <div
          className={cn(
            'grid gap-12 lg:grid-cols-2 lg:gap-16 items-center',
            imagePosition === 'left' && 'lg:grid-flow-dense'
          )}
        >
          <div className={cn(imagePosition === 'left' && 'lg:col-start-2')}>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {image && (
            <div
              className={cn(
                'relative',
                imagePosition === 'left' && 'lg:col-start-1'
              )}
            >
              {image}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
