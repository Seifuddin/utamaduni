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
    title: "Cultural Events",
    date: "August 2025",
    img: "/images/WhatsApp Image 2025-10-04 at 23.11.07.jpeg",
    description:
      "Hosted cultural events to intergrate heritage with charitable initiatives.",
  },
  {
    title: "Health Awareness",
    date: "July 2025",
    img: "/images/utamaduni at mathare/_DSC8974.jpg",
    description:
      "Conducted health awareness programs and housekeeping support for vulnerable households.",
  },
  {
    title: "Food Relief",
    date: "June 2025",
    img: "/images/WhatsApp Image 2025-10-04 at 23.11.57 (2).jpeg",
    description:
      "Successfully organized food distribution events in Mathare and other communities.",
  },
  {
    title: "Environmental Care",
    date: "June 2025",
    img: "/images/utamaduni at mathare/_DSC8723.jpg",
    description:
      "Partnered with local institutions for community clean-up and empowerment projects.",
  },
];

export default function PastEvents() {
  return (
    <section className="bg-amber-50 py-16 md:px-12 lg:px-16">
      <div className="mx-auto px-6 max-w-7xl">
      {/* Title */}
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-wide font-semibold text-pink-700 mb-2">
            Achievements
          </p>
        <h2 className="text-2xl md:text-4xl fontserif font-bold text-gray-900 mb-4">
          Our Achievements as Utamaduni
        </h2>
        <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    transition={{ duration: 0.5 }}
                    className="h-1 bg-pink-700 rounded-full mx-auto mb-6"
                  ></motion.div>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto font-medium text-center md:text-lg mb-6">
          A look back at the moments that inspired hope and strengthened our
          communities.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
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
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
            >
              {/* Smaller image height */}
              <div className="h-40 overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-blue-900 fontserif md:text-lg my-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-700 italic mb-2">{event.date}</p>
                <p className="text-gray-600 text-base">{event.description}</p>
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
          color: #be185d;
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
          background: #be185d;
          color: white;
        }

        /* Pagination dots */
        .swiper-pagination-bullet {
          background: #93c5fd;
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
