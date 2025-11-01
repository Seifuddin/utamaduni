"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, BookOpen } from "lucide-react";

export default function OurStory() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-16 text-gray-800">
        {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12 text-center"
                >
                  <p className="text-sm uppercase tracking-wide font-semibold text-blue-700 mb-2">
                    Our Story
                  </p>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
                    How It All Began
                  </h2>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    transition={{ duration: 0.5 }}
                    className="h-1 bg-blue-700 rounded-full mx-auto mb-6"
                  ></motion.div>
                </motion.div>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <Image
            src="/images/utamaduni at mathare/_DSC8943.jpg"
            alt="Utamaduni community at work"
            width={700}
            height={500}
            className="object-cover w-full h-80 md:h-[420px]"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-gray-700 leading-relaxed">
            Born from a shared vision of hope and unity, <strong>Utamaduni Charity Organization</strong> 
            began as a small circle of compassionate individuals determined to uplift 
            underprivileged families through cultural identity, education, and sustainable action.  
          </p>

          <p className="text-gray-700 leading-relaxed">
            Over the years, our passion has grown into a movement — one that blends 
            <em>heritage and humanity</em> to create real change. From local classrooms to 
            community health drives, Utamaduni continues to restore dignity, empower families, 
            and celebrate the spirit of togetherness.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-6">
            <FeaturePoint
              icon={<Users className="w-5 h-5 text-amber-600" />}
              title="Community Driven"
            >
              We work hand-in-hand with local leaders to ensure every voice is heard and every action counts.
            </FeaturePoint>

            <FeaturePoint
              icon={<BookOpen className="w-5 h-5 text-amber-600" />}
              title="Empowering Education"
            >
              From children to adults, we build capacity for lifelong learning and self-reliance.
            </FeaturePoint>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------
   Subcomponent
---------------------- */
function FeaturePoint({ icon, title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-5 bg-white rounded-xl shadow-md flex gap-3 items-start hover:shadow-lg transition"
    >
      <div className="p-3 rounded-lg bg-amber-50">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 font-serif">{title}</h4>
        <p className="text-sm text-gray-700 mt-1">{children}</p>
      </div>
    </motion.div>
  );
}
