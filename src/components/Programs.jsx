"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Updated programs with extra details
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
    <section className="py-20 bg-amber-50 relative" id="programs">
      <div className="mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-pink-600 font-serif mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          At Utamaduni, we work to restore hope and dignity through programs that
          uplift children, empower families, and strengthen communities.
        </p>

        {/* Programs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-100 rounded-md shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Program Image */}
              <div className="relative w-full h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-pink-600 font-serif mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1">
                  {program.description}
                </p>
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="font-serif mt-4 bg-blue-900 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition"
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
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative overflow-hidden">
            {/* Image */}
            <div className="relative w-full h-56 mb-4 rounded-md overflow-hidden">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              {selectedProgram.title}
            </h3>
            <p className="text-gray-700 mb-6">{selectedProgram.details}</p>

            {/* Close button */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
