"use client";

import Link from "next/link";
import { HeartHandshake, GraduationCap, Stethoscope } from "lucide-react";

export default function SponsorProgram() {
  return (
    <section className="relative bg-amber-50 text-gray-900 py-24 px-6 mdpx-12 overflow-hidden">
      <div className="relative mx-auto max-w-7xl md:px-6 grid md:grid-cols-2 gap-8 items-center z-10">
        {/* Left Side - Text */}
        <div>
          <h2 className="md:text-left text-center text-3xl md:text-4xl fontserif font-bold text-gray-700 mb-3">
            Sponsor a Child,{" "}
            <span className="bloc font-semibold text-gray-700">
              Transform a Future
            </span>
          </h2>

          <p className="mt-1 text-gray-700 max-w-2xl font-medium md:text-left text-center md:text-base mb-2">
            Your sponsorship provides{" "}
            <span className="font-semibold text-gray-800">
              education, healthcare, and daily essentials
            </span>{" "}
            for children in need.
          </p>

          
          {/* Icon Highlights - Compact */}
          <div className="flex justify-center md:justify-start gap-4 mb-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-900 via-pink-700 to-pink-500 flex items-center justify-center shadow rounded-md">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <span className="mt-1 text-gray-800 text-sm font-medium">Care</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-900 via-pink-700 to-pink-500 flex items-center justify-center shadow rounded-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="mt-1 text-gray-800 text-sm font-medium">Education</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-900 via-pink-700 to-pink-500 flex items-center justify-center shadow rounded-md">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="mt-1 text-gray-800 text-sm font-medium">Health</span>
            </div>
          </div>

          <p className="mt-1 italic text-blue-900 max-w-2xl font-medium md:text-left text-center md:text-base mb-4">
            “Whoever welcomes one of these little children in my name welcomes
            me; and whoever welcomes me does not welcome me but the One who sent
            me.”
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start flex-wrap gap-3 mt-4">
            <a
              href="/donate"
              className="bg-blue-600 text-center md:px-8 md:py-3 text-white font-emibold w-full md:w-1/3 py-1.5 px-7 rounded-lg shadow-md hover:bg-blue-800 transition"
            >
              Support Us
            </a>
            <a
              href="/contact"
              className="border border-blue-600 text-center md:px-8 md:py-3 text-blue-600 w-full md:w-1/3 font-emibold py-1.5 px-7 rounded-lg hover:bg-white/10 transition"
            >
              Join Us
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative group">
          <div className="relative w-full h-full sm:h-64md:h-ull rounded overflow-hidden shadow-xl">
            <img
              src="/images/utamaduni at mathare/_DSC8782.jpg"
              alt="Child Sponsorship"
              className="object-cover border rounded border-gray-100 w-full h-full transform group-hover:scale-105 transition duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue900/70 via-transparent to-transparent"></div>
          </div>

          {/* Floating Decorative Circle */}
          <div className="absolute -bottom-4 -left-4 w-14 h-14 bgyellow-400/40 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
