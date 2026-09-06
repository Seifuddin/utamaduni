"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Eye, Heart, X, Sparkles } from "lucide-react";

/* =======================
   Icon Component
   ======================= */
const Icon = ({ children }) => (
  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-pink-600 flex items-center justify-center text-white shadow-md">
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
   MAIN COMPONENT
   ======================= */
export default function Programs() {
  const [active, setActive] = useState(null);

  const featured = programs.find((p) => p.featured);
  const others = programs.filter((p) => !p.featured);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="text-center mb-10 md:mb-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg shadow-pink-200/50 mb-4 border border-white/50"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                    <span className="text-xs font-medium text-pink-700 tracking-wider">Our Programs</span>
                  </motion.div>
        
                  <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                    Areas of
                    <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700">
                      Impact
                    </span>
                  </h2>
        
                  <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full mb-4" />
        
                  <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    Restoring dignity, opportunity, and stability across vulnerable communities.
                  </p>
                </motion.div>

        {/* FEATURED */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-lg font-semibold text-gray-900">Why this work matters</h3>
            <p className="text-gray-700 leading-relaxed mt-1 max-w-lg">
              Vulnerability is not just about lack of resources—it is about lack of
              stability, care, and opportunity.
            </p>
            <div className="hidden flex items-center gap-3 mt-4">
              <span className="text-sm font-medium text-blue-700 bg-blue-100/60 px-4 py-1.5 rounded-full">
                Featured Program
              </span>
            </div>
          </div>

          <div className="relative h-[200px] sm:h-[220px] rounded-xl overflow-hidden order-1 lg:order-2 shadow-lg">
            <Image src={featured.image} alt={featured.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Icon>{featured.icon}</Icon>
                  <span className="text-xs tracking-[0.2em] uppercase font-medium">Featured</span>
                </div>
                <h3 className="text-xl font-semibold mt-1">{featured.title}</h3>
                <p className="text-sm text-white/80 max-w-md">{featured.description}</p>
              </div>
              <div className="hidden flex gap-2">
                <button className="bg-blue-950 text-white px-3 py-2 rounded -lg text-sm flex items-center gap-1 hover:opacity-90 transition shadow-md">
                  <Heart size={15} /> Donate
                </button>

                <button
                  onClick={() => setActive(featured)}
                  className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded -lg text-sm flex items-center gap-1 hover:bg-white/30 transition"
                >
                  <Eye size={15} /> View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded -xl border border-blue-100/60 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-sm">
                  <span className="text-lg">{p.icon}</span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                  {p.title}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed mt-1 line-clamp-2">
                  {p.description}
                </p>

                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-blue-50">
                  <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium text-white bg-blue-950 to-pink-600 hover:opacity-90 py-2 rounded -lg transition shadow-sm">
                    <Heart size={14} /> Donate
                  </button>
                  <button
                    onClick={() => setActive(p)}
                    className="flex-1 flex border border-gray-200 items-center justify-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-50 /80 hover:bg-blue-100 py-2 rounded -lg transition"
                  >
                    <Eye size={14} /> View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="relative h-48">
              <Image src={active.image} alt={active.title} fill className="object-cover" />
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-white rounded-full p-1.5 hover:bg-black/50 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{active.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">{active.title}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{active.details}</p>

              <div className="flex gap-3 mt-6">
               <button className="flex-1 bg-blue-950 text-white py-2 rounded -lg text-sm font-medium hover:opacity-90 transition shadow-md flex items-center justify-center gap-2">
                  <Heart size={16} /> Donate Now
                </button>
                <button
                  onClick={() => setActive(null)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded -lg text-sm font-medium transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}