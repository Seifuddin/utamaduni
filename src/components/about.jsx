"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Abouts() {
  return (
    <section
      className="relative bg-amber-50 text-black overflow-hidden">
      {/* Background Overlay with Patterns 
      <div className="absolute inset-0 bg-amber-50 gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>
      */}
      {/* Background overlay 
      <div className="absolute inset-0 bg-black/40"></div>
*/}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-14 py-14 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-left md:w-1/2"
        >
           <p className="inline-block px-1 text-sm bordr bordergray-700 bg-blue950 rounded-md leading-relaxed text-blue-700 mb-2">
          About Us
        </p>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
            Who We Are{" "}
          </h1>
          <div className="w-24 h-1 text-left bg-blue-700 mb-8 md:mx-0 mxauto rounded-full"></div>


          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-700 text-left">
            <span className="font-semibold text-blue-900">Utamaduni</span> is a
            community-based, non-profit organization dedicated to preserving{" "}
            <span className="font-medium text-blue-900">cultural heritage</span>{" "}
            while uplifting vulnerable families and children. Inspired by the
            richness of African culture, Utamaduni integrates the timeless values
            of{" "}
            <span className="italic text-blue-900">unity</span>,{" "}
            <span className="italic text-blue-900">compassion</span>, and{" "}
            <span className="italic text-blue-900">heritage</span> into its
            charitable initiatives.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <Link
              href="donate"
              className="text-center px-6 py-3 font-serif bg-blue-900 text-white rounded-2xl shadow-md font-semibold hover:bg-yellow-500 transition"
            >
              Donate
            </Link>
            <Link
              href="contact"
              className="text-center px-6 py-3 font-serif border border-blue-900 text-blue-900 font-semibold rounded-2xl hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src="/images/utamaduni at mathare/_DSC8999.jpg"
            alt="Hospital illustration"
            className="w-full border-2 border-gray-400 rounded max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
