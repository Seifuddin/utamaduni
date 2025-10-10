"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// About Us Section
export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-amber-50 text-gray-900">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-20 -top-12 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 lg:py24 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl fontserif font-black leading-tight text-gray-800"
          >
            Building Hope, Restoring Dignity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-4 text-gray-600 max-w-xl"
          >
            Utamaduni Charitable Organization empowers vulnerable communities through
            education, healthcare, cultural identity, and sustainable livelihoods —
            one life at a time.
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              href="#programs"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 bg-blue-900 text-amber-50 px-5 py-3 rounded-full shadow-lg font-semibold hover:bg-blue-800 transition"
            >
              Get Involved
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 border border-blue-900 text-blue-900 px-5 py-3 rounded-full font-semibold hover:bg-blue-900 hover:text-amber-50 transition"
            >
              Contact Us
            </motion.a>
          </div>

          {/* Stats 
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard value="5,000+" label="Children Helped" />
            <StatCard value="20,000+" label="Meals Provided" />
            <StatCard value="1,200+" label="Volunteers" />
            <StatCard value="15+ yrs" label="Service" />
          </div>
          */}
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-900/20"
          >
            <Image
              src="/images/hope.jpeg"
              alt="Children smiling with volunteers"
              width={1200}
              height={800}
              className="object-cover w-full h-64 sm:h-80 lg:h-96"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Reusable Stat Card
function StatCard({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-xl p-4 text-center shadow-md hover:shadow-lg hover:scale-105 transition-transform"
    >
      <h3 className="text-2xl font-bold text-blue-900">{value}</h3>
      <p className="text-sm text-gray-700">{label}</p>
    </motion.div>
  );
}
