"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

/* =======================
   Icon
   ======================= */
const Icon = ({ children }) => (
  <div className="w-10 h-10 rounded-full bg-pink-700 flex items-center justify-center text-white shadow-sm">
    {children}
  </div>
);

/* =======================
   DATA
   ======================= */
const programs = [
  {
    image: "/images/childsupport.webp",
    title: "Children in Vulnerable Situations",
    description:
      "We create safe environments where children can learn, heal, and grow with dignity and stability.",
    details:
      "Long-term care programs focused on education, mentorship, emotional healing, and protection.",
    icon: "👶",
    featured: true,
  },
  {
    image: "/images/hiv.webp",
    title: "HIV & Community Health Support",
    description:
      "We support individuals living with HIV through care, awareness, and stigma reduction programs.",
    details:
      "Medical access, counseling, outreach, and community education initiatives.",
    icon: "❤️",
  },
  {
    image: "/images/Disabilities.jpg",
    title: "Inclusion for Persons with Disabilities",
    description:
      "We remove barriers to education, employment, and participation in society.",
    details:
      "Assistive support, training programs, advocacy, and empowerment initiatives.",
    icon: "♿",
  },
  {
    image: "/images/elderly_villagers.jpg",
    title: "Care for the Elderly",
    description:
      "We ensure dignity, companionship, and care for elderly individuals in vulnerable situations.",
    details:
      "Home visits, healthcare support, and social inclusion programs.",
    icon: "🧓",
  },
  {
    image: "/images/Street-family.jpg",
    title: "Street-Connected Children",
    description:
      "We support rehabilitation and reintegration of children living on the streets.",
    details:
      "Education, shelter, mentorship, and long-term reintegration support.",
    icon: "🏙️",
  },
  {
    image: "/images/refugee-families-2.jpeg",
    title: "Refugees & Displaced Families",
    description:
      "We provide relief and long-term recovery support for displaced families.",
    details:
      "Emergency aid, education, psychosocial care, and livelihood rebuilding.",
    icon: "🧳",
  },
  {
    image: "/images/culturalpreservation.jpg",
    title: "Community Empowerment & Livelihoods",
    description:
      "We help families build sustainable income through skills training and entrepreneurship support.",
    details:
      "We focus on long-term independence through vocational training, small business support, and community development programs.",
    icon: "🌱",
  },
];

/* =======================
   COMPONENT
   ======================= */
export default function Programs() {
  // ✅ FIX: start with null (not programs[0])
  const [active, setActive] = useState(null);

  const featured = programs.find((p) => p.featured);
  const others = programs.filter((p) => !p.featured);

  return (
    <section className="py-28 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* FEATURED SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* TEXT */}
          <div className="flex flex-col justify-center">
            <div className="max-w-2xl mb-7">
              <p className="text-sm uppercase tracking-wide font-semibold text-pink-900 mb-2">
                Our Programs
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Areas of <span className="text-pink-900">Impact</span>
              </h2>

              <p className="mt-4 text-gray-800 leading-relaxed">
                We work across vulnerable communities with long-term programs designed
                to restore dignity, opportunity, and stability.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Why this work matters
            </h3>

            <p className="text-gray-800 leading-relaxed mb-4">
              Vulnerability is not just about lack of resources—it is about lack of
              stability, care, and opportunity.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[320px] rounded overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-0 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Icon>{featured.icon}</Icon>
                <span className="text-xs tracking-[0.25em] uppercase">
                  Featured Program
                </span>
              </div>

              <h3 className="text-2xl font-semibold">
                {featured.title}
              </h3>

              <p className="mt-2 text-sm text-white/80 max-w-md">
                {featured.description}
              </p>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((p, i) => (
            <div
              key={i}
              onClick={() => setActive(p)}
              className="group cursor-pointer bg-white border border-pink-200 rounded overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-44">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition duration-700"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-pink-700 text-2xl">{p.icon}</span>
                  <h4 className="font-semibold text-gray-900">
                    {p.title}
                  </h4>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div
          onClick={() => setActive(null)} // ✅ close on backdrop
          className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()} // ✅ prevent close when clicking inside
            className="bg-white max-w-md w-full rounded-2xl p-6"
          >
            <div className="relative w-full h-44 mb-4">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {active.title}
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              {active.details}
            </p>

            <button
              onClick={() => setActive(null)}
              className="mt-6 w-full bg-pink-700 text-white py-2 rounded-md hover:bg-pink-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}