"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Programs Data
const programs = [
  {
    image: "/images/childsupport.webp",
    title: "Child Support",
    description:
      "Caring for orphans and vulnerable children by providing education, protection, and hope.",
    details:
      "Through Child Support, we ensure vulnerable children access quality education, healthcare, and a safe environment to grow and thrive.",
  },
  {
    image: "/images/feeding.jpg",
    title: "Basic Needs",
    description:
      "Offering food, clothing, and shelter to families in need to restore dignity and hope.",
    details:
      "We provide urgent supplies like meals, clean water, and shelter to restore hope and dignity for struggling families.",
  },
  {
    image: "/images/community.jpeg",
    title: "Community Engagement",
    description:
      "Hosting cultural-driven charity events that unite communities through compassion.",
    details:
      "Our cultural and charity events bring people together to support causes, celebrate unity, and spread compassion across communities.",
  },
  {
    image: "/images/skills.webp",
    title: "Skills & Empowerment",
    description:
      "Training and equipping people with sustainable skills for long-term development.",
    details:
      "We train youth and adults in practical skills like tailoring, IT, and entrepreneurship, preparing them for sustainable futures.",
  },
  {
    image: "/images/health.jpg",
    title: "Health & Wellbeing",
    description:
      "Providing access to medical care, mental health support, and clean environments for vulnerable families.",
    details:
      "Our Health & Wellbeing initiative ensures that communities receive essential healthcare services, hygiene programs, and mental health support, creating healthier and stronger futures.",
  },
  {
    image: "/images/culture.jpg",
    title: "Cultural Identity",
    description:
      "Strengthening cultural values as a foundation for unity, compassion, and resilience.",
    details:
      "We preserve and promote cultural traditions that inspire compassion, strengthen unity, and build resilience in communities.",
  },
];

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section className="py-12 relative overflow-hidden" id="programs">
      {/* 🔹 Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-300 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="mx-auto px-6 lg:px-12 text-center max-w-7xl">
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-pink-700 font-serif mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-xl mx-auto mb-8 text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          At Utamaduni, we restore hope and dignity through programs that
          uplift children, empower families, and strengthen communities.
        </motion.p>

        {/* Programs Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              className="group bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Program Image */}
              <div className="relative w-full h-36 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-blue-900 font-serif text-lg mb-1">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1">{program.description}</p>
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="font-serif mt-3 bg-gradient-to-r from-pink-600 to-blue-900 text-white text-xs px-3 py-1.5 rounded-md shadow hover:shadow-md transition"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          {/* 🔹 Animated Glow Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-lg shadow-xl max-w-md w-full overflow-hidden"
          >
            {/* 🔹 Modal Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-blue-100"></div>
            
            {/* Content Layer */}
            <div className="relative p-5">
              {/* Image */}
              <div className="relative w-full h-44 mb-3 rounded-md overflow-hidden shadow-md">
                <Image
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {selectedProgram.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {selectedProgram.details}
              </p>

              {/* Close button */}
              <button
                onClick={() => setSelectedProgram(null)}
                className="bg-gradient-to-r from-pink-600 to-blue-900 text-white px-4 py-2 text-sm rounded-md shadow hover:from-pink-700 hover:to-blue-800 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
