"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Leaders", "Team", "Events", "Community"];

const images = [
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.07.jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.11.jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.56.jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.57 (1).jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.57 (2).jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.57.jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.58 (1).jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.58.jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-09-28 at 02.00.51.jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-09-28 at 02.00.51 (2).jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-09-28 at 02.00.51 (1).jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },
  { src: "/images/WhatsApp Image 2025-09-28 at 02.00.50.jpeg", alt: "Utamaduni ....During.....Event....at...", category: "" },

  // You can keep adding more images here
];

export default function OurGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter images by category
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Show only visible images
  const visibleImages = filteredImages.slice(0, visibleCount);

  // Infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, filteredImages]);

  const loadMore = () => {
    if (visibleCount < filteredImages.length) {
      setVisibleCount((prev) => prev + 4); // load 4 more at a time
    }
  };

  // Reset count when switching filters
  useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Moments
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Experience the through our captured
          memories.
        </motion.p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Load More Button (backup if scroll doesn’t trigger) */}
        {visibleCount < filteredImages.length && (
          <div className="mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute top-4 right-4 text-white text-3xl z-50"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-2xl shadow-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
              <p className="text-center text-gray-200 mt-4">
                {selectedImage.alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
