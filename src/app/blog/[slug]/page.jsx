"use client";

import { useParams } from "next/navigation";
import { posts } from "@/data/post";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // ✅ import from swiper/modules

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SinglePost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-16 text-center bg-amber-50 text-gray-800">
        <h2 className="text-3xl font-semibold mb-4">Post not found</h2>
        <Link
          href="/blog"
          className="text-blue-800 font-semibold hover:underline"
        >
          ← Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 bg-amber-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Swiper Slider */}
          {post.images?.length > 0 && (
            <Swiper
              modules={[Navigation, Pagination]} // ✅ add modules here
              navigation
              pagination={{ clickable: true }}
              loop
              className="rounded mb-8"
            >
              {post.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={`${post.title} image ${index + 1}`}
                    width={700}
                    height={300}
                    className="w-full h-[300px] md:h-[400px] object-cover rounded shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <p className="text-sm text-blue-800 mb-2">{post.date}</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">
            {post.title}
          </h1>

          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          <Link
            href="/blog"
            className="text-blue-700 mt-12 inline-block font-semibold hover:underline"
          >
            ← Back to Blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
