"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Abouts() {
  return (
    <section className="relative bg-amber-50 via-white to-blue-50 text-gray-800 overflow-hidden py-16">
      {/* Optional background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5 bg-cover bg-center"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 text-left"
        >
          <p className="inline-block text-sm uppercase tracking-wide font-semibold text-blue-700 mb-3">
            About Us
          </p>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Who We Are
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-blue-700 rounded-full mb-8"
          ></motion.div>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            <span className="font-semibold text-blue-900">Utamaduni</span> is a
            community-based, non-profit organization dedicated to preserving{" "}
            <span className="font-medium text-blue-900">cultural heritage</span>{" "}
            while uplifting vulnerable families and children. Inspired by the
            richness of African culture, Utamaduni integrates the timeless values
            of{" "}
            <span className="italic text-blue-900">unity</span>,{" "}
            <span className="italic text-blue-900">compassion</span>, and{" "}
            <span className="italic text-blue-900">heritage</span> into its
            charitable initiatives.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/donate"
              className="text-center px-6 py-3 font-serif bg-blue-900 text-white rounded-2xl shadow-md font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
            >
              Donate
            </Link>

            <Link
              href="/contact"
              className="text-center px-6 py-3 font-serif border-2 border-blue-900 text-blue-900 font-semibold rounded-2xl hover:bg-yellow-400 hover:border-yellow-400 hover:text-gray-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <img
              src="/images/utamaduni at mathare/_DSC8999.jpg"
              alt="Community work"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-700/30 group-hover:ring-yellow-400/40 transition-all duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
