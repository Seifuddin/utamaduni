"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// 🔹 Projects Data (replaces the old programs)
const programs = [
  {
    image: "/images/childsupport.webp",
    title: "Orphans and Vulnerable Children",
    description:
      "Providing shelter, education, and emotional support to children without families, helping them build a hopeful future.",
    details:
      "We dedicate this project to supporting children who are orphaned or vulnerable by providing access to education, healthcare, and safe environments where they can grow with dignity and hope.",
  },
  {
    image: "/images/hiv.webp",
    title: "Persons Living with HIV/AIDS",
    description:
      "Offering healthcare, counseling, and awareness programs to promote dignity, hope, and healthy living.",
    details:
      "Through this project, we offer medical support, mental health counseling, and awareness campaigns that empower individuals living with HIV/AIDS to live healthy and fulfilling lives free from stigma.",
  },
  {
    image: "/images/Disabilities.jpg",
    title: "Persons with Disabilities",
    description:
      "Supporting inclusion through accessibility programs, education, and skills empowerment for persons with disabilities.",
    details:
      "This initiative focuses on providing training, assistive tools, and inclusive community engagement for persons with disabilities, ensuring they are empowered and included in every part of society.",
  },
  {
    image: "/images/elders.png",
    title: "Elderly Persons",
    description:
      "Providing care, companionship, and medical assistance to elderly people who lack family or social support.",
    details:
      "This project supports elderly individuals through companionship programs, home visits, and healthcare services, ensuring they live with dignity and comfort in their later years.",
  },
  {
    image: "/images/Street-family.jpg",
    title: "Street Children",
    description:
      "Rehabilitating and educating street children and youth to help them become productive and confident members of society.",
    details:
      "We reach out to street children and vulnerable youth by providing education, shelter, and mentorship programs that transform their lives and open pathways to a brighter future.",
  },
  {
    image: "/images/refugee-families-2.jpeg",
    title: "Refugees and Displaced Families",
    description:
      "Offering emergency support, education, and empowerment to families affected by displacement and conflict.",
    details:
      "We provide refugees and displaced families with essential resources, psychosocial support, and education to rebuild their lives and regain a sense of stability and hope.",
  },
];

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section className="py-24 bg-amber-50 relative overflow-hidden" id="programs">
      {/* 🔹 Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-300 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="mx-auto px-6 lg:px-12 text-center max-w-7xl">
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Projects & Focus Areas
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-xl mx-auto mb-10 text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We dedicate our programs to improving the lives of vulnerable and marginalized groups through compassion, empowerment, and sustainable support.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              className="group bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 flex flex-col flex-1 text-left">
                <h3 className="font-bold text-blue-900 font-serif tex my-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1">{program.description}</p>
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="font-serif mt-3 bg-blue-900 text-white text-xs px-3 py-2.5 rounded-md shadow hover:shadow-md transition"
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
          {/* Glow Background */}
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
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-blue-100"></div>

            <div className="relative p-5">
              <div className="relative w-full h-44 mb-3 rounded-md overflow-hidden shadow-md">
                <Image
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {selectedProgram.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {selectedProgram.details}
              </p>

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
