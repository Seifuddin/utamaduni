"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Globe, Award } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Mission() {
  const values = [
    {
      icon: <HeartHandshake className="w-4 h-4 text-pink-700" />,
      title: "Our Mission",
      text: "To preserve cultural heritage while empowering lives through education, compassion, and sustainable community initiatives.",
    },
    {
      icon: <Globe className="w-4 h-4 text-pink-700" />,
      title: "Our Vision",
      text: "To build a culturally inspired, compassionate society where every family and child can thrive with dignity and hope.",
    },
    {
      icon: <Award className="w-4 h-4 text-pink-700" />,
      title: "Our Values",
      text: "Compassion • Integrity • Culture • Community • Sustainability.",
    },
  ];

  return (
    <section className="relative py-16 bg-amber-50 gradient-to-b from-white to-amber-50 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5 bg-cover bg-center"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3"
        >
          Our Mission, Vision & Values
        </motion.h3>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ duration: 0.6 }}
          className="mx-auto h-1 bg-pink-700 rounded-full mb-6"
        ></motion.div>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg">
          Guided by compassion, inclusion, and sustainable impact in everything we do.
        </p>

        {/* Grid for md+ screens, Swiper for small screens */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-3 text-left group"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-xl bg-pink-50 group-hover:bg-pink-100 transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="ml-3 md:text-lg font-semibold text-blue-900 font-serif">
                  {item.title}
                </h4>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Swiper for small screens */}
        <div className="sm:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {values.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl shadow-sm p-4 text-left"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-xl bg-pink-50">
                      {item.icon}
                    </div>
                    <h4 className="ml-3 text-lg font-semibold text-blue-900 font-serif">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
