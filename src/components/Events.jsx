"use client";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    title: "Cultural Night for Hope",
    date: "October 20, 2025",
    location: "Nairobi, Kenya",
    description:
      "An evening of cultural performances and fundraising to support orphans and vulnerable children.",
  },
  {
    title: "Food Drive for Families",
    date: "November 5, 2025",
    location: "Kisumu, Kenya",
    description:
      "Join us in distributing food and essentials to needy households across the community.",
  },
  {
    title: "Children’s Talent & Culture Festival",
    date: "December 12, 2025",
    location: "Mombasa, Kenya",
    description:
      "A day of showcasing children’s talents while celebrating unity and cultural identity.",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon-700">
          Upcoming Events
        </h2>
        <p className="mt-3 text-blue-700 max-w-2xl mx-auto">
          Join us in our upcoming charity and cultural events as we spread hope,
          empower families, and strengthen communities.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 shadow-md rounded-2xl p-6 border-t-4 border-maroon-700 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-maroon-700 mb-2">
              {event.title}
            </h3>
            <div className="flex items-center text-gray-700 mb-2">
              <CalendarDays className="w-5 h-5 text-blue-700 mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-700 mb-4">
              <MapPin className="w-5 h-5 text-blue-700 mr-2" />
              <span>{event.location}</span>
            </div>
            <p className="text-gray-600">{event.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#"
          className="bg-maroon-700 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition"
        >
          View All Events
        </motion.a>
      </div>
    </section>
  );
}
