"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, HeartHandshake } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function StoriesAndTestimonials() {
  const stories = [
    {
      image: "/images/utamaduni at mathare/_DSC8551.jpg",
      title: "Empowering Women",
      text: "Through Utamaduni’s community workshops, over 50 women have gained tailoring and entrepreneurship skills — transforming their families’ livelihoods and restoring dignity.",
    },
    {
      image: "/images/utamaduni at mathare/_DSC8943.jpg",
      title: "Restoring Hope for Street Children",
      text: "Our outreach programs have helped reintegrate vulnerable children back to school and into safe homes, giving them a second chance at life and learning.",
    },
    {
      image: "/images/how_it_went_down/_DSC7546.jpg",
      title: "Greening the Future Together",
      text: "Utamaduni volunteers planted 2,000 trees across local schools, helping to build environmental awareness and sustainable communities.",
    },
  ];

  const testimonials = [
    {
      name: "Mary A.",
      role: "Community Beneficiary",
      quote:
        "Before Utamaduni, I had lost hope. Today, I run my own small business and mentor young girls in my village. They truly changed my life.",
      image: "/images/WhatsApp Image 2025-09-22 at 20.01.09 (1).jpeg",
    },
    {
      name: "Prisca Muiya.",
      role: "Volunteer",
      quote:
        "Being part of Utamaduni taught me that small actions can bring huge change. Every outreach left me more inspired to serve.",
      image: "/images/WhatsApp Image 2025-09-22 at 20.01.09 (1).jpeg",
    },
    {
      name: "Muriithi Nguru.",
      role: "Partner Organization",
      quote:
        "Working with Utamaduni has shown us what true community-driven impact looks like — compassion, dedication, and unity.",
      image: "/images/Commandant.jpg",
    },
  ];

  return (
    <section className="relative bg-amber-50 gradient-to-b from-amber-50  via-white to-blue-50 py-20 text-gray-800 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5 bg-cover bg-center"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase font-semibold tracking-wider text-pink-700">
            Stories of Change
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
            Real Lives, Real Impact
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-pink-700 rounded-full mx-auto mb-6"
          ></motion.div>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto font-medium text-center md:text-lg mb-6">
            Every story from <span className="font-semibold text-gray-800">Utamaduni</span>{" "}
            reminds us why we serve — transforming lives through compassion, unity, and culture.
          </p>
        </motion.div>
*/}
        {/* Stories Grid 
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-44">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="md:text-lg font-bold text-blue-900 mb-2 font-serif">
                  {story.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {story.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        */}
        

        {/* Testimonials Section with Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-blue-900 text-white rounded-2xl p-7 md:p-14 shadow-2xl relative overflow-hidden"
        >
          <HeartHandshake className="absolute opacity-10 w-40 h-40 right-10 bottom-10 text-blue-200" />
          <div className="text-center mb-12">
            <Quote className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 font-serif">
              Testimonials
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Hear from those whose lives have been touched by our work and partnerships.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 rounded-2xl border border-blue-700 p-4 backdrop-blur-sm shadow-md hover:shadow-lg transition-all h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-blue-500"
                    />
                    <div>
                      <h4 className="font-bold text-gray-100 fontserif md:text-lg my-2">{t.name}</h4>
                      <p className="text-blue-200 text-sm">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    “{t.quote}”
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Call to Action 
          <div className="text-center mt-14">
            <button className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white transition-all duration-300">
              Share Your Story
            </button>
          </div>
          */}
        </motion.div>
      </div>
    </section>
  );
}
