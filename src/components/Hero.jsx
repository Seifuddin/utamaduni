"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/childsupport.webp",
    title: "Children's Welfare",
    subtitle: "Donations to children's homes and educational support for orphans",
    button: "Learn More",
  },
  {
    id: 2,
    image: "/images/communityoutreach.jpg",
    title: "Community Outreach",
    subtitle:
      "Food distribution, health awareness to people living with disabilities and HIV, and empowerment projects",
    button: "Learn More",
  },
  {
    id: 3,
    image: "/images/culturalpreservation.jpg",
    title: "Cultural Preservation",
    subtitle:
      "Incorporating traditional values, arts, and practices into charity work",
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
    subtitle:
      "Collaborating with like-minded individuals and organizations to extend our impact",
    button: "Learn More",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          key={slides[current].title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg"
        >
          {slides[current].title}
        </motion.h1>
        <motion.p
          key={slides[current].subtitle}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl"
        >
          {slides[current].subtitle}
        </motion.p>
        <motion.button
          key={slides[current].button}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 px-8 py-3 font-serif text-lg font-bold rounded-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-red-700 hover:to-pink-700 shadow-xl transition"
        >
          {slides[current].button}
        </motion.button>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-pink-600 scale-125 shadow-md"
                : "bg-gray-400 hover:bg-pink-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
