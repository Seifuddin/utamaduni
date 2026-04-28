"use client";

import { motion } from "framer-motion";
import { Users, Utensils, Home, Heart } from "lucide-react";
import Link from "next/link";

const items = [
  { icon: Users, label: "Children affected", value: "150M+" },
  { icon: Utensils, label: "Food insecurity", value: "1 in 3" },
  { icon: Home, label: "Without shelter", value: "Millions" },
  { icon: Heart, label: "Hope created", value: "Every donation counts" },
];

export default function DidYouKnowHybrid() {
  return (
    <section className="relative overflow-hidden py-14 px-6 text-white">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/images/childrenwelfare.webp')",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/20 blur-[110px]" />

      <div className="relative max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Every child deserves safety.
          </h2>

          <p className="mt-3 text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Millions still live without food, shelter, or protection. These numbers reflect real lives.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-10 grid md:grid-cols-3 gap-5 items-stretch">

          {/* HERO CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 rounded-2xl p-5 bg-white/10 backdrop-blur-xl border border-white/10 relative overflow-hidden"
          >
            <Heart className="w-5 h-5 text-pink-300 mb-4" />

            <h3 className="text-xl font-bold">
              Your action matters
            </h3>

            <p className="mt-2 text-white/70 text-xs leading-relaxed">
              Even a small donation can provide safety, food, and hope.
            </p>

            <Link
              href="/donate"
              className="inline-flex mt-4 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-pink-500 hover:text-white transition"
            >
              Donate Now
            </Link>

            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-pink-500/30 blur-2xl" />
          </motion.div>

          {/* STATS */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-5">

            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-5 bg-white/5 hover:bg-white/10 transition border border-white/10 backdrop-blur-md"
                >
                  <Icon className="w-4 h-4 text-pink-300 mb-3" />

                  <div className="text-lg font-bold">
                    {item.value}
                  </div>

                  <div className="text-white/60 text-xs mt-1">
                    {item.label}
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
      </div>
    </section>
  );
}