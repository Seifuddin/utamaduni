"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/childrenwelfare.webp",
    title: "Children's Welfare",
    subtitle: "Donations to children's homes and educational support for orphans",
    button: "Learn More",
  },
  {
    id: 2,
    image: "/images/communityoutreach.jpg",
    title: "Community Outreach",
    subtitle: "Food distribution, health awareness to people living with disabilities and HIV, and empowerment projects",
    button: "Learn More",
  },
  {
    id: 3,
    image: "/images/culturalpreservation.jpg",
    title: "Cultural Preservation",
    subtitle: "Incorporating traditional values, arts, and practices into charity work",
    button: "Learn More",
  },
  {
    id: 4,
    image: "/images/housekeepingprogram.jpeg",
    title: "Housekeeping Programmes",
    subtitle: "Supporting struggling households with essential items and skills",
    button: "Learn More",
  },
  {
    id: 5,
    image: "/images/partnershipss.jpg",
    title: "Partnerships",
    subtitle: "Collaborating with like-minded individuals and organizations to extend our impact",
    button: "Learn More",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative h-[90vh]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl font-serif md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
              <button className="px-6 py-3 font-serif font-bold bg-pink-600 hover:bg-red-700 rounded-2xl shadow-lg transition">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-pink-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
