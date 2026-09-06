import React from "react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 px-6 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[#050b1a]" />

      {/* Soft cinematic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_60%)]" />

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/patterns.png')] bg-cover bg-center" />

      {/* Content */}
      <div className="relative max-w-2xl mx-auto text-center">

        {/* Label */}
        <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-4">
          One Action • Real Impact
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
          Change starts with a single decision.
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-white/60 text-sm leading-relaxed">
          Your support helps provide food, shelter, and care to children in need.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-colsm: flex-row gap-3 justify-center">

          <a
            href="/donate"
            className="
              px-7 py-2.5 rounded -full
              bg-pink-600 text-black text-sm font-medium
              hover:bg-pink-500 hover:text-white
              transition
            "
          >
            Donate
          </a>

          <a
            href="/contact"
            className="
              px-7 py-2.5 rounded -full
              border border-white/20 text-white/70 text-sm
              hover:border-white hover:text-white
              transition
            "
          >
            Get Involved
          </a>
        </div>

        {/* Micro trust line */}
        <p className="mt-6 text-[10px] text-white/40">
          Transparent • Verified impact • Community driven
        </p>
      </div>
    </section>
  );
}