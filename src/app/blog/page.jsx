"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { posts } from "@/data/post";

export default function BlogPage() {
  const featuredPost = posts[0]; // latest post

  return (
    <section className="bg-gray-50">
      {/* Featured Story Hero */}
      <div className="relative h-[400px] md:h-[500px] w-full mb-16">
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
      <div className="max-w-6xl mx-auto px-6 pb-20">
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
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <p className="text-sm text-amber-700 mb-2">{post.date}</p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              {/* Mini Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {post.images?.map((img, i) => (
  <Image
    key={i}
    src={img}
    alt={`${post.title} image ${i + 1}`}
    width={400}
    height={250}
    className="rounded shadow-md object-cover w-full h-48 md:h-40"
  />
))}

              </div>

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
