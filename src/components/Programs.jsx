"use client";

import Image from "next/image";
import { useState } from "react";

/* =======================
   🔹 Custom SVG Icons
   ======================= */
const ChildIcon = (
  <svg
    width="26"
    height="26"
    fill="white"
    viewBox="0 0 24 24"
  >
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm7 2h-2.1c-.9 0-1.7.6-2 1.5-.5 1.4-1.8 2.5-3.4 2.5s-2.9-1.1-3.4-2.5c-.3-.9-1.1-1.5-2-1.5H4c-1.1 0-2 .9-2 2v3c0 .5.4 1 1 1h18c.6 0 1-.5 1-1v-3c0-1.1-.9-2-2-2z" />
  </svg>
);

const HivIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
    <path d="M12 2a7 7 0 00-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1114.5 9 2.5 2.5 0 0112 11.5z"/>
  </svg>
);

const DisabilityIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
    <path d="M12 2a3 3 0 110 6 3 3 0 010-6zm5 13h-3l-2-5H9v2h1.2l2 5H17a2 2 0 110 4h-1a2 2 0 110-4zM6 22a4 4 0 110-8 4 4 0 010 8z"/>
  </svg>
);

const ElderlyIcon = (
  <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
    <path d="M12 4a3 3 0 110 6 3 3 0 010-6zm5 8h-1l-2 7h2l3 3 2-2-4-4 1-4h2V9h-3zM6 11H4v10h2V11z"/>
  </svg>
);

const StreetIcon = (
  <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
    <path d="M12 3l8 4v4c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V7l8-4zm0 6a2 2 0 100 4 2 2 0 000-4z"/>
  </svg>
);

const RefugeeIcon = (
  <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z"/>
  </svg>
);

/* =======================
   🔹 Programs Array
   ======================= */
const programs = [
  {
    image: "/images/childsupport.webp",
    title: "Orphans and Vulnerable Children",
    description:
      "Providing shelter, education, and emotional support to vulnerable children.",
    details:
      "We dedicate this program to supporting orphaned and vulnerable kids through health, education, and emotional care.",
    icon: ChildIcon,
  },
  {
    image: "/images/hiv.webp",
    title: "Persons Living with HIV/AIDS",
    description:
      "Offering healthcare, counseling, and awareness programs.",
    details:
      "We empower individuals living with HIV/AIDS with medical support and anti-stigma campaigns.",
    icon: HivIcon,
  },
  {
    image: "/images/Disabilities.jpg",
    title: "Persons with Disabilities",
    description:
      "Supporting inclusion through accessibility and empowerment.",
    details:
      "This initiative empowers persons with disabilities through tools, education, and skills training.",
    icon: DisabilityIcon,
  },
  {
    image: "/images/elderly_villagers.jpg",
    title: "Elderly Persons",
    description:
      "Providing care and companionship to the elderly.",
    details:
      "We support elderly individuals with medical services, home visits, and social programs.",
    icon: ElderlyIcon,
  },
  {
    image: "/images/Street-family.jpg",
    title: "Street Children",
    description:
      "Rehabilitating and educating street children.",
    details:
      "We provide shelter, mentorship, and education for street children and vulnerable youth.",
    icon: StreetIcon,
  },
  {
    image: "/images/refugee-families-2.jpeg",
    title: "Refugees and Displaced Families",
    description:
      "Offering emergency support and empowerment.",
    details:
      "We help displaced families rebuild through education, psychosocial support, and basic needs.",
    icon: RefugeeIcon,
  },
];

/* =======================
   🔹 Component
   ======================= */
export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section className="py-24 bg-amber-50 relative overflow-hidden" id="programs">

      <div className="mx-auto px-6 text-center max-w-7xl">

        <p className="text-sm uppercase tracking-wide font-semibold text-pink-700 mb-2">
          what we do
        </p>

        <h2 className="text-2xl md:text-4xl font-bold fontserif text-gray-900 mb-4">
          Our Projects & Focus Areas
        </h2>

        <div className="h-1 w-20 bg-pink-700 mx-auto rounded-full mb-6"></div>

        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          We dedicate our programs to improving the lives of vulnerable and marginalized groups through compassion, empowerment, and sustainable support.
        </p>

        {/* =======================
            🔹 Program Grid
            ======================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {programs.map((program, i) => (
            <div
              key={i}
              className="group bg-white border border-blue-100 rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full h-40">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-1 text-left">

                {/* ICON + TITLE */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center 
                    bg-gradient-to-br from-blue-700 via-blue-600 to-pink-600 shadow-md"
                  >
                    {program.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 fontserif text-lg">
                    {program.title}
                  </h3>
                </div>

                <p className="text-gray-600 flex-1">{program.description}</p>

                <button
                  onClick={() => setSelectedProgram(program)}
                  className="mt-4 bg-blue-800 text-white text-sm px-4 py-2 rounded font-semibold hover:bg-blue-900 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =======================
          🔹 Modal
          ======================= */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-md w-full rounded-lg shadow-xl overflow-hidden">

            <div className="relative w-full h-44">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {selectedProgram.title}
              </h3>

              <p className="text-gray-700 text-sm mb-4">
                {selectedProgram.details}
              </p>

              <button
                onClick={() => setSelectedProgram(null)}
                className="bg-gradient-to-r from-pink-600 to-blue-900 text-white px-4 py-2 text-sm rounded-md shadow hover:opacity-90 transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
