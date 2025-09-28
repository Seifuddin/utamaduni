"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    // Added pt-32 to make space for the hanging stats
    <section className="relative bg-amber-50 pt-32 md:pt-40 pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/images/WhatsApp Image 2025-09-28 at 02.00.51 (1).jpeg" // replace with your image
            alt="Utamaduni Community"
            width={600}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
          
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-serif mb-4">
            About Utamaduni
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Utamaduni Organization is a community-based
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We believe in strengthening cultural identity as a foundation for
            unity and compassion, ensuring that no child or family is left
            behind.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-red-700 font-serif">Our Mission</h3>
              <p className="text-sm text-gray-600 mt-2">
                To support vulnerable children and families through holistic care,
                education, and empowerment.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-red-700 font-serif">Our Vision</h3>
              <p className="text-sm text-gray-600 mt-2">
                A united community where culture inspires compassion and
                sustainable growth for all.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
