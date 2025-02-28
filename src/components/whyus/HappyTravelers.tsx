"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const images = [
  "https://plus.unsplash.com/premium_photo-1687653079484-12a596ddf7a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsaW5nfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1677288649982-b52376fb34fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1677288649982-b52376fb34fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/1145064928/photo/tourist-riding-camel-in-desert.webp?a=1&b=1&s=612x612&w=0&k=20&c=LrtNkECIRlOYDtWlGQ_96nHVd7b9BY1EiX9BHXXm-n8=",
  "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.webp?a=1&b=1&s=612x612&w=0&k=20&c=XfRJBUkSatKmlfmpJo5di5ToQ9-cvnlRypQ03CHiylg=",
  "https://media.istockphoto.com/id/2157291747/photo/happy-man-with-travel-bag-text-messaging-on-cell-phone-while-walking-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=R682PImE6RKXUcSJakUKCq7sikMMz4FdqPnDnVPJXWc=",
  "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.webp?a=1&b=1&s=612x612&w=0&k=20&c=XfRJBUkSatKmlfmpJo5di5ToQ9-cvnlRypQ03CHiylg=",
  "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsaW5nfGVufDB8fDB8fHww",
];

const HappyTravelers = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col justify-between mt-6 gap-14 mx-auto p-6">
      {/* Title */}
      <div className="text-center mb-6">
        <p className="text-gray-600">Lazy Yatra has served 10K or more customers and clients have showered the praises. We have 95% positive reviews, and 73% of our clients trusted us back for their next trips.
</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Top Swiper (Moves Right) */}
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.filter((_, index) => index % 2 === 0).map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-54 h-36  overflow-hidden rounded-xl shadow-lg">
              <Image
                  src={img}
                  alt="Traveler"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Swiper (Moves Left) */}
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
          dir="rtl" // Moves left
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.filter((_, index) => index % 2 !== 0).map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-54 h-36  overflow-hidden rounded-xl shadow-lg">
              <Image
                  src={img}
                  alt="Traveler"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HappyTravelers;
