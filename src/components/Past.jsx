"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const highlights = [
  {
    title: "Back-to-School Drive",
    date: "August 2025",
    img: "/images/WhatsApp Image 2025-09-28 at 02.00.51 (2).jpeg",
    description:
      "Distributed school supplies and uniforms to over 200 orphans and vulnerable children.",
  },
  {
    title: "Cultural Charity Gala",
    date: "July 2025",
    img: "/images/WhatsApp Image 2025-09-28 at 02.00.51.jpeg",
    description:
      "Raised funds through music, dance, and cultural showcases to support community programs.",
  },
  {
    title: "Food Relief Program",
    date: "June 2025",
    img: "/images/WhatsApp Image 2025-09-28 at 02.00.51 (1).jpeg",
    description:
      "Provided food packages to more than 300 families across Nairobi and Kisumu.",
  },
];

export default function PastEvents() {
  return (
    <section className="bg-amber-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-pink-600">
          Past Events & Highlights
        </h2>
        <p className="mt-3 text-gray-800 max-w-2xl mx-auto">
          A look back at the moments that inspired hope and strengthened our
          communities.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {highlights.map((event, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-md shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 font-serif mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-pink-600 mb-3">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper styles */}
      <style jsx global>{`
        /* Navigation arrows */
        .swiper-button-next,
        .swiper-button-prev {
          color: #1d4ed8; /* Tailwind blue-700 */
          background: rgba(255, 255, 255, 0.9);
          border-radius: 9999px;
          padding: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #1d4ed8;
          color: white;
        }

        /* Pagination dots */
        .swiper-pagination-bullet {
          background: #93c5fd; /* Tailwind blue-300 */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #1d4ed8; /* Tailwind blue-700 */
        }
      `}</style>
    </section>
  );
}
