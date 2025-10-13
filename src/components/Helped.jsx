"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const people = [
  {
    title: "Street Children",
    description:
      "Providing shelter, education, and hope for children living on the streets through care and mentorship programs.",
    image: "/images/childsupport.webp",
  },
  {
    title: "Vulnerable Families",
    description:
      "Supporting struggling families with food, clothing, and empowerment programs to build a brighter future.",
    image: "/images/childsupport.webp",
  },
  {
    title: "Elderly & Disabled",
    description:
      "Offering love, medical care, and dignity to the elderly and people with disabilities within our communities.",
    image: "/images/childsupport.webp",
  },
];

export default function PeopleWeHelp() {
  return (
    <section className="relative bg-amber-50 text-amber-50 py-24 px-6">
      <div className="absolute inset-0 bg-[url('/images/african-pattern.png')] bg-cover bg-center opacity-10" />
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
        >
          The People We Help
        </motion.h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-10 rounded-full"></div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-600 max-w-5xl mx-auto mb-16"
        >
          At Utamaduni, we believe every person deserves dignity, love, and
          opportunity. Our programs reach those most in need — from children and
          families to the elderly and youth — empowering them to rise with hope.
        </motion.p>

        {/* People Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {people.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white text-gray-800 rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={person.image}
                  alt={person.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-left text-xl font-semibold text-blue-950 mb-2">
                  {person.title}
                </h3>
                {/* People Grid */}
                <p className="text-left text-gray-700 text-sm leading-relaxed">
                  {person.description}
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
