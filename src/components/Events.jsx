"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    title: "Utamaduni Visit to Oyugis Children's Home",
    date: "September 2025",
    img: "/images/WhatsApp Image 2025-10-04 at 23.11.57 (2).jpeg",
    description:
      "Engaged children with fun learning activities, storytelling, and cultural workshops.",
  },
  {
    title: "Utamaduni Visit at Mathare Slums in Nairobi",
    date: "August 2025",
    img: "/images/utamaduni at mathare/_DSC8647.jpg",
    description:
      "Organized educational programs, community cleanups, and cultural awareness initiatives.",
  },
  {
    title: "Utamaduni Visit at Malia Children's Center",
    date: "July 2025",
    img: "/images/prisca.jpeg",
    description:
      "Conducted workshops, games, and mentorship sessions for children, spreading hope and joy.",
  },
];

export default function EventGallerySlider() {
  return (
    <section className="bg-amber-50 py-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl px-6 ">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wide font-semibold text-pink-700 mb-2">
            Past Events & Highlights
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
            Explore Our Community Impact
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-pink-700 rounded-full mx-auto mb-6"
          ></motion.div>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto font-medium text-center md:text-lg mb-6">
            A glimpse into the workshops, campaigns, and visits that inspired and empowered communities.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
              >
                {/* Event Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Event Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-blue-900 fontserif md:text-lg my-2">
                    {event.title}
                  </h3>
                  {/* <p className="text-sm text-gray-700 italic mb-2">{event.date}</p> */}
                  <p className="text-gray-600 text-base mb-4">{event.description}</p>
                  <a
                    href="/gallery"
                    className="mt-auto inline-block bg-white border border-gray-300 text-blue-800 text-center text-sm px-4 py-2 rounded font-semibold hover:bg-blue-800 hover:text-white transition"
                  >
                    View Event
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper styles */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #1d4ed8;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 9999px;
            padding: 6px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            width: 28px;
            height: 28px;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: #1d4ed8;
            color: white;
          }
          .swiper-pagination-bullet {
            background: #f472b6;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #be185d;
          }
        `}</style>
      </div>
    </section>
  );
}
