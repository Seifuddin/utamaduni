"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Info } from "lucide-react";

const images = [
  "/images/utamaduni at mathare/_DSC8999.jpg",
  "/images/utamaduni at mathare/_DSC8578.jpg",
  "/images/utamaduni at mathare/_DSC8515.jpg",
  "/images/utamaduni at mathare/_DSC8754.jpg",
  "/images/WhatsApp Image 2025-09-28 at 02.00.51 (1).jpeg",
];

export default function Abouts() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-amber-50 gradient-to-br from-amber-50 via-white to-blue-50 text-gray-800 overflow-hidden py-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-10 bg-cover bg-center"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="inline-block text-sm uppercase tracking-wider font-semibold text-pink-700 bg-pink-100/60 px-3 py-1 rounded-full">
            About Us
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Who We Are
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-pink-700 rounded-full mb-6"
          ></motion.div>

          <p className="text-lg leading-relaxed text-gray-700">
            <span className="font-semibold text-gray-900">Utamaduni</span> is a
            community-based, non-profit organization committed to preserving{" "}
            <span className="font-medium text-gray-900">cultural heritage</span>{" "}
            while uplifting vulnerable families and children. Rooted in the
            richness of African culture, Utamaduni embodies{" "}
            <span className="italic text-gray-900">unity</span>,{" "}
            <span className="italic text-gray-900">compassion</span>, and{" "}
            <span className="italic text-gray-900">heritage</span> in all its
            initiatives.
          </p>

          {/* Mission & Vision Cards */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-pink-700 mr-2" />
                <h3 className="text-lg font-bold text-blue-900 font-serif">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                To preserve cultural heritage while empowering communities
                through education, compassion, and sustainable charitable
                initiatives for orphans, families, and those in need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center mb-3">
                <Eye className="w-6 h-6 text-pink-700 mr-2" />
                <h3 className="text-lg font-bold text-blue-900 font-serif">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                To create a culturally inspired, compassionate society where
                every vulnerable child and family can thrive with dignity,
                opportunity, and hope.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — IMAGE SLIDER + DID YOU KNOW */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          {/* Image Slider */}
          <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl border border-white/80">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[current]}
                src={images[current]}
                alt="Community work"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-auto object-cover"
              />
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-pink-600"
                      : "bg-white/70 hover:bg-pink-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          {/* Did You Know Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 bg-white/95 border border-pink-100 shadow-lg rounded-2xl p-6 max-w-md hover:shadow-2xl transition-all duration-500 text-left"
          >
            <div className="flex items-center mb-3">
              <Info className="w-6 h-6 text-pink-700 mr-2" />
              <h3 className="text-lg font-semibold text-blue-900 font-serif">
                Did You Know?
              </h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              The name <span className="font-medium">“Utamaduni”</span> means{" "}
              <span className="italic text-blue-800">“culture”</span> in Swahili
              — reflecting our belief that culture is the foundation of identity
              and a bridge to building stronger, more compassionate communities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
