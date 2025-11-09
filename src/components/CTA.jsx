import React from 'react'

export default function CTA() {
  return (
    <section className="relative bg-[#0a2540] text-white pt-20 pb-10 overflow-hidden">
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/patterns.png')] opacity-10 bg-cover bg-center z-0"></div>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="relative text-2xl md:text-3xl font-medium font-serif fontbold text-white mb-4">Join Us in Making a Difference</h3>
          <p className="relative mt-2 text-white max-w-2xl mx-auto">Volunteer, donate or partner — your support helps transform lives and communities.</p>

          <div className="relative mt-6 flex justify-center gap-4">
            <a href="/donate" className="bg-blue-600 text-white px-5 py-3 rounded font-semibold shadow">Donate</a>
            <a href="/volunteer" className="border border-white px-5 py-3 font-semibold rounded">Volunteer</a>
          </div>
        </div>
      </section>
  )
}
