"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ChildSleepSection() {
  return (
    <section className="relative bg-amber-50">
      <div className="px-6 containe py5 md:px-12 lg:px-20 mx-auto pt-24 md:pt-24 text-center bg-white/50 shadowlg">
        
        {/* Animated Question */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-pink-600 leading-snug mb-4 font-serif"
        >
          Inspired by Scripture
        </motion.h2>

        {/* Answer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-700 leading-relaxed mb-4"
        >
          Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center italic text-black font-semibold leading-relaxed"
        >
          - Luke 6:38
        </motion.p>
        
        {/* CTA Button 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            href="/donate"
            className="inline-block font-serif bg-blue-900 hover:bg-blue-700 text-white font-medium textbase px-6 py-2 rounded-lg shadow-md transition"
          >
            Donate
          </Link>
        </motion.div>
        */}
      </div>
    </section>
  );
}
