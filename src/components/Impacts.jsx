"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Users, UtensilsCrossed, GraduationCap } from "lucide-react";

// Count-up hook
function useCountUp(target, inView, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target, duration]);

  return count;
}

export default function ImpactStats() {
  const stats = [
    { icon: <Users className="w-6 h-6 text-indigo-600" />, value: 5000, suffix: "+", label: "Children Helped", progress: 85 },
    { icon: <UtensilsCrossed className="w-6 h-6 text-green-600" />, value: 20000, suffix: "+", label: "Meals Provided", progress: 90 },
    { icon: <GraduationCap className="w-6 h-6 text-yellow-600" />, value: 1200, suffix: "+", label: "Volunteers", progress: 70 },
    { icon: <Heart className="w-6 h-6 text-red-600" />, value: 15, suffix: "+ Years", label: "Of Service", progress: 100 },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-amber-50 pb-8">
      <div className="px-6 md:px-12 lg:px-20 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb10 text-gray-800">
          
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, inView);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bgwhite roundedxl p6 shadowmd hover:shadowlg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gray-100 rounded-full">{stat.icon}</div>
                  <h3 className="font-serif font-bold text-blue-950">{stat.label}</h3>
                </div>

                <p className="font-serif text-lg font-bold text-pink-500 mb-2">
                  {count}
                  {stat.suffix}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${stat.progress}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"
                  />
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  {stat.progress}% Goal Reached
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
