"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/utamaduni at mathare/_DSC8782.jpg",
    title: "Children's Welfare",
    subtitle:
      "Donations to children's homes and educational support for orphans",
    button: "Support Children",
    slug: "children",
  },
  {
    id: 2,
    image: "/images/how_it_went_down/_DSC7719.jpg",
    title: "Community Outreach",
    subtitle:
      "Food distribution, health awareness to people living with disabilities and HIV, and empowerment projects",
    button: "Get Involved",
    slug: "community",
  },
  {
    id: 3,
    image: "/images/how_it_went_down/_DSC7708.jpg",
    title: "Cultural Preservation",
    subtitle:
      "Incorporating traditional values, arts, and practices into charity work",
    button: "Get Involved",
    slug: "culture",
  },
  {
    id: 4,
    image: "/images/how_it_went_down/_DSC7803.jpg",
    title: "Housekeeping Programmes",
    subtitle:
      "Supporting struggling households with essential items and skills",
    button: "Support a Family",
    slug: "housekeeping",
  },
  {
    id: 5,
    image: "/images/WhatsApp Image 2025-10-04 at 23.04.29.jpeg",
    title: "Partnerships",
    subtitle:
      "Collaborating with like-minded individuals and organizations to extend our impact",
    button: "Partner With Us",
    slug: "partners",
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

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[70vh] md:h-[70vh] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <motion.h1
          key={slides[current].title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black font-extrabold drop-shadow-xl"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].subtitle}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed"
        >
          {slides[current].subtitle}
        </motion.p>

        {/* FIXED BUTTON + LINK */}
        <Link
          href={`${
            slides[current].slug === "partners"
              ? "/partners"
              : `/programs/${slides[current].slug}`
          }`}
        >
          <motion.button
            key={slides[current].button}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 px-10 py-2.5 fontserif md:text-lg font-semibold rounded-full 
                       bg-gradient-to-r from-pink-600 to-red-600 
                       hover:from-red-700 hover:to-pink-700 
                       shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {slides[current].button}
          </motion.button>
        </Link>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 
                   bg-white/20 hover:bg-white/40 text-white p-3 md:p-4 
                   rounded-full shadow-lg transition-all"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 
                   bg-white/20 hover:bg-white/40 text-white p-3 md:p-4 
                   rounded-full shadow-lg transition-all"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 flex justify-center w-full space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
