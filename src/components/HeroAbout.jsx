"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className="relative bg-[#0a2540] text-white overflow-hidden">
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>
      {/* Background overlay 
      <div className="absolute inset-0 bg-black/40"></div>
*/}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-14 py-14 flexflexcol md:flexrow gap10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:w1/2"
        >
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            A Legacy of Culture{" "}
          </h1>
          <div className="w-24 h-1 textleft bg-blue-700 mb-8 md:mx0 mx-auto rounded-full"></div>


          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-200 mt-5 text-center">
          The word "Utamaduni" means culture in Swahili, reflecting our belief that 
          culture is the foundation of identity and a bridge for building stronger, 
          caring communities.
        </p>

          
{/* Description 
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-center gap-4">
            <Link
              href="donate"
              className="text-center px-6 py-3 font-serif bg-blue-600 text-white rounded-2xl shadow-md font-semibold hover:bg-yellow-500 transition"
            >
              Donate
            </Link>
            <Link
              href="contact"
              className="text-center px-6 py-3 font-serif border border-white text-gray-100 rounded-2xl hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Contact Us
            </Link>
          </div>
          */}
        </motion.div>

        {/* Right Side Image 
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src="/images/WhatsApp Image 2025-10-04 at 23.11.07.jpeg"
            alt="Hospital illustration"
            className="w-full border-2 border-gray-400 rounded max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
          />
        </motion.div>
        */}
      </div>
    </section>
  );
}
