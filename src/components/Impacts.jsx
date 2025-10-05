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
      icon: <Users className="w-5 h-5 text-blue-500" />,
      value: 5000,
      suffix: "+",
      label: "Children Helped",
      progress: 85,
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-blue-500" />,
      value: 20000,
      suffix: "+",
      label: "Meals Provided",
      progress: 90,
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
      value: 1200,
      suffix: "+",
      label: "Volunteers",
      progress: 70,
    },
    {
      icon: <Heart className="w-5 h-5 text-blue-500" />,
      value: 15,
      suffix: "+ Years",
      label: "Of Service",
      progress: 100,
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-amber-50 py-6">
      <div className="px-4 md:px-10 lg:px-16 mx-auto">
        <h2 className="text-lg md:text-xl font-bold font-serif text-center mb-4 text-pink-700 tracking-wide">
          Our Impact in Numbers
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
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
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all h-[140px] flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-100 rounded-full">{stat.icon}</div>
                    <h3 className="font-serif font-semibold text-sm text-gray-700">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="font-serif text-blue-900 text-base font-bold mt-1">
                    {count}
                    {stat.suffix}
                  </p>

                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${stat.progress}%` } : {}}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-1 rounded-full bg-blue-400"
                    />
                  </div>

                  <p className="text-[11px] text-gray-500">
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
