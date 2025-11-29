"use client";

import { Users, Utensils, HandHeart, Calendar } from "lucide-react";

const stats = [
  { icon: Users, label: "Children Helped", value: 500, gradient: "from-blue-400 to-pink-500" },
  { icon: Utensils, label: "Meals Provided", value: 2000, gradient: "from-pink-500 to-blue-400" },
  { icon: HandHeart, label: "Volunteers", value: 20, gradient: "from-blue-300 to-pink-400" },
  { icon: Calendar, label: "Years of Service", value: 2, gradient: "from-pink-400 to-blue-300" },
];

export default function ImpactStats() {
  return (
    <section className="relative py-12 bg-blue-900 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute -top-16 left-0 w-80 h-80 bg-gradient-to-tr from-blue-700 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-16 right-0 w-64 h-64 bg-gradient-to-tr from-pink-600 to-blue-600 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl fontserif font-extrabold text-white mb-3">
          Our Impact in Numbers
        </h2>
        <p className="text-white text-sm md:text-base max-w-2xl mx-auto mb-8">
          At <span className="font-semibold">Utamaduni Organization</span>, we work tirelessly to uplift communities and transform lives.
        </p>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full mb-2 bg-gradient-to-br ${stat.gradient} text-white shadow-md`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Counter */}
                <span className="text-xl md:text-2xl font-extrabold text-white">
                  {stat.value.toLocaleString()}+
                </span>

                {/* Label */}
                <p className="mt-1 text-white/90 font-medium text-center text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
