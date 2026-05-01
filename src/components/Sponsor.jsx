"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake, GraduationCap, Stethoscope, Utensils } from "lucide-react";
import Link from "next/link";

export default function SponsorProgram() {
  return (
    <section className="bg-amber-50 py-20 px-6 lg:px-20">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="hidden inlineblock bg-pink-200 text-pink-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
          Child Sponsorship
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Sponsor a Child Today,
          <span className="text-pink-900"> Transform a Future</span>
        </h2>

        <div className="hidden w-24 h-1 bg-pink-300 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Your support provides education, healthcare, and essential needs for children in vulnerable communities.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[250px] md:h-[350px] rounded overflow-hidden"
        >
          <Image
            src="/images/childsupport.webp"
            alt="Child Sponsorship"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8">
            Through sponsorship, you directly impact a child’s future by ensuring access to education, healthcare, and daily care.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="flex items-start gap-4 p-2 border-b border-pink-200 rounded">
              <HeartHandshake className="bg-gradient-to-r from-pink-600 to-pink-900 text-white p-2 rounded" size={32} />
              <div>
                <h4 className="text-lg font-medium text-gray-900">Care & Support</h4>
                <p className="text-gray-700 text-sm">
                  Providing emotional and social support for every child.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2 border-b border-pink-200 rounded">
              <GraduationCap className="bg-gradient-to-r from-pink-600 to-pink-900 text-white p-2 rounded" size={32} />
              <div>
                <h4 className="text-lg font-medium text-gray-900">Education</h4>
                <p className="text-gray-700 text-sm">
                  Access to quality education and school essentials.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2 border-b border-pink-200 rounded">
              <Stethoscope className="bg-gradient-to-r from-pink-600 to-pink-900 text-white p-2 rounded" size={32} />
              <div>
                <h4 className="text-lg font-medium text-gray-900">Healthcare</h4>
                <p className="text-gray-700 text-sm">
                  Medical care and regular health support.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2 border-b border-pink-200 rounded">
  <HeartHandshake className="bg-gradient-to-r from-pink-600 to-pink-900 text-white p-2 rounded" size={32} />
  <div>
    <h4 className="text-lg font-medium text-gray-900">Nutrition</h4>
    <p className="text-gray-700 text-sm">
      Access to balanced meals for healthy growth and development.
    </p>
  </div>
</div>
          </div>

          {/* QUOTE */}
          <p className="mt-8 italic text-blue-900">
            “Whoever welcomes one of these little children in my name welcomes me.”
          </p>

          {/* BUTTONS */}
          <div className="hidden mt-8 flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-md shadow-md hover:opacity-90 transition"
            >
              Support Us
            </Link>

            <Link
              href="/contact"
              className="px-6 py-2 border border-blue-900 text-blue-900 rounded-md hover:bg-blue-100 transition"
            >
              Join Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}