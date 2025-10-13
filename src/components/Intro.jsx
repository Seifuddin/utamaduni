"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="relative bg-amber-50 text-gray-800 py-24 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/images/african-pattern.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-amber-50/90 to-amber-50" />

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="z-10"
        >
          {/* Icon */}
          <div className="flex justify-start justifycenter mb-5">
            <div className="bg-blue-900/10 p-3 rounded-full">
              <HeartHandshake className="w-8 h-8 text-blue-900" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-left">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-blue-900 mb-8 md:mx-0 mx-auto rounded-full"></div>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 text-left">
            <span className="font-semibold text-blue-900">Utamaduni</span> is a
            community-based, non-profit organization dedicated to preserving{" "}
            <span className="font-medium text-blue-900">cultural heritage</span>{" "}
            while uplifting vulnerable families and children. Inspired by the
            richness of African culture, Utamaduni integrates the timeless values
            of{" "}
            <span className="italic text-blue-900">unity</span>,{" "}
            <span className="italic text-blue-900">compassion</span>, and{" "}
            <span className="italic text-blue-900">heritage</span> into its
            charitable initiatives.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/WhatsApp Image 2025-10-04 at 23.11.56.jpeg"
            alt="Utamaduni community support"
            width={600}
            height={500}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
