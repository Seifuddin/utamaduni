"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Utensils, Home, Heart, ArrowRight, Shield, Sparkles, Globe } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const items = [
  { 
    icon: Users, 
    label: "Children affected", 
    value: "150M+",
    description: "Children worldwide need our help",
    color: "from-blue-400 to-blue-600",
  },
  { 
    icon: Utensils, 
    label: "Food insecurity", 
    value: "1 in 3",
    description: "Children face hunger daily",
    color: "from-pink-400 to-pink-600",
  },
  { 
    icon: Home, 
    label: "Without shelter", 
    value: "Millions",
    description: "Lack safe places to call home",
    color: "from-blue-500 to-blue-500",
  },
  { 
    icon: Heart, 
    label: "Hope created", 
    value: "Every donation counts",
    description: "Your support changes lives",
    color: "from-pink-500 to-rose-500",
  },
];

const trustBadges = [
  { icon: Shield, label: "100% Transparent" },
  { icon: Globe, label: "Global Impact" },
  { icon: Heart, label: "Community Driven" },
];

export default function DidYouKnowHybrid() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden py-12 md:py-16 px-6 lg:px-20"
    >
      {/* Premium Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/childrenwelfare.webp')",
        }}
      />

      {/* Multi-layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-pink-900/30 to-gray-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-pink-500/10" />

      {/* Animated Glow Effects - Made smaller */}
      <div className="absolute -top-40 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <motion.div 
        style={{ opacity, y }}
        className="relative max-w-7xl mx-auto"
      >
        {/* HEADER - Made smaller */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur -sm px-4 py-1.5 rounded-full border border-white/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            <span className="text-[10px] font-medium text-white/80 tracking-wider">DID YOU KNOW?</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight">
            Every Child Deserves
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400">
              Safety & Hope
            </span>
          </h2>

          <p className="mt-2 text-white/70 max-w-2xl mx-auto text-base mdtext-sm leading-relaxed">
            Millions still live without food, shelter, or protection. These numbers reflect real lives waiting for change.
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* MAIN GRID - Made smaller */}
        <div className="grid lg:grid-cols-5 gap-4 items-stretch">
          {/* HERO CARD - Spans 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded -2xl p-5 md:p-6 bg-gradient-to-brfrom-blue-600/10 via-blue-600/10 to-blue-600/10 backdrop-blur-sm border border-white/20 relative overflow-hidden group"
          >
            {/* Glow inside card */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-700/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-11 h-11 rounded -2xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center shadow-lg shadow-pink-500/30 mb-3">
                <Heart className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white">
                Your Action Matters
              </h3>

              <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-sm">
                Even a small donation can provide safety, food, and hope to a child in need.
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                <Link
                  href="/donate"
                  className="group px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-500 text-white font-medium rounded -full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 flex items-center gap-2 text-xs"
                >
                  Donate Now
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/about"
                  className="px-5 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium rounded -full transition-all duration-300 text-xs"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>

          {/* STATS CARDS - Spans 3 columns */}
          <div className="lg:col-span-3 grid sm: grid-cols-2 gap-3">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded -xl p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className={`w-8 h-8 rounded -lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  <div className="text-lg md:text-xl font-bold text-white">
                    {item.value}
                  </div>

                  <div className="text-white/70 text-[10px] mt-0.5 font-medium">
                    {item.label}
                  </div>

                  <div className="text-white/40 text-[9px] mt-0.5">
                    {item.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Badges - Made smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-8"
        >
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex items-center gap-1.5 text-white/50 text-[10px] tracking-wider">
                <Icon className="w-3 h-3 text-pink-400" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.15); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}