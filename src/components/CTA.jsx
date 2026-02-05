import React from 'react'

export default function CTA() {
  return (
    <section className="relative bg-amber-50 px-6 pb-10 overflow-hidden">
      <div className="mx-auto lg:px-6 text-center max-w-7xl text-white py16 ">
      {/* Background Overlay with Patterns */}
      <div className="relative inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="relative inset-0 bg-[url('/images/patterns.png')] opacity-10 bg-cover bg-center z-0"></div>
        <div className="max-w-7xl mx-auto rounded-md px-3 py-16 text-center bg-gradient-to-r from-blue-900 to-blue-700">
          <h3 className="relative text-2xl md:text-3xl fontmedium font-erif font-bold text-white mb-4">Join Us in Making a Difference</h3>
          <p className="relative mt-2 text-white max-w-2xl mx-auto">Volunteer, donate or partner — your support helps transform lives and communities.</p>

          <div className="relative mt-6 flex justify-center gap-4">
            <a
              href="/donate"
              className="bg-gradient-to-br from-pink-900 via-pink-700 to-pink-500 text-center md:px-8 md:py-3 text-white font-semibold py-2 px-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Support Us
            </a>
            <a
              href="/contact"
              className="border border-white text-center md:px-8 md:py-3 text-white font-semibold py-2 px-3 rounded-lg hover:bg-white/10 transition"
            >
              Join Us
            </a>
          </div>
        </div>
        </div>
      </section>
  )
}
