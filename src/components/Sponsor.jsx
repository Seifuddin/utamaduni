"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartHandshake, GraduationCap, Stethoscope } from "lucide-react";

export default function SponsorProgram() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-800 to-blue-900 text-white py-10 sm:py-12 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 -left-16 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-6 -right-16 w-52 h-52 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center z-10">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold leading-snug mb-3">
            Sponsor a Child, Transform a Future
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-2">
            Your sponsorship provides{" "}
            <span className="font-semibold text-yellow-300">
              education, healthcare, and daily essentials
            </span>{" "}
            for children in need.
          </p>

          <p className="italic text-blue-200 text-xs sm:text-sm mb-4">
            “Whoever welcomes one of these little children in my name welcomes
            me; and whoever welcomes me does not welcome me but the One who sent
            me.”
          </p>

          {/* Icon Highlights */}
          <div className="flex justify-center md:justify-start gap-6 mb-5">
            <div className="flex flex-col items-center">
              <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mb-1" />
              <span className="text-xs text-blue-200">Care</span>
            </div>
            <div className="flex flex-col items-center">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mb-1" />
              <span className="text-xs text-blue-200">Education</span>
            </div>
            <div className="flex flex-col items-center">
              <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mb-1" />
              <span className="text-xs text-blue-200">Health</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Link
              href="/donate"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-lg shadow-md hover:from-yellow-300 hover:to-yellow-400 transition transform hover:-translate-y-0.5 hover:shadow-xl text-sm"
            >
              Sponsor Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative w-full h-52 sm:h-64 rounded-xl overflow-hidden shadow-xl">
            <img
              src="/images/childsupport.webp" // replace with your own image
              alt="Child Sponsorship"
              className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
          </div>

          {/* Floating Decorative Circle */}
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/40 rounded-full blur-xl animate-bounce"></div>
        </motion.div>
      </div>
    </section>
  );
}
