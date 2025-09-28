"use client";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Back-to-School Drive",
    date: "August 2025",
    img: "/images/culturalpreservation.jpg", // replace with your image
    description:
      "Distributed school supplies and uniforms to over 200 orphans and vulnerable children.",
  },
  {
    title: "Cultural Charity Gala",
    date: "July 2025",
    img: "/images/communityoutreach.jpg", // replace with your image
    description:
      "Raised funds through music, dance, and cultural showcases to support community programs.",
  },
  {
    title: "Food Relief Program",
    date: "June 2025",
    img: "/images/childrenwelfare.webp", // replace with your image
    description:
      "Provided food packages to more than 300 families across Nairobi and Kisumu.",
  },
];

export default function PastEvents() {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon-700">
          Past Events & Highlights
        </h2>
        <p className="mt-3 text-blue-700 max-w-2xl mx-auto">
          A look back at the moments that inspired hope and strengthened our
          communities.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-maroon-700 mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-blue-700 mb-3">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
