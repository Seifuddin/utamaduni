"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Utensils, Home, GraduationCap } from "lucide-react";

// Stats Data
const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Children Supported",
    progress: 90,
    color: "text-blue-600",
  },
  {
    icon: Utensils,
    value: 12000,
    suffix: "+",
    label: "Meals Served",
    progress: 100,
    color: "text-maroon-700",
  },
  {
    icon: Home,
    value: 300,
    suffix: "+",
    label: "Families Sheltered",
    progress: 75,
    color: "text-blue-600",
  },
  {
    icon: GraduationCap,
    value: 800,
    suffix: "+",
    label: "Skills Trained",
    progress: 85,
    color: "text-maroon-700",
  },
];

// CountUp Hook
function useCountUp(end, duration = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1 });
          let start = 0;
          const increment = end / (duration * 60); // 60fps
          const step = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          step();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, controls]);

  return { ref, count };
}

export default function ImpactsStats() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-maroon-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="cultural-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="3" fill="#800000" /> {/* maroon */}
              <circle cx="75" cy="75" r="3" fill="#1e3a8a" /> {/* blue */}
              <path
                d="M0 50 Q 25 25, 50 50 T 100 50"
                stroke="#800000"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M0 75 Q 25 100, 50 75 T 100 75"
                stroke="#1e3a8a"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cultural-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-red-700"
          >
            Our Impact in Numbers
          </motion.h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Together with our community, we’ve touched lives and created lasting
            change. Every number represents a story of hope and transformation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => {
            const { ref, count } = useCountUp(stat.value, 2.5);
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white shadow-lg rounded-md p-8 text-center border border-gray-200 hover:shadow-xl transition"
                ref={ref}
              >
                {/* Animated Icon */}
                <motion.div
                  className="flex justify-center mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Icon className={`w-10 h-10 ${stat.color}`} />
                </motion.div>

                {/* Number */}
                <h3 className="text-xl font-extrabold text-blue-700">
                  {count}
                  {stat.suffix}
                </h3>
                <p className="text-gray-700 mt-2 font-medium">{stat.label}</p>

                {/* Progress Bar */}
                <div className="mt-5">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-3 bg-gradient-to-r from-red-700 to-blue-600 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${stat.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {stat.progress}% Goal Achieved
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
