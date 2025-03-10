"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { FaWifi, FaSwimmingPool, FaParking, FaPaw, FaDumbbell } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const BASE_URL = "http://127.0.0.1:8000"; // Your backend API URL

interface Hotel {
  id: number;
  name: string;
  located_in: string;
  rating: number;
  tariff: string[];
  images: string[];
}


const HotelCard = ({ hotel }: { hotel: Hotel }) => {
    const imageUrl = `http://127.0.0.1:8000${hotel.images[0]}`;
  
    console.log("Image URL:", imageUrl); // Check the URL
    return (
      <div className="flex  rounded-lg p-4 shadow-md bg-white gap-4 max-w-3xl mx-auto">
        <div className="relative w-40 h-32 flex-shrink-0">
          {hotel.images.length > 0 ? (
            <Swiper
              loop={true}
              grabCursor={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
              className="h-full w-full"
            >
              {hotel.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                  src={`${BASE_URL}${img.replace(/%20/g, " ")}`} // Fix spaces and append Base URL
                  alt={`Hotel Image ${index + 1}`}
                  layout="fill"
                  className="rounded-lg object-cover"
                  unoptimized // TEMPORARY: Helps debug Next.js image processing

                />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg">{hotel.name}</h3>
          <p className="text-gray-600 text-sm">Located in: {hotel.located_in}</p>
          <p className="text-gray-500 text-xs">Rating: {hotel.rating} ⭐</p>
          <div className="flex justify-between items-center mt-3">
            <p className="font-bold text-lg">{hotel.tariff[0]}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };

const HotelList = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalHotels, setTotalHotels] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/hotels/filter/?page=${page}`);
        if (!response.ok) {
          throw new Error("Failed to fetch hotels");
        }
        const data = await response.json();
        setHotels(data.results);
        setTotalHotels(data.count);
        setNextPage(data.next);
        setPrevPage(data.previous);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [page]);

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">All Hotels</h3>
      <p className="text-gray-500 mb-4">Showing <span className="text-black">{hotels.length}</span> out of <span className="text-black">{totalHotels}</span> hotels</p>
      {loading ? (
        <p className="text-center text-gray-600">Loading hotels...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="space-y-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          disabled={!prevPage}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={!nextPage}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HotelList;
