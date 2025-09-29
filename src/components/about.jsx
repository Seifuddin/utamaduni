"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { UtensilsCrossed, Home, GraduationCap } from "lucide-react";
import Link from "next/link";


// Custom hook for counting animation
function useCounter(target, inView, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target, duration, inView]);

  return count;
}

export default function AboutUs() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  // Check if in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const childrenCount = useCounter(1200, inView);
  const familiesCount = useCounter(350, inView);
  const schoolsCount = useCounter(50, inView);

  return (
    <section className="relative bg-amber-50 pt-32 md:pt-40 pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/images/communityoutreach.jpg"
            alt="Utamaduni Community"
            width={600}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          ref={ref}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 font-serif mb-2">
            About Us
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Utamaduni Organization is a community-based, non-profit organizationdedicated to preserving cultural heritage while uplifting vulnerable families and children. Inspired by the richness of african culture, Utamaduni integrates values of unity, compassion, and heritage intoits charitable initiatives.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The name "Utamaduni" means "culture" in Swahili, reflecting our belief that culture is the foundation of identity and a bridge for building stronger, caring communities.
          </p>
          {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/about"
            className="px-6 py-3 mt-5 rounded-xl text-white font-semibold bg-pink-600 hover:bg-red-700 transition-colors shadow-lg"
          >
            About Us
          </Link>
        </motion.div>

          {/* Impacts section with icons 
          <div className="grid grid-cols-3 gap-6 mt-6 text-center">
            <div className="flex flex-col items-center">
              <UtensilsCrossed className="w-8 h-8 text-red-600 mb-2" />
              <h3 className="text-xl font-bold text-blue-800">
                {childrenCount.toLocaleString()}+
              </h3>
              <p className="text-xs text-gray-600">Children Fed</p>
            </div>
            <div className="flex flex-col items-center">
              <Home className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="text-xl font-bold text-blue-800">
                {familiesCount.toLocaleString()}+
              </h3>
              <p className="text-xs text-gray-600">Families Supported</p>
            </div>
            <div className="flex flex-col items-center">
              <GraduationCap className="w-8 h-8 text-yellow-600 mb-2" />
              <h3 className="text-xl font-bold text-blue-800">
                {schoolsCount.toLocaleString()}+
              </h3>
              <p className="text-xs text-gray-600">Schools Reached</p>
            </div>
          </div>
          */}
        </motion.div>
      </div>
    </section>
  );
}
