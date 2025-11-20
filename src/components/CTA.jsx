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
            <a href="/donate" className="bg-white text-pink-600 px-5 py-3 rounded font-semibold shadow">Donate</a>
            <a href="/volunteer" className="border border-white px-5 py-3 font-semibold rounded">Volunteer</a>
          </div>
        </div>
        </div>
      </section>
  )
}
