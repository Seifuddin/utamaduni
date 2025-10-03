"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UtensilsCrossed, Home, GraduationCap } from "lucide-react";
import Link from "next/link";

// Compact About Us Section
export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-amber-100 md:pt-8 pb-12 px-4 md:px-8 lg:px-12">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/images/WhatsApp Image 2025-09-28 at 02.00.51 (1).jpeg"
            alt="About Utamaduni"
            width={650}
            height={550}
            className="rounded shadow-md object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 font-serif leading-snug">
            About <span className="text-pink-600">Utamaduni</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Utamaduni is a charitable organization dedicated to helping street
            children by providing food, shelter, and education. Our mission is
            to give every child hope for a brighter future through compassion
            and community support.
          </p>

          {/* Compact Counters */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-3 text-center"
            >
              <UtensilsCrossed className="w-8 h-8 text-red-600 mx-auto mb-1" />
              <h3 className="text-lg font-bold text-blue-800">5,000+</h3>
              <p className="text-sm text-gray-600">Meals Served</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-3 text-center"
            >
              <Home className="w-8 h-8 text-green-600 mx-auto mb-1" />
              <h3 className="text-lg font-bold text-blue-800">200+</h3>
              <p className="text-sm text-gray-600">Children Sheltered</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-3 text-center"
            >
              <GraduationCap className="w-8 h-8 text-pink-600 mx-auto mb-1" />
              <h3 className="text-lg font-bold text-blue-800">150+</h3>
              <p className="text-sm text-gray-600">Educated</p>
            </motion.div>
          </div>

          {/* Slim Button */}
          <Link
            href="/about"
            className="inline-block px-5 py-2 rounded-lg text-white font-medium font-serif text-base bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-800 hover:to-blue-600 transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
