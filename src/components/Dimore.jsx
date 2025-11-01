"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function CEOSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900">
            Our Founder & CEO
          </h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet the visionary behind Utamaduni Charity Organization — 
            a leader driven by compassion, unity, and sustainable impact.
          </p>
        </motion.div>

        {/* CEO Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-xl rounded-3xl overflow-hidden border border-blue-100 p-8 md:p-12"
        >
          {/* CEO Image */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src="/images/WhatsApp Image 2025-10-04 at 23.04.27.jpeg"
              alt="Founder & CEO - Utamaduni"
              fill
              className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="px-6 text-sm md:text-base italic leading-relaxed">
                “Together, we rise by lifting others.”
              </p>
            </div>
          </div>

          {/* CEO Details */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-blue-900">
              Brian Omondi
            </h3>
            <p className="text-blue-700 font-medium mb-4">Founder & CEO</p>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
              “At Utamaduni Charitable Organization, our mission is to uplift
              communities through compassion, empowerment, and sustainable
              development. Together, we build hope for a brighter and more
              inclusive tomorrow.”
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              <SocialIcon
                href="https://facebook.com"
                icon={<Facebook className="w-5 h-5" />}
              />
              <SocialIcon
                href="https://linkedin.com"
                icon={<Linkedin className="w-5 h-5" />}
              />
              <SocialIcon
                href="https://twitter.com"
                icon={<Twitter className="w-5 h-5" />}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------
   Reusable Social Icon
------------------------- */
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-amber-100 text-blue-800 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
    >
      {icon}
    </a>
  );
}
