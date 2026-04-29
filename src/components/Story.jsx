"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, BookOpen } from "lucide-react";

export default function OurStory() {
  return (
    <section className="bg-[#f8f5f0] text-[#1a1a1a] py-20 px-6 lg:px-20">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <p className="text-[10px] tracking-[0.35em] uppercase text-pink-500 mb-3">
          Our Story
        </p>

        <h2 className="text-2xl md:text-3xl font-light leading-snug">
          How It All Began
        </h2>

        <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
          A journey rooted in compassion, culture, and community transformation.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.01 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative h-[300px] md:h-[420px] overflow-hidden">
            <Image
              src="/images/utamaduni at mathare/_DSC8943.jpg"
              alt="Utamaduni community"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* subtle frame */}
          <div className="absolute inset-0 border border-black/10"></div>

          {/* very soft overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          {/* pink accent */}
          <div className="w-8 h-[2px] bg-pink-500 mb-6"></div>

          <h3 className="text-xl md:text-2xl font-light mb-5 leading-snug">
            A Movement Born from Compassion
          </h3>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              <span className="font-medium text-black">
                Utamaduni Charity Organization
              </span>{" "}
              began as a small circle of individuals united by a shared vision —
              to uplift families through culture, education, and community care.
            </p>

            <p>
              What started as a humble initiative has grown into a movement that
              blends <span className="italic">heritage</span> and{" "}
              <span className="italic">humanity</span> to create lasting impact.
            </p>
          </div>

          {/* divider */}
          <div className="w-10 h-[1px] bg-black/20 my-8"></div>

          {/* VALUES */}
          <div className="space-y-6">
            
            <div className="flex items-start gap-3 rounded-lg border-b border-pink-200 pb-2">
              <Users size={16} className="mt-1 text-pink-500" />
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.25em] text-blue-900 font-bold mb-1">
                  Community
                </h4>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Working closely with local communities to create meaningful,
                  lasting change.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-b border-pink-200 pb-2">
              <BookOpen size={16} className="mt-1 text-pink-500" />
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.25em] text-blue-900 font-bold mb-1">
                  Education
                </h4>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Empowering individuals through knowledge, growth, and
                  opportunity.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}