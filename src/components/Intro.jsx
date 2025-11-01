"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake, Target, Eye } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="relative bg-amber-50 text-gray-800 py-20 px-6 overflow-hidden">
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 text-left">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-pink-700 mb-8 rounded-full"></div>

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

          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-5">
            The word <span className="font-semibold text-blue-900">“Utamaduni”</span>{" "}
            means <em>culture</em> in Swahili — reflecting our belief that culture is
            the foundation of identity and a bridge for building stronger,
            caring communities.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/utamaduni at mathare/_DSC8999.jpg"
            alt="Utamaduni community support"
            width={600}
            height={500}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 text-center md:text-left"
      >
        {/* Mission */}
        <div className="bg-white/70 backdrop-blur-md shadow-lg p-10 rounded-2xl hover:shadow-2xl transition-shadow duration-500 border border-blue-100">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Target className="w-7 h-7 text-pink-700 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            To empower communities through the preservation of cultural heritage,
            education, and sustainable development — nurturing unity, creativity,
            and compassion in every initiative we undertake.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white/70 backdrop-blur-md shadow-lg p-10 rounded-2xl hover:shadow-2xl transition-shadow duration-500 border border-blue-100">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Eye className="w-7 h-7 text-pink-700 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            To build a culturally enriched and compassionate society where every
            child and family thrives — celebrating African identity and inspiring
            a legacy of dignity and shared humanity.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
