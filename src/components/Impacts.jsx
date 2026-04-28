"use client";

import { motion } from "framer-motion";
import { Users, Utensils, HandHeart, Calendar } from "lucide-react";

const stats = [
  { icon: Users, label: "Children Helped", value: "500+" },
  { icon: Utensils, label: "Meals Provided", value: "2,000+" },
  { icon: HandHeart, label: "Volunteers", value: "20+" },
  { icon: Calendar, label: "Years of Service", value: "2+" },
];

export default function ImpactStats() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white overflow-hidden">

      {/* subtle glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-semibold">
            Our Impact
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Real lives, real change.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* card */}
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center hover:border-pink-500/30 transition">

                  {/* icon */}
                  <div className="mx-auto mb-3 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600">
                    <Icon size={18} />
                  </div>

                  {/* number */}
                  <h3 className="text-lg md:text-xl font-bold">
                    {stat.value}
                  </h3>

                  {/* label */}
                  <p className="text-gray-400 text-xs mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Micro trust line */}
        <p className="text-center mt-6 text-[10px] text-white/40">
          Transparent • Verified impact • Community driven
        </p>
    </section>
  );
}