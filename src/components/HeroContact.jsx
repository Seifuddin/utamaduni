"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[30vh] flex items-center justify-center overflow-hidden py-10">
      {/* Background Image */}
      <Image
        src="/images/WhatsApp Image 2025-10-04 at 23.11.57 (1).jpeg" // replace with your image path
        alt="Charity work background"
        fill
        className="object-cover brightness-40"
        priority
      />

      {/* Overlay Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white max-w-2xl px-6"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl fontserif font-black leading-tight mb-4">
           <span className="text-gray-100">Contact Us</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          We’d love to hear from you. Whether you want to volunteer, donate, or
          learn more about Utamaduni, we’re always happy to connect.
        </p>
      </motion.div>
    </section>
  );
}
