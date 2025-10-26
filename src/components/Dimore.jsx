"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function CEOSection() {
  return (
    <section className="py-20 bg-amber-50 gradient-to-b from-green-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-serif"
        >
          Our Founder & CEO
        </motion.h2>

        {/* CEO Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-blue-100"
        >
          {/* CEO Image with Hover Overlay */}
          <div className="relative group w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-600 shadow-md">
            <Image
              src="/images/WhatsApp Image 2025-10-04 at 23.04.27.jpeg" // replace with your actual image
              alt="CEO - Utamaduni Charitable Organization"
              fill
              className="object-cover"
            />
            {/* Overlay appears on hover */}
            <div className="absolute inset-0 bg-blue-700 bg-opacity-80 flex items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="px-4 text-sm md:text-base italic">
                “Together, we rise by lifting others.”
              </p>
            </div>
          </div>

          {/* CEO Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-800">
              Mr. Dimore
            </h3>
            <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
            <p className="text-gray-600 max-w-xl mb-6">
              “At Utamaduni Charitable Organization, our mission is to uplift
              communities through compassion, empowerment, and sustainable
              development. Together, we build hope for a better tomorrow.”
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-100 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-100 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
