"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartHandshake, GraduationCap, Stethoscope } from "lucide-react";

export default function SponsorProgram() {
  return (
    <section className="relative bg-amber-50 gradient-to-br from-blue-950 via-blue-800 to-blue-900 text-white py-24 sm-py-12  sm:px8 md:px- overflow-hidden">
            {/* Background Overlay with Patterns 
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>
*/}
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center z-10">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl mdtext-4xl md:text-5xl fontserif font-bold text-gray-900 mb-4">
            Sponsor a Child, <span className="block font-semibold text-pink-600">Transform a Future
            </span>
          </h2>

          <p className="tmt-2 text-gray-600 max-w-2xl mx-auto font-medium text-left md:text-lg mb-6">
            Your sponsorship provides{" "}
            <span className="font-semibold text-gray-700">
              education, healthcare, and daily essentials
            </span>{" "}
            for children in need.
          </p>


          {/* Icon Highlights */}
          <div className="flex justify-cente md:justify-start gap-6 mb-7 mt-5">
            <div className="flex flex-col items-center">
              <HeartHandshake className="w-7 h-7 text-blue-800 mb-1 p2 bgblue-200 bordr border-gray-300 roundedfull" />
              <span className="text-pink-700 font-medium">Care</span>
            </div>
            <div className="flex flex-col items-center">
              <GraduationCap className="w-7 h-7 text-blue-800 mb-1 p2 bgblue-200 bordr border-gray-300 roundedfull" />
              <span className="text-pink-700 font-medium">Education</span>
            </div>
            <div className="flex flex-col items-center">
              <Stethoscope className="w-7 h-7 text-blue-800 mb-1 p2 bgblue-200 bordr border-gray-300 roundedfull" />
              <span className="text-pink-700 font-medium">Health</span>
            </div>
          </div>

          {/* Icon Highlights */}
          <p className="hidden italic text-gray-600 text-xs sm:text-sm mb-4">
            “Whoever welcomes one of these little children in my name welcomes
            me; and whoever welcomes me does not welcome me but the One who sent
            me.”
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-10"
          >
            <div className="flex flex-col w-full sm:flex-row gap-4 justifycenter md: justify-start">
            <a
              href="/donate"
              className="bg-blue-800 text-center md:px-8 md:py-3 text-white font-semibold py-2 px-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Donate
            </a>
            <a
              href="/volunteer"
              className="border text-center md:px-8 md:py-3 border-blue-700 text-blue-700 font-semibold py-2 px-3 rounded-lg hover:bg-white/10 transition"
            >
              Volunteer
            </a>
          </div>
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
          <div className="relative w-full h-full h52 sm:h64 md:h-ull rounded overflow-hidden shadow-xl">
            <img
              src="/images/utamaduni at mathare/_DSC8782.jpg" // replace with your own image
              alt="Child Sponsorship"
              className="object-cover border rounded border-gray-100 w-full h-full transform group-hover:scale-105 transition duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue900/70 via-transparent to-transparent"></div>
          </div>

          {/* Floating Decorative Circle */}
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow400/40 rounded-full blur-xl animate-bounce"></div>
        </motion.div>
      </div>
    </section>
  );
}
