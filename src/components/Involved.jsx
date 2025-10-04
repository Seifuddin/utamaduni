"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Users, HandCoins } from "lucide-react";
import Link from "next/link";

const involvementOptions = [
  {
    icon: <HandCoins className="w-6 h-6 text-blue-600" />,
    title: "Donate",
    description:
      "Provide food, shelter, and education for vulnerable children and families.",
    cta: "Donate",
    href: "/donate",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Volunteer",
    description:
      "Mentor children, support events, or share skills to empower communities.",
    cta: "Volunteer",
    href: "/volunteer",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-blue-600" />,
    title: "Partner",
    description:
      "Collaborate with us through corporate or cultural partnerships.",
    cta: "Partner",
    href: "/partners",
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="py-8 bg-amber-50">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-xl md:text-2xl font-bold text-pink-500 mb-2 font-serif"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get Involved
        </motion.h2>
        <p className="text-gray-600 max-w-md mx-auto mb-6 text-xs">
          Your support brings hope and transformation. Choose how you’d like to
          join us today.
        </p>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {involvementOptions.map((option, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md p-4 flex flex-col justify-between text-center transition h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center flex-grow">
                <div className="mb-2 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                  {option.icon}
                </div>
                <h3 className="text-sm font-semibold font-serif text-blue-800 mb-1">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 leading-snug">
                  {option.description}
                </p>
              </div>
              <Link
                href={option.href}
                className="mt-auto py-2.5 px-4 text-xs rounded bg-blue-950 text-white font-medium font-serif hover:bg-red-700 transition"
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
