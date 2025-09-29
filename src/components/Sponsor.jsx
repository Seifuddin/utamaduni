"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SponsorProgram() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-blue-800 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Sponsor a Child, Change a Life
          </h2>
          <p className="text-blue-100 mb-6">
            Your sponsorship provides education, healthcare, and daily essentials 
            for children in need. With your support, we can build brighter futures 
            together.
          </p>
          <Link
            href="/donate"
            className="inline-block w-full text-center bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition"
          >
            Sponsor Now
          </Link>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/images/childrenwelfare.webp" // replace with your own
            alt="Child Sponsorship"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 rounded-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
