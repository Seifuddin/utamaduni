"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import { Play, Youtube, Calendar, Clock, Sparkles } from "lucide-react";

export default function VideoHighlights() {
  const videos = [
    {
      id: "7C9wMJwsnqs",
      title: "Utamaduni Fun Day",
      description: "A day of joy, games, and cultural celebration with the community.",
      date: "September 2025",
      duration: "3:45",
    },
    {
      id: "XgMOSQ9Ue5c",
      title: "Utamaduni Travel & Adventure Team",
      description: "Exploring new horizons and building connections through adventure.",
      date: "August 2025",
      duration: "5:20",
    },
    {
      id: "J0td4PE1m1o",
      title: "Children's Day Celebration",
      description: "Celebrating the joy and potential of every child in our programs.",
      date: "July 2025",
      duration: "4:15",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
                        <motion.div
                          initial={{ opacity: 0, y: -30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7 }}
                          viewport={{ once: true }}
                          className="text-center mb-10 md:mb-12"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg shadow-pink-200/50 mb-4 border border-white/50"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                            <span className="text-xs font-medium text-pink-700 tracking-wider">Watch Our Stories</span>
                          </motion.div>
                
                          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                            Video
                            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700">
                              Highlights
                            </span>
                          </h2>
                
                          <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full mb-4" />
                
                          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-base leading-relaxed">
                            A collection of our memorable moments, community events, and activities captured on video.
                          </p>
                        </motion.div>

        {/* VIDEO GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map(({ id, title, description, date, duration }) => (
            <div
              key={id}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200/60 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Video Thumbnail with Play Button */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Play Button Overlay */}
                <a
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-pink-600 flex items-center justify-center shadow-lg">
                      <Play size={20} className="text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </a>

                {/* Duration Badge */}
                <span className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Clock size={10} /> {duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-slate-800 text-sm leading-tight line-clamp-1">
                  {title}
                </h3>
                <p className="text-slate-500 text-xs mt-1 line-clamp-2">
                  {description}
                </p>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1.5">
                    <Calendar size={11} /> {date}
                  </span>
                  <a
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-blue-600 hover:text-pink-600 transition flex items-center gap-1"
                  >
                    Watch <Play size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WATCH MORE CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@utamadunifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-pink-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition shadow-md group"
          >
            <Youtube size={18} />
            <span>Watch More on YouTube</span>
          </a>
        </div>

        {/* STATS BAR */}
        <div className="hidden mt-10grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white rounded-xl border border-slate-200/60 p-5">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">15+</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider">Videos</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">2.5K+</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider">Views</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">50+</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider">Subscribers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">100%</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider">Impact</p>
          </div>
        </div>

      </div>
    </section>
  );
}