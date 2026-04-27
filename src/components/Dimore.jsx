"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function CEOSection() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/WhatsApp Image 2025-10-04 at 23.04.27.jpeg"
        alt="Founder"
        fill
        className="object-cover"
        priority
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        
        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-widest text-xs md:text-sm text-pink-300 mb-3"
        >
          Founder’s Vision
        </motion.p>

        {/* QUOTE */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6"
        >
          “We are not just changing lives —  
          we are restoring dignity,  
          rebuilding hope,  
          and shaping the future together.”
        </motion.h2>

        {/* NAME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base md:text-lg font-semibold">
            Brian Omondi
          </p>
          <p className="text-pink-300 text-sm md:text-base mb-4">
            Founder & CEO, Utamaduni
          </p>
        </motion.div>

        {/* SOCIALS */}
        <div className="flex justify-center gap-3">
          <SocialIcon href="https://www.facebook.com/share/1BhrvdwE23/" icon={<Facebook size={16} />} />
          <SocialIcon href="https://www.linkedin.com/in/brian-odhiambo-802103368" icon={<Linkedin size={16} />} />
          <SocialIcon href="https://x.com/Dimore41759" icon={<Twitter size={16} />} />
        </div>
      </div>
    </section>
  );
}

/* SOCIAL ICON */
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
    >
      {icon}
    </a>
  );
}