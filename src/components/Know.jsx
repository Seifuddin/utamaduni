"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { Users, Utensils, Home, Heart } from "lucide-react";
import Link from "next/link";

export default function DidYouKnowHybrid() {
  const slides = [
    {
      icon: <Users className="w-7 h-7 text-pink-600" />,
      stat: "150M+",
      text: "children live on the streets worldwide with no care or safety.",
    },
    {
      icon: <Utensils className="w-7 h-7 text-pink-600" />,
      stat: "1 in 3",
      text: "go to bed hungry every night, crying themselves to sleep.",
    },
    {
      icon: <Home className="w-7 h-7 text-pink-600" />,
      stat: "Millions",
      text: "sleep without shelter, warmth, or protection from harm.",
    },
    {
      icon: <Heart className="w-7 h-7 text-pink-600" />,
      stat: "Your Help",
      text: "can bring food, safety, and hope. Even the smallest gift saves lives.",
    },
  ];

  return (
    <section className="relative text-white py-20 px-4 md:px-10">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/childrenwelfare.webp')", // replace with your background
        }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl fontserif font-black leading-tight text-white mb-5"
        >
          Did You Know?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-blue-100"
        >
          Every day, children suffer silently on the streets. Your kindness can
          rewrite their tomorrow.
        </motion.p>

        {/* Slider for small screens */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 
                             rounded-xl p-5 shadow-lg"
                >
                  <div className="flex justify-center mb-3">{slide.icon}</div>
                  <h3 className="text-xl font-bold font-serif">{slide.stat}</h3>
                  <p className="mt-2 text-sm text-gray-300">{slide.text}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for medium+ screens */}
        <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-4">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 
                         rounded-xl p-5 shadow-lg hover:scale-105 transition"
            >
              <div className="flex justify-center mb-3">{slide.icon}</div>
              <h3 className="text font-bold font-serif">{slide.stat}</h3>
              <p className="mt-2 text-sm text-gray-200">{slide.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link
            href="/donate"
            className="bg-yellow-300 text-blue-900 font-semibold px-5 py-2 font-serif 
                       rounded-full shadow-lg hover:bg-yellow-200 transition text-sm md:text-base"
          >
            Donate & Save a Life
          </Link>
        </motion.div>
        */}

      </div>
    </section>
  );
}
