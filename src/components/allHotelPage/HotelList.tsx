// "use client";

// import React, { useState, useEffect } from "react";
// import HotelCard from "@/components/allHotelPage/HotelCard";

// const BASE_URL = "http://127.0.0.1:8000"; // Your backend API URL

// interface Hotel {
//   id: number;
//   name: string;
//   located_in: string;
//   rating: number;
//   tariff: string[];
//   images: string[];
// }

// const HotelList = ({ filters }: { filters: any }) => {
//   const [hotels, setHotels] = useState<Hotel[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const [totalHotels, setTotalHotels] = useState(0);
//   const [nextPage, setNextPage] = useState<string | null>(null);
//   const [prevPage, setPrevPage] = useState<string | null>(null);



//   useEffect(() => {
//     const fetchHotels = async () => {
//       setLoading(true);
//       try {
//         const queryParams = new URLSearchParams({
//           page: page.toString(),
//           country: filters.country,
//           state: filters.state,
//           city: filters.city,
//           starRating: filters.starRating,
//           typeOfStay: filters.typeOfStay,
//           minPrice: filters.priceRange[0].toString(),
//           maxPrice: filters.priceRange[1].toString(),
//         });

//         const response = await fetch(`${BASE_URL}/api/hotels/filter/?${queryParams}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch hotels");
//         }
//         const data = await response.json();
//         setHotels(data.results);
//         setTotalHotels(data.count);
//         setNextPage(data.next);
//         setPrevPage(data.previous);

//         console.log("data" , data);
//         console.log("hotels" , hotels);
//       } catch (err) {
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError("An unknown error occurred");
//         }
//       } finally {
//         setLoading(false);
        
//       }
//     };
//     fetchHotels();
//   }, [page, filters]);

//   console.log("hotels" , hotels);
//   return (
//     <div className="p-6">
//       <h3 className="text-2xl font-bold mb-4">All Hotels</h3>
//       <p className="text-gray-500 mb-4">
//         Showing <span className="text-black">{hotels.length}</span> out of
//         <span className="text-black"> {totalHotels} </span> hotels
//       </p>
//       {loading ? (
//         <p className="text-center text-gray-600">Loading hotels...</p>
//       ) : error ? (
//         <p className="text-center text-red-500">{error}</p>
//       ) : (
//         <div className="space-y-4">
//         {hotels.map((hotel, index) => (
//           <HotelCard key={Math.random()} data={hotel} />
//         ))}
//       </div>
      
//       )}
//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-6 gap-4">
//         <button
//           disabled={!prevPage}
//           onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//           className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <button
//           disabled={!nextPage}
//           onClick={() => setPage((prev) => prev + 1)}
//           className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HotelList;
