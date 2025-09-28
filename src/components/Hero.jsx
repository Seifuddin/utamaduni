"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Users, Utensils, Home, GraduationCap } from "lucide-react";

// Slides
const slides = [
  {
    id: 1,
    image: "/images/childrenwelfare.webp",
    title: "Children's Welfare",
    subtitle:
      "Donations to children's homes and educational support for orphans",
    button: "Learn More",
  },
  {
    id: 2,
    image: "/images/communityoutreach.jpg",
    title: "Community Outreach",
    subtitle:
      "Food distribution, health awareness, and empowerment projects for people living with disabilities and HIV",
    button: "Learn More",
  },
  {
    id: 3,
    image: "/images/culturalpreservation.jpg",
    title: "Cultural Preservation",
    subtitle:
      "Incorporating traditional values, arts, and practices into charity work",
    button: "Learn More",
  },
  {
    id: 4,
    image: "/images/housekeepingprogram.jpeg",
    title: "Housekeeping Programmes",
    subtitle:
      "Supporting struggling households with essential items and skills",
    button: "Learn More",
  },
  {
    id: 5,
    image: "/images/partnershipss.jpg",
    title: "Partnerships",
    subtitle:
      "Collaborating with like-minded individuals and organizations to extend our impact",
    button: "Learn More",
  },
];

// Stats Data
const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Children Supported",
    progress: 90,
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Utensils,
    value: 12000,
    suffix: "+",
    label: "Meals Served",
    progress: 100,
    color: "from-red-600 to-maroon-700",
  },
  {
    icon: Home,
    value: 300,
    suffix: "+",
    label: "Families Sheltered",
    progress: 75,
    color: "from-blue-600 to-indigo-700",
  },
  {
    icon: GraduationCap,
    value: 800,
    suffix: "+",
    label: "Skills Trained",
    progress: 85,
    color: "from-red-700 to-blue-700",
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

export default function HeroWithStats() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Hero Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative h-[90vh]"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 flex flex-col items-center justify-center text-center text-white px-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-lg md:text-2xl mb-6 max-w-2xl"
              >
                {slide.subtitle}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59,130,246,0.7)" }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl font-medium shadow-lg transition"
              >
                {slide.button}
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full border-2 ${
              current === index
                ? "bg-blue-600 border-blue-600 scale-110"
                : "bg-gray-300 border-gray-400"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Stats Section - Hanging Below Hero */}
      <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-11/12 md:w-4/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-2xl p-8"
        >
          {stats.map((stat, index) => {
            const { ref, count } = useCountUp(stat.value, 2.5);
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                ref={ref}
                whileHover={{ y: -8, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
                className="text-center p-4 rounded-xl transition bg-gradient-to-b from-gray-50 to-white"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-maroon-700 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-extrabold text-blue-700">
                  {count}
                  {stat.suffix}
                </h3>
                <p className="text-gray-700 mt-2 font-medium">{stat.label}</p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${stat.color} rounded-full`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${stat.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {stat.progress}% Goal Achieved
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
