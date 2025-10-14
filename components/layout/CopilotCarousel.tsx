"use client";

import { useState, useEffect } from "react";

const images = [
  { id: 1, src: "/copilot/copilot1.jpg", alt: "Copilot AI demo 1" },
  { id: 2, src: "/copilot/copilot2.jpg", alt: "Copilot AI demo 2" },
  { id: 3, src: "/copilot/copilot3.jpg", alt: "Copilot AI demo 3" },
  { id: 4, src: "/copilot/copilot4.jpg", alt: "Copilot AI demo 4" },
];

export function CopilotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-video w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-600 w-8"
                : "bg-blue-300 hover:bg-blue-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
