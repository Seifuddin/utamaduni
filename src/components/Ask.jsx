"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ChildSleepSection() {
  return (
    <section className="relative bg-amber-50">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 text-center">
        
        {/* Animated Question */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-pink-600 leading-snug mb-4 font-serif"
        >
          Do you know where a child sleeps tonight?
        </motion.h2>

        {/* Answer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-700 leading-relaxed mb-4"
        >
          For thousands of street children, the answer is heartbreaking. Some curl up on
          cold pavements, others hide under broken bridges, and many lie awake in fear—hungry,
          cold, and unsafe.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-700 leading-relaxed mb-6"
        >
          While the world sleeps peacefully, countless little ones are crying silently into
          the night. Your support can give them more than just a bed—it can give them safety,
          warmth, hope, and a future.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            href="/donate"
            className="inline-block bg-blue-900 hover:bg-blue-700 text-white font-medium text-base px-6 py-2 rounded-lg shadow-md transition"
          >
            Give a Child a Safe Place Tonight
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
