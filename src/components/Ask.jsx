"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ChildSleepSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-amber-100 overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-10 text-amber-200"
          fill="currentColor"
          viewBox="0 0 1440 320"
        >
          <path d="M0,160L1440,32L1440,0L0,0Z"></path>
        </svg>
      </div>

      {/* Background icons */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-6 left-6 w-12 h-12 text-pink-200 opacity-20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 2h-2v8H3v4h8v8h2v-8h8v-4h-8z" />
        </svg>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-200 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="relative z-10 px-6 container rounded-lg md:px-10 mx-auto py-10 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-pink-600 leading-snug mb-4 font-serif"
        >
          Inspired by Scripture
        </motion.h2>

        {/* Verse */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg font-light text-gray-700 leading-relaxed mb-3 max-w-xl mx-auto"
        >
          <span className="italic text-gray-800">
            "Give, and it will be given to you. A good measure, pressed down,
            shaken together and running over, will be poured into your lap."
          </span>
        </motion.p>

        {/* Reference */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center italic text-blue-800 font-semibold text-base"
        >
          — Luke 6:38
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link
            href="/donate"
            className="inline-block font-serif bg-blue-900 hover:from-pink-700 hover:to-indigo-700 text-white font-medium text-base px-6 py-2.5 rounded-full shadow-md transition-all hover:shadow-lg"
          >
            Support Our Mission
          </Link>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-10 text-amber-200"
          fill="currentColor"
          viewBox="0 0 1440 320"
        >
          <path d="M0,32L1440,160L1440,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
