"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, BookOpen } from "lucide-react";

export default function OurStory() {
  return (
    <section className="bg-amber-50 to-white py-16 text-gray-800">
        {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12 text-center"
                >
                  <p className="text-sm uppercase tracking-wide font-semibold text-pink-700 mb-2">
                    Our Story
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                    How It All Began
                  </h2>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    transition={{ duration: 0.5 }}
                    className="h-1 bg-pink-700 rounded-full mx-auto mb-4"
                  ></motion.div>
                </motion.div>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <Image
            src="/images/utamaduni at mathare/_DSC8943.jpg"
            alt="Utamaduni community at work"
            width={700}
            height={500}
            className="object-cover w-full h-80 rounded border border-gray-100 md:h-[420px]"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xl md:text-3xl fontserif font-bold text-blue-800 mb-4">
                    A brief history about Utamaduni
                  </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Born from a shared vision of hope and unity, <strong>Utamaduni Charity Organization </strong> 
            began as a small circle of compassionate individuals determined to uplift 
            underprivileged families through cultural identity, education, and sustainable action.  
          </p>

          <p className="text-gray-700 leading-relaxed text-base">
            Over the years, our passion has grown into a movement — one that blends 
            <em> heritage and humanity</em> to create real change. From local classrooms to 
            community health drives, Utamaduni continues to restore dignity, empower families, 
            and celebrate the spirit of togetherness.
          </p>
          <div className="relative mt-6 flex justifycenter gap-4">
            <a href="/donate" className="bg-blue-900 text-white px-7 py-1 rounded font-semibold shadow">Donate</a>
            <a href="/volunteer" className="border border-blue-900 text-blue-900 px-7 py-1 font-semibold rounded">Volunteer</a>
          </div>

          <div className="grd sm:grid-cols-2 gap-5 mt-6 hidden">
            <FeaturePoint
              icon={<Users className="w-4 h-4 text-blue-800" />}
              title="Community Driven"
            >
              We work hand-in-hand with local leaders to ensure every voice is heard and every action counts.
            </FeaturePoint>

            <FeaturePoint
              icon={<BookOpen className="w-4 h-4 text-blue-800" />}
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
      className="p-3 bg-white rounded-md border border-gray-200  shadow-md flex gap-3 items-start hover:shadow-lg transition"
    >
      <div className="p-2 rounded-full border border-blue-100 bg-blue-50">{icon}</div>
      <div>
        <h4 className="font-bold text-blue-900 font-serif md:text-lg my-2">{title}</h4>
        <p className="text-base text-gray-700 mt-1">{children}</p>
      </div>
    </motion.div>
  );
}
