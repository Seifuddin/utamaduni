"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Users, HandCoins } from "lucide-react";
import Link from "next/link";

const involvementOptions = [
  {
    icon: <HandCoins className="w-8 h-8 text-blue-600" />,
    title: "Donate",
    description:
      "Provide food, shelter, and education for vulnerable children and families.",
    cta: "Donate",
    href: "/donate",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Volunteer",
    description:
      "Mentor children, support events, or share skills to empower communities.",
    cta: "Volunteer",
    href: "/volunteer",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-red-600" />,
    title: "Partner",
    description:
      "Collaborate with us through corporate or cultural partnerships.",
    cta: "Partner",
    href: "/partners",
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-pink-500 mb-4 font-serif"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get Involved
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 text-sm">
          Your support brings hope and transformation. Choose how you’d like to
          join us today.
        </p>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {involvementOptions.map((option, i) => (
            <motion.div
              key={i}
              className="bg-white rounded bordr border-gray-100 shadow-md hover:shadow-md p-5 flex flex-col items-center text-center transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                {option.icon}
              </div>
              <h3 className="text-md font-semibold font-serif text-pink-600 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 text-xs mb-4">
                {option.description}
              </p>
              <Link
                href={option.href}
                className="py-2 px-10 text-sm rounded-md bg-blue-900 text-white font-medium font-serif hover:bg-red-700 transition"
              >
                {option.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
