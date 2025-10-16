"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const leaders = [
  {
    name: "Mr. Dimore",
    role: "Founder & CEO",
    image: "/images/Screenshot_20221028-204325.png",
    quote:
      "Inspiring others to dream more, learn more, and become more together.",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Mrs. Dimore",
    role: "Manager",
    image: "/images/Screenshot_20221028-204325.png",
    quote:
      "Through compassion and dedication, we build bridges of hope for the underprivileged.",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Miss Prisca",
    role: "Secretary",
    image: "/images/Screenshot_20221028-204325.png",
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
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
          Visionary Leadership
        </h2>
        <div className="mx-auto h-1 w-24 bg-pink-700 rounded-full mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Meet the hearts and minds shaping{" "}
          <span className="font-semibold text-gray-900">Utamaduni’s</span> mission — 
          leading with empathy, vision, and unshakeable dedication.
        </p>
      </motion.div>

      {/* Leader Cards */}
      <div className="grid md:grid-cols-3 gap-14 max-w-7xl mx-auto">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            className="group bg-white rounded shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center relative border border-gray-100 hover:border-amber-300"
          >
            {/* Circular Image */}
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

            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {leader.name}
            </h3>
            <p className="text-gray-700 font-medium mb-4">{leader.role}</p>

            {/* Social Icons */}
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
                  className="p-2 rounded-full bg-amber-100 hover:bg-pink-200 transition"
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
        ))}
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-24"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Leadership through Service
        </h3>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          True leadership is not about position — it’s about responsibility.  
          Together, we guide{" "}
          <span className="font-semibold text-gray-900">Utamaduni</span> 
          with purpose and unwavering dedication to humanity.
        </p>
      </motion.div>
    </section>
  );
}
