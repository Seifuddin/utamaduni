"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Updated programs with images instead of icons
const programs = [
  {
    image: "/images/WhatsApp Image 2025-09-28 at 02.00.50.jpeg",
    title: "Child Support",
    description:
      "Caring for orphans and vulnerable children by providing education, protection, and hope.",
  },
  {
    image: "/images/WhatsApp Image 2025-09-28 at 02.00.50.jpeg",
    title: "Basic Needs",
    description:
      "Offering food, clothing, and shelter to families in need to restore dignity and hope.",
  },
  {
    image: "/images/WhatsApp Image 2025-09-28 at 02.00.50.jpeg",
    title: "Community Engagement",
    description:
      "Hosting cultural-driven charity events that unite communities through compassion.",
  },
  {
    image: "/images/WhatsApp Image 2025-09-28 at 02.00.50.jpeg",
    title: "Skills & Empowerment",
    description:
      "Training and equipping people with sustainable skills for long-term development.",
  },
  {
    image: "/images/WhatsApp Image 2025-09-28 at 02.00.50.jpeg",
    title: "Cultural Identity",
    description:
      "Strengthening cultural values as a foundation for unity, compassion, and resilience.",
  },
  {
    image: "/images/WhatsApp Image 2025-09-28 at 02.00.50.jpeg",
    title: "Cultural Identity",
    description:
      "Strengthening cultural values as a foundation for unity, compassion, and resilience.",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-gray-50 relative" id="programs">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 font-serif mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          At Utamaduni, we work to restore hope and dignity through programs that
          uplift children, empower families, and strengthen communities.
        </p>

        {/* Programs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-md shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Program Image */}
              <div className="relative w-full h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-blue-900 font-serif mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/get-involved"
            className="px-6 py-3 rounded-xl text-white font-semibold bg-blue-900 hover:bg-blue-700 transition-colors shadow-lg"
          >
            Support Our Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
