"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye } from "lucide-react";

export default function Abouts() {
  return (
    <section className="bg-amber-50 text-[#1a1a1a] py-20 px-6 lg:px-20">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-10 px-4"
      >
        <p className="text-[10px] tracking-[0.35em] uppercase text-pink-500 mb-2">
          About
        </p>

        <h2 className="text-2xl md:text-3xl font-light">
          A Legacy of Culture{" "}
          <span className="italic text-blue-900">& Community Impact</span>
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.01 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative lg:ml-6"
        >
          <div className="relative h-[320px] md:h-[420px] overflow-hidden rounded-sm">
            <Image
              src="/images/utamaduni at mathare/_DSC8999.jpg"
              alt="Utamaduni community work"
              fill
              className="object-cover"
            />
          </div>

          {/* subtle frame */}
          <div className="absolute inset-0 border border-black/10"></div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          {/* pink accent (brand color) */}
          <div className="w-8 h-[2px] bg-pink-500 mb-3"></div>

          <h3 className="textxl md:text-xl font-light mb-3 leading-snug">
            Rooted in identity, driven by purpose.
          </h3>

          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              <span className="font-medium text-black">Utamaduni</span> is a
              community-based organization dedicated to preserving cultural
              heritage while uplifting vulnerable children and families.
            </p>

            <p>
              The name — meaning <span className="italic">culture</span> —
              reflects a belief that identity is the foundation of dignity,
              connection, and lasting transformation.
            </p>
          </div>

          {/* divider */}
          <div className="w-10 h-[1px] bg-pink-700 my-4"></div>

          {/* MISSION & VISION */}
          <div className="space-y-6">
            
            <div className="flex items-start gap-3 rounded-lg border-b border-pink-200 pb-2">
              <Target size={20} className="mt-1 text-pink-500" />
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.25em] text-blue-900 font-bold mb-1">
                  Mission
                </h4>
                <p className="text-gray-800 text-sm leading-relaxed">
                  To preserve cultural heritage while empowering lives through
                  education and sustainable initiatives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-b border-pink-200 pb-2">
              <Eye size={20} className="mt-1 text-pink-500" />
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.25em] text-blue-900 font-bold mb-1">
                  Vision
                </h4>
                <p className="text-gray-800 text-sm leading-relaxed">
                  A society where every family thrives with dignity and opportunity.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}