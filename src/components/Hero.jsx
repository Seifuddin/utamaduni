"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  ArrowRight,
  Sparkles,
  Globe,
  Users,
  GraduationCap
} from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/utamaduni at mathare/_DSC8782.jpg",
    title: "Children's Welfare",
    subtitle: "Donations to children's homes and educational support for orphans",
    button: "Support Program",
    slug: "children",
    icon: GraduationCap,
    stats: "150+ Children Supported",
  },
  {
    id: 2,
    image: "/images/how_it_went_down/_DSC7719.jpg",
    title: "Community Outreach",
    subtitle: "Food distribution, health awareness to people living with disabilities and HIV, and empowerment projects",
    button: "Get Involved",
    slug: "community",
    icon: Users,
    stats: "500+ Lives Impacted",
  },
  {
    id: 3,
    image: "/images/how_it_went_down/_DSC7708.jpg",
    title: "Cultural Preservation",
    subtitle: "Incorporating traditional values, arts, and practices into charity work",
    button: "Get Involved",
    slug: "culture",
    icon: Globe,
    stats: "10+ Communities",
  },
  {
    id: 4,
    image: "/images/how_it_went_down/_DSC7803.jpg",
    title: "Housekeeping Programmes",
    subtitle: "Supporting struggling households with essential items and skills",
    button: "Support a Family",
    slug: "housekeeping",
    icon: Heart,
    stats: "200+ Families Helped",
  },
  {
    id: 5,
    image: "/images/WhatsApp Image 2025-10-04 at 23.04.29.jpeg",
    title: "Partnerships",
    subtitle: "Collaborating with like-minded individuals and organizations to extend our impact",
    button: "Partner With Us",
    slug: "partners",
    icon: Sparkles,
    stats: "15+ Partners",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleSlideChange = useCallback((newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(newIndex);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setDirection(1);
    handleSlideChange((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [handleSlideChange, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setDirection(-1);
    handleSlideChange((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [handleSlideChange, isTransitioning]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const currentSlide = slides[current];
  const Icon = currentSlide.icon;

  return (
    <section 
      className="relative w-full h-[85vh] md:h-[80vh] lg:h-[75vh] overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-transform duration-[10000ms] ${isTransitioning ? 'scale-105' : 'scale-100'}`}>
          <Image
            key={currentSlide.id}
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-purple-900/40 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }} />
      </div>

      {/* Animated Particles / Glow Effects - Made smaller */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />

      {/* Main Content - Reduced spacing */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            {/* Slide Number - Smaller */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-pink-400 font-mono text-xs font-light tracking-widest">
                {String(current + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 max-w-20 h-px bg-gradient-to-r from-pink-400 to-transparent" />
              <span className="text-white/30 font-mono text-[10px] tracking-wider">
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Title with Animation - Smaller text */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 ${
              isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
            }`}>
              {currentSlide.title}
            </h1>

            {/* Subtitle - Smaller */}
            <p className={`mt-4 text-base sm:text-lg md:text-xl text-gray-200/90 max-w-2xl leading-relaxed transition-all duration-700 delay-100 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              {currentSlide.subtitle}
            </p>

            {/* Stats Badge - Smaller */}
            <div className={`mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 transition-all duration-700 delay-150 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <Icon className="w-3.5 h-3.5 text-pink-400" />
              <span className="text-xs text-white/80 font-light tracking-wide">{currentSlide.stats}</span>
            </div>

            {/* CTA Buttons - Smaller */}
            <div className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 delay-200 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <Link
                href={currentSlide.slug === "partners" ? "/partners" : `/programs/${currentSlide.slug}`}
                className="group relative px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium rounded -full shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 flex items-center gap-2 overflow-hidden text-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {currentSlide.button}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/donate"
                className="px-8 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white font-medium rounded -full transition-all duration-300 flex items-center gap-2 group text-sm"
              >
                <Heart className="w-4 h-4 group-hover:text-pink-400 transition-colors" />
                Donate Now
              </Link>
            </div>

            {/* Trust Indicators - Smaller */}
            <div className={`mt-8 flex items-center gap-6 text-[10px] text-white/40 font-light tracking-wider transition-all duration-700 delay-300 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-pink-400" />
                100% Transparent
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                Verified Impact
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-purple-400" />
                Community Driven
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Smaller */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-white/60 group-hover:text-white transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-white/60 group-hover:text-white transition-colors" />
      </button>

      {/* Progress Bar - Smaller */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
        <div 
          className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-[6000ms] ease-linear"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Dot Indicators - Smaller */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => !isTransitioning && setCurrent(index)}
            className={`transition-all duration-500 rounded-full ${
              current === index
                ? "w-10 h-1 bg-gradient-to-r from-pink-400 to-blue-400"
                : "w-1.5 h-1 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}