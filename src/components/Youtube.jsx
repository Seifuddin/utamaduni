"use client";

import { motion } from "framer-motion";

export default function VideoHighlights() {
  const videos = [
    {
      id: "7C9wMJwsnqs",  // replace with your actual first YouTube video ID
      title: "Utamaduni Visit – Event at Nairobi",
    },
    {
      id: "XgMOSQ9Ue5c",
      title: "Utamaduni travel and adventure team",
    },
    {
      id: "J0td4PE1m1o",
      title: "Utamaduni Foundation – Children’s Day Celebration",
    },
    // add more objects if you like
  ];

  return (
    <section className="py-16 bg-amber-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                    Video Highlights
                  </h2>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    transition={{ duration: 0.5 }}
                    className="h-1 bg-pink-700 rounded-full mx-auto mb-6"
                  ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(({ id, title }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded overflow-hidden shadow-lg bg-white border border-gray-200"
            >
              <div className="aspect-w-20 aspect-h-14">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="fontbold text-left text-blue-900 font-serif fontmedium md:text-lg my-2 px-2">
                {title}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <a
            href="https://www.youtube.com/@utamadunifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-md transition-all duration-300 shadow-md"
          >
            Watch More on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}
