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
    name: "Brian Otieno",
    role: "C.O.O",
    image: "/images/WhatsApp Image 2025-09-22 at 20.01.09 (1).jpeg",
    quote: "Every small act of kindness creates ripples that transform communities.",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "James Odongo",
    role: "Manager",
    image: "/images/JamesManager.jpg",
    quote: "Leadership means serving others with empathy, not authority.",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Doreen Ingutia",
    role: "Secretary",
    image: "/images/DoreenSecretary.jpg",
    quote: "Through compassion and dedication, we build bridges of hope for the underprivileged.",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Eunice Mwihaki",
    role: "Assistant Secretary",
    image: "/images/EuniceSecr.jpg",
    quote: "Together, we nurture hope where despair once grew.",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Sharon Rono",
    role: "Treasurer",
    image: "/images/WhatsApp Image 2025-09-22 at 20.01.09 (1).jpeg",
    quote: "Financial transparency fuels trust and impact.",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Jakes Omondi",
    role: "Coordinator",
    image: "/images/JakesCoordinator.jpg",
    quote: "True coordination is connecting hearts as much as actions.",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
];

export default function Leadership() {
  return (
    <section className="relative bg-amber-50 py-12 px-6 md:px-12 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-xs uppercase tracking-widest font-semibold text-blue-700">
          Our Team
        </p>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mt-2 mb-3">
          The Leadership Behind Utamaduni
        </h2>
        <div className="mx-auto h-1 w-16 bg-blue-700 rounded-full mb-4"></div>
        <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
          A dedicated team working alongside our Founder & CEO — uniting passion,
          integrity, and service to sustain Utamaduni’s mission of compassion and growth.
        </p>
      </motion.div>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto pb-8"
      >
        {leaders.map((leader, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 text-center border border-gray-100 hover:border-amber-300"
            >
              {/* Profile Image */}
              <div className="relative w-28 h-28 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-200 via-white to-amber-50 blur-lg opacity-25"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-800 group-hover:border-amber-400 transition-all duration-300 shadow-sm">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-base font-semibold text-gray-900 mb-1 font-serif">
                {leader.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{leader.role}</p>

              {/* Socials */}
              <div className="flex justify-center gap-3 mb-3">
                {leader.socials.facebook && (
                  <motion.a
                    href={leader.socials.facebook}
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    className="p-1.5 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                  >
                    <Facebook className="w-4 h-4 text-blue-800" />
                  </motion.a>
                )}
                {leader.socials.linkedin && (
                  <motion.a
                    href={leader.socials.linkedin}
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    className="p-1.5 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                  >
                    <Linkedin className="w-4 h-4 text-blue-800" />
                  </motion.a>
                )}
                {leader.socials.twitter && (
                  <motion.a
                    href={leader.socials.twitter}
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    className="p-1.5 rounded-full bg-amber-100 hover:bg-amber-200 transition"
                  >
                    <Twitter className="w-4 h-4 text-blue-800" />
                  </motion.a>
                )}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-xs italic leading-relaxed">
                “{leader.quote}”
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
