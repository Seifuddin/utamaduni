"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/utamaduni at mathare/_DSC8782.jpg",
    title: "Children's Welfare",
    subtitle:
      "Donations to children's homes and educational support for orphans",
    button: "Support Program",
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
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      
      {/* Slide Background */}
      <div className="absolute inset-0">
        <Image
          key={slides[current].id}
          src={slides[current].image}
          alt={slides[current].title}
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
      </div>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-xl">
          {slides[current].title}
        </h1>

        <p className="mt-4 text-lg mdtext-xl text-gray-200 max-w-2xl leading-relaxed">
          {slides[current].subtitle}
        </p>

        <Link
          href={`${
            slides[current].slug === "partners"
              ? "/partners"
              : `/programs/${slides[current].slug}`
          }`}
        >
          
        </Link>
        {/* Buttons */}
        <div className="mt-7 flex flex-colsm: flex-row gap-3 justify-center">

          <a
            href="/donate"
            className="
              px-7 py-2.5 rounded-full
              bg-white text-black text-sm font-medium
              hover:bg-pink-500 hover:text-white
              transition
            "
          >
            Donate
          </a>

          <a
            href="/contact"
            className="
              px-7 py-2.5 rounded-full
              border border-white/40 text-white/90 text-sm
              hover:border-white hover:text-white
              transition
            "
          >
            Contact Us
          </a>
        </div>
          {/* Micro trust line */}
        <p className="mt-6 text-[10px] text-white/40">
          Transparent • Verified impact • Community driven
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 
                   bg-white/20 hover:bg-white/40 text-pink-600 p-2 md:p-2 
                   rounded-full shadow-lg transition border border-white/30"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 
                   bg-white/20 hover:bg-white/40 text-pink-600 p-2 md:p-2 
                   rounded-full shadow-lg transition border border-white/30"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 flex justify-center w-full space-x-3">
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
