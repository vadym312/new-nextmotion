'use client';

import { useState, useEffect } from 'react';

const images = [
  { id: 1, src: '/revolution/revolutioncarousel1.jpeg', alt: 'Nextmotion Revolution - Vue 1' },
  { id: 2, src: '/revolution/revolutioncarousel2.jpg', alt: 'Nextmotion Revolution - Vue 2' },
  { id: 3, src: '/revolution/revolutioncarousel3.jpg', alt: 'Nextmotion Revolution - Vue 3' },
  { id: 4, src: '/revolution/revolutioncarousel4.jpg', alt: 'Nextmotion Revolution - Vue 4' },
];

export function RevolutionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-video w-full max-w-[72rem] mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#0F172A] w-10'
                : 'bg-gray-400 hover:bg-gray-500 w-2'
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
