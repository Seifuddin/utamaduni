"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, BookOpen } from "lucide-react";

export default function OurStory() {
  return (
    <section className="bg-amber-50 py-20 px-6 lg:px-20">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
          Our Story
        </span>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          How It All Began
        </h2>

        <div className="w-24 h-1 bg-pink-200 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-600 max-w-2xl mx-auto">
          A journey rooted in compassion, culture, and community transformation.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[320px] md:h-[450px] rounded-xl overflow-hidden shadow-xl group"
        >
          <Image
            src="/images/utamaduni at mathare/_DSC8943.jpg"
            alt="Utamaduni community"
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
            A Movement Born from Compassion
          </h3>

          <p className="text-gray-700 leading-relaxed mb-5">
            <span className="font-semibold text-gray-900">
              Utamaduni Charity Organization
            </span>{" "}
            began as a small circle of individuals united by a shared vision —
            to uplift underprivileged families through{" "}
            <span className="font-medium text-gray-900">
              culture, education, and community care
            </span>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            What started as a humble initiative has grown into a powerful movement,
            blending{" "}
            <span className="italic text-gray-900">heritage</span> and{" "}
            <span className="italic text-gray-900">humanity</span> to create lasting impact.
            Today, we continue to restore dignity, empower families, and build
            stronger communities.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="flex items-start gap-4 p-3 border-b border-pink-200">
              <Users className="bg-gradient-to-r from-pink-600 to-pink-800 text-white p-2 rounded" size={32} />
              <div>
                <h4 className="font-semibold text-blue-900">
                  Community Driven
                </h4>
                <p className="text-gray-700 text-sm">
                  Working hand-in-hand with local communities to create real impact.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 border-b border-pink-200">
              <BookOpen className="bg-gradient-to-r from-pink-600 to-pink-800 text-white p-2 rounded" size={32} />
              <div>
                <h4 className="font-semibold text-blue-900">
                  Education Focused
                </h4>
                <p className="text-gray-700 text-sm">
                  Empowering individuals through knowledge and lifelong learning.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}