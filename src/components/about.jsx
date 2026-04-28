"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye } from "lucide-react";

export default function Abouts() {
  return (
    <section className="bg-amber-50 py-20 px-6 lg:px-20">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block bg-pink-200 text-pink-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
          About Us
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-[#050b1a] mb-4">
          Who We Are
        </h2>

        <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Rooted in culture, compassion, and community impact.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[450px] rounded overflow-hidden"
        >
          <Image
            src="/images/utamaduni at mathare/_DSC8999.jpg"
            alt="Community work"
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl mdtext-2xl font-bold text-blue-900 mb-4">
            A Legacy of Culture
          </h3>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-3">
            <span className="font-semibold text-gray-900">Utamaduni</span> is a
            community-based, non-profit organization committed to preserving{" "}
            <span className="font-medium text-gray-900">
              cultural heritage
            </span>{" "}
            while uplifting vulnerable families and children. We believe in
            building stronger communities through{" "}
            <span className="italic text-gray-900">unity</span>,{" "}
            <span className="italic text-gray-900">compassion</span>, and{" "}
            <span className="italic text-gray-900">shared identity</span>.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
            <span className="font-semibold text-gray-900"></span>
            The name “Utamaduni” means “culture” in Swahili — reflecting our belief 
            that culture is the foundation of identity and a bridge to building 
            stronger, more compassionate communities.{" "}
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="flex items-start gap-4 p-3 border-b border-pink-200 rounded">
              <Target className="bg-gradient-to-r from-pink-600 to-pink-800 text-white px-2 rounded" size={40} />
              <div>
                <h4 className="font-semibold text-blue-900">
                  Our Mission
                </h4>
                <p className="text-gray-700 text-sm">
                  To preserve cultural heritage while empowering lives through education, compassion, and sustainable initiatives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 border-b border-pink-200 rounded">
              <Eye className="bg-gradient-to-r from-pink-600 to-pink-800 text-white px-2 rounded" size={40} />
              <div>
                <h4 className="font-semibold text-blue-900">
                  Our Vision
                </h4>
                <p className="text-gray-700 text-sm">
                  A compassionate society where every child and family thrives with dignity, hope, and opportunity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}