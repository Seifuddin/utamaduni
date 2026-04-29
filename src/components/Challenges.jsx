"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartCrack, Users, Droplet, School } from "lucide-react";

export default function Challenges() {
  const challenges = [
    {
      icon: HeartCrack,
      title: "Poverty & Vulnerability",
      stat: "70% struggle with basic needs",
      description:
        "Families lack access to food, shelter, and healthcare.",
    },
    {
      icon: School,
      title: "Limited Education",
      stat: "1 in 3 miss quality education",
      description:
        "Financial hardship limits learning opportunities.",
    },
    {
      icon: Droplet,
      title: "Water & Sanitation",
      stat: "Clean water remains limited",
      description:
        "Water scarcity affects health and daily life.",
    },
    {
      icon: Users,
      title: "Youth Unemployment",
      stat: "High unemployment rates",
      description:
        "Lack of jobs reduces opportunity and stability.",
    },
  ];

  return (
    <section className="bg-[#f8f5f0] text-[#1a1a1a]">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center px-6 pt-14 pb-10">
        <p className="text-[10px] tracking-[0.35em] uppercase text-pink-500 mb-2">
          Our Challenges
        </p>

        <h2 className="text-2xl md:text-3xl font-light">
          The realities we face
        </h2>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6 pb-14 items-start">

        {/* LEFT COLUMN */}
        <div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Behind every statistic is a human story — families struggling,
            children missing opportunities, and communities under pressure.
          </p>

          {/* pink accent line */}
          <div className="w-8 h-[2px] bg-pink-500 my-5"></div>

          {/* IMAGE (NEW) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[220px] md:h-[260px] overflow-hidden"
          >
            <Image
              src="/images/feeding.jpg"
              alt="Utamaduni community work"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            {/* subtle luxury overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>

        </div>

        {/* RIGHT LIST */}
        <div className="divide-y divide-black/10">

          {challenges.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-3 py-4"
              >
                <Icon size={18} className="text-pink-500 mt-1" />

                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-pink-600 mt-0.5">
                    {item.stat}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>

      {/* CTA (UNCHANGED STRUCTURE, FULL WIDTH) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative w-full bg-[#050b1a] text-white py-14 px-6 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.15),transparent_60%)]" />

        <div className="max-w-3xl mx-auto relative z-10">

          <h3 className="text-lg font-semibold mb-2">
            Together, We Can Overcome
          </h3>

          <p className="text-sm text-white/70 mb-5">
            Each challenge is a call to action — to restore hope and dignity.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/donate"
              className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-pink-500 hover:text-white transition"
            >
              Donate
            </a>

            <a
              href="/contact"
              className="px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm hover:border-white hover:text-white transition"
            >
              Get Involved
            </a>
          </div>

          <p className="mt-5 text-[10px] text-white/40">
            Transparent • Verified impact • Community driven
          </p>

        </div>
      </motion.div>

    </section>
  );
}