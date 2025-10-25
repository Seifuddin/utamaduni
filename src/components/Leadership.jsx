"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const leaders = [
  {
    name: "Mr. Dimore",
    role: "Founder & CEO",
    image: "/images/WhatsApp Image 2025-10-04 at 23.04.27.jpeg",
    quote:
      "Inspiring others to dream more, learn more, and become more together.",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Mr. #####",
    role: "Manager",
    image: "/images/how_it_went_down/_DSC7566.jpg",
    quote:
      "Through compassion and dedication, we build bridges of hope for the underprivileged.",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Miss #####",
    role: "Secretary",
    image: "/images/how_it_went_down/_DSC7883.jpg",
    quote:
      "Every small act of kindness creates ripples that transform communities.",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },

  {
    name: "Mr. #####",
    role: "Treasurer",
    image: "/images/how_it_went_down/_DSC7899.jpg",
    quote:
      "Every small act of kindness creates ripples that transform communities.",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },

  {
    name: "Miss #####",
    role: "Driver",
    image: "/images/how_it_went_down/_DSC7951.jpg",
    quote:
      "Every small act of kindness creates ripples that transform communities.",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function Leadership() {
  return (
    <section className="relative bg-amber-50 py-24 px-6 md:px-16 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-wide font-semibold text-blue-700 mb-2">
          Our Team
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          Visionary Leadership
        </h2>
        <div className="mx-auto h-1 w-24 bg-blue-700 rounded-full mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Meet the hearts and minds shaping{" "}
          <span className="font-semibold text-gray-900">Utamaduni’s</span>{" "}
          mission — leading with empathy, vision, and dedication.
        </p>
      </motion.div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto pb-12"
      >
        {leaders.map((leader, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-amber-300"
            >
              {/* Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-300 via-amber-100 to-white animate-pulse blur-lg opacity-30"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-900 group-hover:border-amber-400 transition-all duration-300 shadow-md">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Details */}
              <h3 className="text-lg font-bold text-gray-900 mb-1 font-serif">
                {leader.name}
              </h3>
              <p className="text-gray-700 font-medium mb-4">{leader.role}</p>

              {/* Socials */}
              <div className="flex justify-center space-x-4 mb-5">
                {leader.socials.facebook && (
                  <motion.a
                    href={leader.socials.facebook}
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                  >
                    <Facebook className="w-5 h-5 text-pink-700" />
                  </motion.a>
                )}
                {leader.socials.linkedin && (
                  <motion.a
                    href={leader.socials.linkedin}
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                  >
                    <Linkedin className="w-5 h-5 text-pink-700" />
                  </motion.a>
                )}
                {leader.socials.twitter && (
                  <motion.a
                    href={leader.socials.twitter}
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                  >
                    <Twitter className="w-5 h-5 text-pink-700" />
                  </motion.a>
                )}
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                “{leader.quote}”
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-10"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif">
          Leadership through Service
        </h3>
        <p className="max-w-2xl mx-auto text-gray-700 textlg">
          True leadership is not about position — it’s about responsibility.{" "}
          Together, we guide{" "}
          <span className="font-semibold text-gray-900">Utamaduni</span> with
          purpose and unwavering dedication to humanity.
        </p>
      </motion.div>
    </section>
  );
}
