"use client";

import Link from "next/link";
import { HeartHandshake, GraduationCap, Stethoscope } from "lucide-react";

export default function SponsorProgram() {
  return (
    <section className="relative bg-amber-50 text-gray-900 py-24 px-6 md:px-12 overflow-hidden">
      <div className="relative mx-auto max-w-7xl grid md:grid-cols-2 gap-8 items-center z-10">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl fontserif font-bold text-gray-900 mb-3">
            Sponsor a Child,{" "}
            <span className="block font-semibold text-blue-800">
              Transform a Future
            </span>
          </h2>

          <p className="mt-1 text-gray-700 max-w-2xl font-medium text-left md:text-base mb-2">
            Your sponsorship provides{" "}
            <span className="font-semibold text-gray-800">
              education, healthcare, and daily essentials
            </span>{" "}
            for children in need.
          </p>

          
          {/* Icon Highlights - Compact */}
          <div className="flex gap-4 mb-5">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-blue-100">
                <HeartHandshake className="w-5 h-5 text-blue-800" />
              </div>
              <span className="mt-1 text-gray-800 text-sm font-medium">Care</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-blue-100">
                <GraduationCap className="w-5 h-5 text-blue-800" />
              </div>
              <span className="mt-1 text-gray-800 text-sm font-medium">Education</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-blue-100">
                <Stethoscope className="w-5 h-5 text-blue-800" />
              </div>
              <span className="mt-1 text-gray-800 text-sm font-medium">Health</span>
            </div>
          </div>

          <p className="mt-1 italic text-blue-900 max-w-2xl font-medium text-left md:text-base mb-4">
            “Whoever welcomes one of these little children in my name welcomes
            me; and whoever welcomes me does not welcome me but the One who sent
            me.”
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="/donate"
              className="bg-blue-800 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-center text-sm"
            >
              Donate
            </a>
            <a
              href="/volunteer"
              className="border border-blue-700 text-blue-700 font-semibold py-2 px-5 rounded-lg hover:bg-blue-100 transition-colors duration-300 text-center text-sm"
            >
              Volunteer
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
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
          </div>

          {/* Floating Decorative Circle */}
          <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-yellow-400/40 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
