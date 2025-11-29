"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function CEOSection() {
  return (
    <section className="py-16 bg-amber-50 gradient-to-b from-amber-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl fontserif font-bold text-gray-900 mb-4">
            Founder & CEO
          </h2>
          <div className="w-24 h-1 bg-pink-700 mx-auto mt-3 rounded-full"></div>
          <p className="mt-2 text-gray-600 max-wxl mx-auto font-medium textcenter md:text-lg mb-6 borderb">
            Meet the visionary behind Utamaduni Charity Organization — 
            a leader driven by compassion, unity, and sustainable impact.
          </p>
        </motion.div>

        {/* CEO Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10 bgwhite shadowxl roundedlg overflow-hidden borderborder-gray-200 p4 py10 mdp-8"
        >
          {/* CEO Image */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/WhatsApp Image 2025-10-04 at 23.04.27.jpeg"
              alt="Founder & CEO - Utamaduni"
              fill
              className="object-cover rounded transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="px-6 text-sm md:text-base italic leading-relaxed">
                “Together, we rise by lifting others.”
              </p>
            </div>
          </div>

          {/* CEO Details */}
          <div className="flex-1 text-centermd: text-left">
            
            <h3 className="font-bold text-left text-blue-900 fontserif md:text-lg my-2">
              Brian Omondi
            </h3>
            <p className="text-gray-700 font-medium mb-4 text-left">Founder & CEO</p>

            <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-xl text-left">
              “At Utamaduni Charitable Organization, our mission is to uplift
              communities through compassion, empowerment, and sustainable
              development. Together, we build hope for a brighter and more
              inclusive tomorrow.”
            </p>

            {/* Social Links */}
            <div className="flex justifycenter md: justify-start gap-4">
              <SocialIcon
                href="https://www.facebook.com/share/1BhrvdwE23/"
                icon={<Facebook className="w-5 h-5" />}
              />
              <SocialIcon
                href="https://www.linkedin.com/in/brian-odhiambo-802103368"
                icon={<Linkedin className="w-5 h-5" />}
              />
              <SocialIcon
                href=" https://x.com/Dimore41759?t=cWFprjNn1N9NtA4LaL_u1g&s=08"
                icon={<Twitter className="w-5 h-5" />}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------
   Reusable Social Icon
------------------------- */
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-blue-800 bg-blue-100 borderborder-blue-100 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 shadow hover:shadow-md"
    >
      {icon}
    </a>
  );
}
