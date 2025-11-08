"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Globe, Award } from "lucide-react";

export default function Mission() {
  const values = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-pink-700" />,
      title: "Our Mission",
      text: "To preserve cultural heritage while empowering lives through education, compassion, and sustainable community initiatives.",
    },
    {
      icon: <Globe className="w-5 h-5 text-pink-700" />,
      title: "Our Vision",
      text: "To build a culturally inspired, compassionate society where every family and child can thrive with dignity and hope.",
    },
    {
      icon: <Award className="w-5 h-5 text-pink-700" />,
      title: "Our Values",
      text: "Compassion • Integrity • Culture • Community • Sustainability.",
    },
  ];

  return (
    <section className="relative py-16 bg-amber-50 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5 bg-cover bg-center"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4"
        >
          Our Mission, Vision & Values
        </motion.h3>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ duration: 0.6 }}
          className="mx-auto h-1 bg-pink-700 rounded-full mb-6"
        />

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg">
          Guided by compassion, inclusion, and sustainable impact in everything we do.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
              className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-md p-5 flex flex-col items-start cursor-pointer"
            >
              <div className="flex items-center text-left mb-3">
                <div className="p-3 rounded-xl bg-pink-50">
                  {item.icon}
                </div>
                <h4 className="ml-3 font-bold text-gray-800 font-serif md:text-lg my-2">
                  {item.title}
                </h4>
              </div>
              <p className="text-gray-700 text-sm text-left md:text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
