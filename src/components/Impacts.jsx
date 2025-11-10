"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Users, UtensilsCrossed, GraduationCap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    {
      icon: <Users className="w-5 h-5 text-pink-700" />,
      value: 500,
      suffix: "+",
      label: "Children Helped",
      progress: 85,
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-pink-700" />,
      value: 2000,
      suffix: "+",
      label: "Meals Provided",
      progress: 90,
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-pink-700" />,
      value: 20,
      suffix: "+",
      label: "Volunteers",
      progress: 70,
    },
    {
      icon: <Heart className="w-5 h-5 text-pink-700" />,
      value: 2,
      suffix: "Years",
      label: "Of Service",
      progress: 100,
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-amber-50 py-16">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* */}
        <h2 className="text-center text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">
          Our Achievement in Numbers
        </h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-4"
        >
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, inView);
            return (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all h-[140px] flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-amber-100 rounded-full">{stat.icon}</div>
                    <h3 className="font-serif font-semibold text-sm text-gray-800">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="font-serif text-gray-700 text-base font-bold mt-1">
                    {count}
                    {stat.suffix}
                  </p>

                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${stat.progress}%` } : {}}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-1 rounded-full bg-blue-900"
                    />
                  </div>

                  <p className="text-[11px] text-gray-800">
                    {stat.progress}% Goal Reached
                  </p>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
