"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const testimonials = [
  {
    title: "Unexpected Delays, Unexpected Help!",
    content:
      "Our bus got delayed for hours. Lazy Yatra immediately arranged a private cab to get us to our destination. We felt truly cared for.",
  },
  {
    title: "Smooth Sailing During a Strike!",
    content:
      "When a local transport strike threatened our plans, Lazy Yatra swiftly organized alternate arrangements.",
  },
  {
    title: "Help When It Mattered Most",
    content:
      "During our trip, my partner fell ill. Lazy Yatra arranged a doctor and extended our stay without any hassle. Their care and promptness were unmatched.",
  },
  {
    title: "Unexpected Delays, Unexpected Help!",
    content:
      "Our bus got delayed for hours. Lazy Yatra immediately arranged a private cab to get us to our destination. We felt truly cared for.",
  },
  {
    title: "Smooth Sailing During a Strike!",
    content:
      "When a local transport strike threatened our plans, Lazy Yatra swiftly organized alternate arrangements.",
  },
];

const testimonials2 = [
    {
      title: "Unexpected Delays, Unexpected Help!",
      content:
        "Our bus got delayed for hours. Lazy Yatra immediately arranged a private cab to get us to our destination. We felt truly cared for.",
    },
    {
      title: "Smooth Sailing During a Strike!",
      content:
        "When a local transport strike threatened our plans, Lazy Yatra swiftly organized alternate arrangements.",
    },
    {
      title: "Help When It Mattered Most",
      content:
        "During our trip, my partner fell ill. Lazy Yatra arranged a doctor and extended our stay without any hassle. Their care and promptness were unmatched.",
    },
    {
      title: "Unexpected Delays, Unexpected Help!",
      content:
        "Our bus got delayed for hours. Lazy Yatra immediately arranged a private cab to get us to our destination. We felt truly cared for.",
    },
    {
      title: "Smooth Sailing During a Strike!",
      content:
        "When a local transport strike threatened our plans, Lazy Yatra swiftly organized alternate arrangements.",
    },
  ];
  

const FastSupport = () => {
  return (
    <div className="w-full max-w-5xl  gap-12 p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <h5 className="text-xl font-bold">What Our Travelers Say</h5>
        <p className="text-gray-600">Real stories from our happy customers.</p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-4">
            <motion.div
              className="bg-white p-6 w-[14rem] h-[10.6rem] rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
               <p className="text-sm text-gray-900 font-bold  mb-2">{testimonial.title}</p>
               <p className="text-gray-600 text-xs">{testimonial.content}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
        {/* Bottom Swiper (Moves Left) */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500, reverseDirection: true, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full"
      >
        {testimonials2.map((testimonial, index) => (
          <SwiperSlide key={index} className="overflow-hidden">
            <motion.div
              className="bg-white p-6 w-[14rem] h-[10.6rem] rounded-xl shadow-lg"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.6 }}
            >
               <p className="text-sm text-gray-900 font-bold  mb-2">{testimonial.title}</p>
               <p className="text-gray-600 text-xs">{testimonial.content}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FastSupport;
