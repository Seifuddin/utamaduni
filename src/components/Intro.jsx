"use client";

import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react"; // beautiful charity-related icon

export default function AboutIntro() {
  return (
    <section className="relative bg-amber-50 text-gray-800 pt-28 px-6 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/african-pattern.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-amber-50/90 to-amber-50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-5xl mx-auto text-center"
      >
        {/* Icon Accent */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-900/10 p-3 rounded-full">
            <HeartHandshake className="w-8 h-8 text-blue-900" />
          </div>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-wide"
        >
          Who We Are
        </motion.h2>

        {/* Decorative Line */}
        <div className="mx-auto w-24 h-1 bg-blue-900 mb-8 rounded-full"></div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-5xl mx-auto"
        >
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
        </motion.p>
      </motion.div>
    </section>
  );
}
