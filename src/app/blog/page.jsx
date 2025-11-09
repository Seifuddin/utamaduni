"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { posts } from "@/data/post";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BlogPage() {
  const featuredPost = posts[0]; // latest post

  return (
    <section className="bg-gray-50 overflow-hidden">
      {/* Featured Story Hero */}
      <div className="relative h-[400px] md:h-[500px] w-full mb-16 px-6">
        <Image
          src={featuredPost.image}
          alt={featuredPost.title}
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            {featuredPost.title}
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
            {featuredPost.excerpt}
          </p>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="mt-6 inline-block bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
          >
            Read Story
          </Link>
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 overflow-hidden">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-800 text-center mb-12"
        >
          More Stories
        </motion.h3>

        <div className="grid md:grid-cols-1 gap-16">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 overflow-hidden"
            >
              <p className="text-sm text-amber-700 mb-2">{post.date}</p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-6">{post.excerpt}</p>

              {/* Swiper Image Carousel */}
              {post.images && post.images.length > 0 && (
                <div className="relative">
                  <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={{
                      nextEl: `.next-${post.id}`,
                      prevEl: `.prev-${post.id}`,
                    }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    spaceBetween={15}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="!overflow-hidden rounded-xl mb-6"
                  >
                    {post.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                          <Image
                            src={img}
                            alt={`${post.title} image ${i + 1}`}
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Navigation Arrows (Hidden on mobile) */}
                  <button
                    className={`prev-${post.id} hidden sm:flex absolute top-1/2 -left-3 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-amber-100 transition`}
                  >
                    ❮
                  </button>
                  <button
                    className={`next-${post.id} hidden sm:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-amber-100 transition`}
                  >
                    ❯
                  </button>
                </div>
              )}

              <Link
                href={`/blog/${post.slug}`}
                className="text-amber-600 font-semibold hover:underline"
              >
                Read Full Story →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
