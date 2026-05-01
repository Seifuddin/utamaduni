"use client";

import { useState } from "react";

/* =======================
   EVENTS
   ======================= */
const events = [
  {
    title: "Utamaduni Visit to Oyugis Children's Home",
    date: "September 2025",
    img: "/images/WhatsApp Image 2025-10-04 at 23.11.57 (2).jpeg",
    description:
      "Engaged children with storytelling, cultural learning, and creative expression sessions.",
  },
  {
    title: "Community Outreach in Mathare",
    date: "August 2025",
    img: "/images/utamaduni at mathare/_DSC8647.jpg",
    description:
      "Led education drives, clean-up initiatives, and empowerment workshops within the community.",
  },
  {
    title: "Malia Children's Center Engagement",
    date: "July 2025",
    img: "/images/prisca.jpeg",
    description:
      "Mentorship, play therapy, and emotional support sessions for children in care.",
  },
];

/* =======================
   COMPONENT
   ======================= */
export default function EventGallery() {
  const [active, setActive] = useState(events[0]);

  return (
    <section className="bg-amber-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-pink-700 mb-3">
            Field Stories
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Moments That 
            <span className="text-pink-900"> Shape Our Impact</span>
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            These are not just events. They are lived experiences of connection,
            healing, and transformation across communities we serve.
          </p>
        </div>

        {/* =======================
            FEATURED + LIST LAYOUT
            ======================= */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* FEATURED STORY */}
          <div className="relative h-[320px] md:h-[420px] rounded overflow-hidden shadow-lg">

            <img
              src={active.img}
              alt={active.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-0 p-6 text-white">

              <p className="text-xs text-pink-300 tracking-wide mb-2">
                {active.date}
              </p>

              <h3 className="text-2xl font-semibold">
                {active.title}
              </h3>

              <p className="mt-2 text-sm text-white/80 max-w-md">
                {active.description}
              </p>
            </div>
          </div>

          {/* STORY LIST */}
          <div className="flex flex-col gap-4">

            {events.map((event, i) => (
              <button
                key={i}
                onClick={() => setActive(event)}
                className={`text-left group p-4 rounded-xl border transition
                ${
                  active.title === event.title
                    ? "border-pink-700 bg-white shadow-sm"
                    : "border-gray-200 bg-white hover:border-pink-300"
                }`}
              >

                <p className="text-xs text-pink-700 mb-1">
                  {event.date}
                </p>

                <h4 className="font-semibold text-gray-900">
                  {event.title}
                </h4>

                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {event.description}
                </p>

              </button>
            ))}

            {/* CTA */}
            <div className="mt-4">
              <a
                href="/gallery"
                className="inline-flex items-center justify-center w-full px-3 py-1.5 rounded-md bg-pink-700 text-white hover:bg-pink-800 transition"
              >
                Explore Full Gallery →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}