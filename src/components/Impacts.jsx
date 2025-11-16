"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Utensils, HandHeart, Calendar } from "lucide-react"; 

// Counter hook
const AnimatedCounter = ({ from = 0, to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      const unsubscribe = count.on("change", (latest) => setValue(Math.floor(latest)));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, to, count]);

  return (
    <span ref={ref} className="text-lg md:text-2xl font-serif font-bold text-white">
      {value.toLocaleString()}+
    </span>
  );
};

// Updated stats for charitable organization
const stats = [
  { icon: Users, label: "Children Helped", value: 500, color: "text-yellow-300" },
  { icon: Utensils, label: "Meals Provided", value: 2000, color: "text-orange-300" },
  { icon: HandHeart, label: "Volunteers", value: 20, color: "text-pink-300" },
  { icon: Calendar, label: "Years of Service", value: 2, color: "text-blue-300" },
];

export default function ImpactStats() {
  return (
    <section className="relative py-20 bg-amber-50 px-6 overflow-hidden">
      <div className="lg:px-6 max-w-6xl mx-auto text-center text-white">

      {/* Decorative Waves 
      <div className="absolute -top-16 left-0 w-full h-36 bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-800 rounded-b-full opacity-30"></div>
      <div className="absolute -bottom-16 right-0 w-56 h-56 bg-indigo-700 rounded-full mix-blend-multiply filter blur-2xl opacity-25"></div>
*/}
      <div className="rounded-md px-5 py-16 text-center bg-gradient-to-r from-blue-900 to-blue-800">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-serif font-extrabold text-white mb-6"
        >
          Our Impact in Numbers
        </motion.h2>

        <p className="text-indigo-210 text-sm md:text-base max-w-2xl mx-auto mb-10">
          At <span className="font-semibold text-white">Utamaduni organization</span>, we strive every day to uplift communities and change lives.
        </p>

        {/* Stats Grid */}
        <div className="grid gap-4 xs:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 xs:p-5 sm:p-6 rounded-2xl flex flex-col items-center"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 mb-2 xs:mb-3">
                  <Icon className={`${stat.color} w-6 h-6`} />
                </div>

                {/* Counter */}
                <AnimatedCounter to={stat.value} />

                {/* Label */}
                <p className="text-white/90 mt-1 font-medium text-xs xs:text-sm md:text-base">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
