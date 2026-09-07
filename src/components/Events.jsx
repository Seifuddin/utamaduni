"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, ArrowRight, Users, Clock, Sparkles } from "lucide-react";

/* =======================
   DATA
   ======================= */
const events = [
  {
    id: 1,
    title: "Utamaduni Visit to Oyugis Children's Home",
    date: "September 2025",
    location: "Oyugis, Kenya",
    img: "/images/WhatsApp Image 2025-10-04 at 23.11.57 (2).jpeg",
    description:
      "Engaged children with storytelling, cultural learning, and creative expression sessions.",
    participants: 45,
    duration: "2 days",
    category: "Children",
  },
  {
    id: 2,
    title: "Community Outreach in Mathare",
    date: "August 2025",
    location: "Mathare, Nairobi",
    img: "/images/utamaduni at mathare/_DSC8647.jpg",
    description:
      "Led education drives, clean-up initiatives, and empowerment workshops within the community.",
    participants: 120,
    duration: "3 days",
    category: "Community",
  },
  {
    id: 3,
    title: "Malia Children's Center Engagement",
    date: "July 2025",
    location: "Malia Center",
    img: "/images/prisca.jpeg",
    description:
      "Mentorship, play therapy, and emotional support sessions for children in care.",
    participants: 30,
    duration: "1 day",
    category: "Children",
  },
  {
    id: 4,
    title: "Women's Empowerment Workshop",
    date: "June 2025",
    location: "Kisumu, Kenya",
    img: "/images/culturalpreservation.jpg",
    description:
      "Skills training and entrepreneurship support for women in rural communities.",
    participants: 65,
    duration: "2 days",
    category: "Women",
  },
];

/* =======================
   MAIN COMPONENT
   ======================= */
export default function EventGallery() {
  const [activeId, setActiveId] = useState(events[0].id);
  const activeEvent = events.find((e) => e.id === activeId);

  return (
    <section className="py-16 bg-slate-50">
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
                            <span className="text-xs font-medium text-pink-700 tracking-wider">Field Stories</span>
                          </motion.div>
                
                          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                            Moments That
                            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700">
                              Shape Our Impact
                            </span>
                          </h2>
                
                          <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full mb-4" />
                
                          <p className="text-gray-600 max-w-2xl mx-auto text-base m-base leading-relaxed">
                            Lived experiences of connection, healing, and transformation across communities we serve.
                          </p>
                        </motion.div>

        {/* HERO FEATURED */}
        <div className="relative rounded -2xl overflow-hidden mb-8 h-[340px] sm:h-[400px] group">
          <img
            src={activeEvent.img}
            alt={activeEvent.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

          {/* Featured Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
              Featured Story
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/70 mb-3">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {activeEvent.date}
              </span>
              <span className="w-px h-4 bg-white/30"></span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {activeEvent.location}
              </span>
              <span className="w-px h-4 bg-white/30"></span>
              <span className="flex items-center gap-1.5">
                <Users size={14} /> {activeEvent.participants} participants
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {activeEvent.title}
            </h3>
            <p className="text-white/80 text-sm max-w-xl">
              {activeEvent.description}
            </p>

            <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-pink-600 px-5 py-2 rounded-lg hover:opacity-90 transition shadow-lg">
              Read Full Story <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* GRID CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => setActiveId(event.id)}
              className={`
                group cursor-pointer rounded bg-amber-50 border border-gray-200 overflow-hidden transition-all duration-300
                ${activeId === event.id
                  ? "ring-2 ring-offset-2 ring-blue-500 shadow-lg scale-[1.02]"
                  : "hover:shadow-lg hover:scale-[1.01]"
                }
              `}
            >
              <div className="relative h-40">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                <div className="absolute top-2 right-2">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-[12px] font-medium px-2 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>

                <div className="absolute bottom-2 left-3 right-3">
                  <p className="text-white/80 text-[12px] flex items-center gap-1.5">
                    <Calendar size={11} /> {event.date}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-white">
                <h4 className="font-semibold text-slate-800 textbase leading-tight line-clamp-1">
                  {event.title}
                </h4>
                <p className="text-slate-500 text-md mt-1 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200">
                  <div className="flex items-center gap-1.5 text-[12px] text-slate-400">
                    <Clock size={14} />
                    <span>{event.duration}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveId(event.id);
                    }}
                    className="text-sm font-medium text-blue-600 hover:text-pink-600 transition flex items-center gap-1"
                  >
                    View <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL CTA */}
        <div className="mt-8 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition group"
          >
            <span className="border-b border-slate-300 group-hover:border-slate-600 pb-0.5">
              Explore Full Gallery
            </span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
          </a>
        </div>

        {/* STATS BAR */}
        <div className="hidden mt-10grid grid-cols-2sm:grid-cols-4 gap-4 bg-white rounded-xl border border-slate-200/60 p-5">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">12+</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider">Events Hosted</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">500+</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider">Lives Touched</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">8</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider">Communities</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">100%</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider">Heart & Soul</p>
          </div>
        </div>

      </div>
    </section>
  );
}