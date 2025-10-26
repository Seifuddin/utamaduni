"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = [
  "All",
  "Community Work",
  "Events",
  "Leadership",
  "Outreach",
  "Mathare",
];

const images = [
  { src: "/images/how_it_went_down/_DSC7542.jpg", alt: "Utamaduni volunteers", category: "Community Work" },

  { src: "/images/how_it_went_down/_DSC7596.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7598.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7600.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7603.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7604.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7615.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7622.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7625.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7630.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7640.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7642.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7658.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/how_it_went_down/_DSC7660.jpg", alt: "Utamaduni volunteers", category: "Community Work" },
  { src: "/images/utamaduni at mathare/_DSC8631.jpg", alt: "Utamaduni volunteers", category: "Mathare" },
  { src: "/images/utamaduni at mathare/_DSC8645.jpg", alt: "Utamaduni volunteers", category: "Mathare" },
  { src: "/images/utamaduni at mathare/_DSC8647.jpg", alt: "Utamaduni volunteers", category: "Mathare" },
  { src: "/images/utamaduni at mathare/_DSC8746.jpg", alt: "Utamaduni volunteers", category: "Mathare" },
  { src: "/images/utamaduni at mathare/_DSC8748.jpg", alt: "Utamaduni volunteers", category: "Mathare" },
  { src: "/images/utamaduni at mathare/_DSC8754.jpg", alt: "Utamaduni volunteers", category: "Mathare" },
  { src: "/images/utamaduni at mathare/_DSC8756.jpg", alt: "Utamaduni volunteers", category: "Mathare" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.07.jpeg", alt: "Utamaduni volunteers helping children at the community center", category: "Community Work" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.11.jpeg", alt: "Food distribution event organized by Utamaduni", category: "Events" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.56.jpeg", alt: "Utamaduni team cleaning up a local park", category: "Community Work" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.57 (1).jpeg", alt: "Utamaduni leadership meeting with local elders", category: "Leadership" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.57 (2).jpeg", alt: "Youth empowerment outreach in Kisumu", category: "Outreach" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.57.jpeg", alt: "Volunteers planting trees for the environment", category: "Community Work" },
  { src: "/images/WhatsApp Image 2025-10-04 at 23.11.58 (1).jpeg", alt: "Charity event for street children", category: "Events" },
  { src: "/images/WhatsApp Image 2025-09-28 at 02.00.50.jpeg", alt: "Utamaduni community meeting in Nairobi", category: "Leadership" },
];

export default function OurGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);

  // Infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 150
      ) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, filteredImages]);

  const loadMore = () => {
    if (visibleCount < filteredImages.length) {
      setVisibleCount((prev) => prev + 4);
    }
  };

  useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory]);

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title
        <motion.h2
          className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cherished Moments
        </motion.h2>
         */}

        {/* Filter Buttons 
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-900 text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        */}
        {/* Masonry Grid with fade-in */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded shadow-md cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm px-4 text-center transition-all">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <div className="mt-10">
            <motion.button
              onClick={loadMore}
              className="px-6 py-3 bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-900 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More
            </motion.button>
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
            <div className="relative max-w-5xl w-full">
              <button
                className="absolute top-4 right-4 text-white text-3xl z-50"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-2xl shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-center text-gray-200 mt-4 text-sm md:text-base">
                {selectedImage.alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
