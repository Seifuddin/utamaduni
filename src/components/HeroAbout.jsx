"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[30vh] flex items-center justify-center overflow-hidden py-16">
      {/* Background Image */}
      <Image
        src="/images/WhatsApp Image 2025-10-04 at 23.11.57 (1).jpeg" // replace with your image path
        alt="Charity work background"
        fill
        className="object-cover brightness-40"
        priority
      />

      {/* Overlay Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white max-w-2xl px-6"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl fontserif font-black leading-tight mb-4">
           <span className="text-gray-100">About Us</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          The word "Utamaduni" means culture in Swahili, reflectiong our belief that culture is the foundation of identity and a bridge for building stronger, caring communities.
        </p>
        {/* Overlay Text 
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Utamaduni is a community-based, non-profit organization dedicated to 
          preserving cultural heritage while uplifting vulnerable families and 
          children. Inspired by the richness of African culture, Utamaduni integrates
           values of unity, compassion, and heritage into its charitable initiatives.
        </p>
        */}
      </motion.div>
    </section>
  );
}
