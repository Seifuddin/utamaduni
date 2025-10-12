"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leaders = [
  {
    name: "John Mwangi",
    role: "Manager",
    image: "/images/Screenshot_20221028-204325.png",
    desktopPosition: "md:top-1/2 md:right-[10%] md:-translate-y-1/2", // right side
    size: "w-32 h-32 md:w-36 md:h-36",
    delay: 0.2,
  },
  {
    name: "Grace Njeri",
    role: "Secretary",
    image: "/images/Screenshot_20221028-204325.png",
    desktopPosition: "md:top-1/2 md:left-[10%] md:-translate-y-1/2", // left side
    size: "w-28 h-28 md:w-32 md:h-32",
    delay: 0.3,
  },
  {
    name: "Peter Otieno",
    role: "Treasurer",
    image: "/images/Screenshot_20221028-204325.png",
    desktopPosition: "md:bottom-[8%] md:left-1/2 md:-translate-x-1/2", // slightly lowered bottom
    size: "w-28 h-28 md:w-32 md:h-32",
    delay: 0.4,
  },
];

export default function Leadership() {
  return (
    <section className="relative bg-blue-950 text-amber-50 py-24 px-6 overflowhidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/image-removebg-preview (2).png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-950/90 to-blue-950" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-3"
        >
          Our Leadership & Management
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-200 text-base md:text-lg mb-8 max-w-2xl mx-auto"
        >
          Meet the dedicated team guiding Utamaduni’s mission with vision,
          integrity, and compassion.
        </motion.p>

        <div className="w-24 h-1 bg-amber-400 mx-auto mb-16 rounded-full"></div>

        {/* ===== Desktop Layout (Circular) ===== */}
        <div className="relative hidden md:flex justify-center items-center h-[620px] max-w-4xl mx-auto">
          {/* CEO (Center) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-20"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl mx-auto">
              <Image
                src="/images/Screenshot_20221028-204325.png"
                alt="CEO"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-400">
                Jane Wambui
              </h3>
              <p className="text-amber-100 text-sm tracking-wide">
                Chief Executive Officer
              </p>
            </div>
          </motion.div>

          {/* Golden Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
            viewBox="0 0 600 600"
          >
            {/* Right Line */}
            <motion.path
              d="M320 300 C400 300, 480 300, 520 300"
              stroke="#fbbf24"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            {/* Left Line */}
            <motion.path
              d="M280 300 C200 300, 120 300, 80 300"
              stroke="#fbbf24"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            {/* Bottom Line */}
            <motion.path
              d="M300 340 C300 420, 300 480, 300 540"
              stroke="#fbbf24"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </svg>

          {/* Other Leaders */}
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: leader.delay, duration: 0.8 }}
              viewport={{ once: true }}
              className={`absolute ${leader.desktopPosition} flex flex-col items-center text-center z-10`}
            >
              <div
                className={`relative ${leader.size} rounded-full overflow-hidden border-4 border-amber-300 shadow-xl hover:scale-105 transition-transform duration-500`}
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-amber-300">
                {leader.name}
              </h3>
              <p className="text-sm text-amber-100">{leader.role}</p>
            </motion.div>
          ))}
        </div>

        {/* ===== Mobile Layout (Stacked) ===== */}
        <div className="flex flex-col items-center space-y-10 md:hidden">
          {/* CEO First */}
          <div className="text-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl mx-auto">
              <Image
                src="/images/Screenshot_20221028-204325.png"
                alt="CEO"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mt-4 text-amber-400">
              Jane Wambui
            </h3>
            <p className="text-amber-100 text-sm">Chief Executive Officer</p>
          </div>

          {/* Other Leaders below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
            {leaders.map((leader, index) => (
              <div key={index}>
                <div
                  className={`relative ${leader.size} rounded-full overflow-hidden border-4 border-amber-300 shadow-xl mx-auto`}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 font-semibold text-lg text-amber-300">
                  {leader.name}
                </h3>
                <p className="text-sm text-amber-100">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
