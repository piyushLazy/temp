// // "use client"; // Required for Next.js App Router

// // import React, { useState } from "react";
// // import "./FilterComponent.css";

// // const FilterComponent = () => {
// //   const [country, setCountry] = useState("");
// //   const [state, setState] = useState("");
// //   const [city, setCity] = useState("");
// //   const [priceRange, setPriceRange] = useState([0, 10000]);
// //   const [starRating, setStarRating] = useState("");
// //   const [stayType, setStayType] = useState("");
// //   const cities = ["Jaipur", "Goa", "Mumbai", "Delhi", "Bangalore"];

// //   console.log(country, cities, state, city, priceRange, starRating, stayType);


// //   const handleReset = () => {
// //     setCountry("");
// //     setState("");
// //     setCity("");
// //     setPriceRange([0, 10000]);
// //     setStarRating("");
// //     setStayType("");
// //   };

// //   return (
// //     <div className="filter-component">
// //       <div className="filter-header">
// //         <span>Filter</span>
// //         <button onClick={handleReset}>Reset all</button>
// //       </div>

// //       {/* Country Dropdown */}
// //       <div className="filter-section">
// //         <h4>Country</h4>
// //         <select value={country} onChange={(e) => setCountry(e.target.value)}>
// //           <option value="">Select Country</option>
// //           <option value="India">India</option>
// //           <option value="USA">USA</option>
// //         </select>
// //       </div>

// //       {/* State Dropdown */}
// //       <div className="filter-section">
// //         <h4>State</h4>
// //         <select value={city} onChange={(e) => setCity(e.target.value)}>
// //           <option value="">Select State</option>
// //           {cities.map((cityName) => (
// //             <option key={cityName} value={cityName}>
// //               {cityName}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* City Dropdown */}
// //       <div className="filter-section">
// //         <h4>City</h4>
// //         <select value={city} onChange={(e) => setCity(e.target.value)}>
// //           <option value="">Select City</option>
// //           <option value="Jaipur">Jaipur</option>
// //           <option value="Goa">Goa</option>
// //         </select>
// //       </div>

// //       {/* Price Range */}
// //       <div className="filter-section">
// //         <h4>Price range</h4>
// //         <div className="price-inputs">
// //           <input
// //             type="number"
// //             value={priceRange[0]}
// //             min="0"
// //             max="10000"
// //             onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
// //           />
// //           <input
// //             type="number"
// //             value={priceRange[1]}
// //             min="0"
// //             max="10000"
// //             onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
// //           />
// //         </div>
// //         <input
// //           type="range"
// //           min="0"
// //           max="10000"
// //           value={priceRange[1]}
// //           onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
// //         />
// //       </div>

// //       {/* Star Rating Dropdown */}
// //       <div className="filter-section">
// //         <h4>Star Rating</h4>
// //         <select value={starRating} onChange={(e) => setStarRating(e.target.value)}>
// //           <option value="">Choose</option>
// //           <option value="3">3 Star</option>
// //           <option value="4">4 Star</option>
// //           <option value="5">5 Star</option>
// //         </select>
// //       </div>

// //       {/* Type of Stay Dropdown */}
// //       <div className="filter-section">
// //         <h4>Type of Stay</h4>
// //         <select value={stayType} onChange={(e) => setStayType(e.target.value)}>
// //           <option value="">Choose</option>
// //           <option value="Budget">Budget</option>
// //           <option value="Luxury">Luxury</option>
// //           <option value="Camping">Camping</option>
// //         </select>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FilterComponent;
// //=============================================================================

// "use client"; // Required for Next.js App Router

// import React from "react";
// import "./FilterComponent.css";
// import apiHeader from '../data/APIHeader/ApiHeader.js';

// const FilterComponent = ({
//   destination, setDestination,
//   duration, setDuration,
//   priceRange, setPriceRange,
//   themes, setThemes,
//   season, setSeason,
//   accommodationType, setAccommodationType,
//   handleReset,
// }) => {

//   const destinationsList = ["All", "Rajasthan", "Kerala", "Goa", "Kashmir", "Ladakh", "Andaman"];
  
//   const handleCheckboxChange = (value, setState) => {
//     setState((prev) =>
//       prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
//     );
//   };

//   const filteredDestinations = destinationsList
//     .filter((place) => place.toLowerCase().includes(searchTerm.toLowerCase()))
//     .sort((a, b) => a.toLowerCase().indexOf(searchTerm.toLowerCase()) - b.toLowerCase().indexOf(searchTerm.toLowerCase()));

//   React.useEffect(() => {
//     const fetchFilteredData = async () => {
//       try {
//         const response = await fetch(`${apiHeader}/api/packages/filter/?state=${destination}&nights=${duration[1]}&min_price=${priceRange[0]}&max_price=${priceRange[1]}&tag=${themes}&budget=${accommodationType}`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ destination, duration, priceRange, themes, season, accommodationType }),
//         });
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching filtered data:", error);
//       }
//     };

//     fetchFilteredData();
//   }, [destination, duration, priceRange, themes, season, accommodationType]);

//   return (
//     <div className="filter-component">
//       <div className="filter-header">
//         <span>Filter</span>
//         <button onClick={handleReset}>Reset all</button>
//       </div>

//       {/* Destination Filter */}
//       <div className="filter-section-1st">
//         <p className="filter-section-1st-heading">Destination</p>
//         <input 
//           type="text" 
//           placeholder="Search" 
//           value={searchTerm} 
//           className="search-input"
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="place-checkboxes">
//           {filteredDestinations.map((place) => (
//             <label key={place} className="checkbox-label">
//               <input 
//                 type="checkbox" 
//                 value={place} 
//                 checked={destination.includes(place)}
//                 onChange={() => handleCheckboxChange(place, setDestination)} 
//               />
//               {place}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Duration Filter */}
//       <div className="filter-section">
//         <h4>Duration (in nights)</h4>
//         <div className="duration-inputs">
//           <input 
//             type="text" 
//             value={duration[0]}  
//             onChange={(e) => setDuration([Math.max(1, Math.min(15, Number(e.target.value))), duration[1]])} 
//           />
//           <input 
//             type="text" 
//             value={duration[1]}  
//             onChange={(e) => setDuration([duration[0], Math.max(1, Math.min(15, Number(e.target.value)))])}  
//           />
//         </div>
//         <input 
//           type="range" 
//           min="1" 
//           max="15" 
//           value={duration[1]} 
//           onChange={(e) => setDuration([duration[0], Number(e.target.value)])} 
//         />
//       </div>

//       {/* Price Range Filter */}
//       <div className="filter-section">
//         <h4>Price range</h4>
//         <div className="duration-inputs">
//           <input 
//             type="text" 
//             value={priceRange[0]} 
//             onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} 
//           />
//           <input 
//             type="text" 
//             value={priceRange[1]} 
//             onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} 
//           />
//         </div>
//         <input 
//           type="range" 
//           min="0" 
//           max="10000" 
//           value={priceRange[1]} 
//           onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} 
//         />
//       </div>

//       {/* Themes Filter */}
//       <div className="filter-section">
//         <h4>Themes</h4>
//         <div className="tags">
//           {["Adventure", "Beach", "Cultural", "Desert Safari", "Eco-friendly", "Family", "Food & Culinary", "Honeymoon", "Luxury", "Mountains", "Relaxation", "Road Trip", "Shopping"].map((theme) => (
//             <button 
//               key={theme} 
//               className={themes.includes(theme) ? "selected" : ""}
//               onClick={() => handleCheckboxChange(theme, setThemes)}
//             >
//               {theme}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Accommodation Type Filter */}
//       <div className="filter-section">
//         <h4>Accommodation Type</h4>
//         <div className="tags">
//           {["Deluxe", "Luxury", "Camping"].map((type) => (
//             <button 
//               key={type} 
//               className={accommodationType.includes(type) ? "selected" : ""}
//               onClick={() => handleCheckboxChange(type, setAccommodationType)}
//             >
//               {type}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;

"use client";

import { useState } from "react";
import { FaHotel } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiCalendarDateRange } from "react-icons/hi2";

const FilterComponent = () => {
  const [activeTab, setActiveTab] = useState("Packages");
  const [destination, setDestination] = useState("");
  const [nights, setNights] = useState("");

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center z-50 px-4">
      {/* Heading Section */}
      <div className="relative text-center text-white mb-16 sm:mb-24">
        <p className="text-4xl sm:text-6xl font-bold font-serif">Rejuvenation & Peace</p>
        <p className="text-md sm:text-lg mt-4 font-serif">Find Peace, Adventure, and Everything in Between.</p>
      </div>
    
      {/* Search Box Section */}
      <div className="relative bg-gray-100 shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center w-full max-w-5xl">
        
        {/* Tab Switcher */}
        <div className="absolute -top-10 max-sm:left-1/2 sm:left-1/2 md:left-[8.5rem] -translate-x-1/2 flex h-12 bg-gray-100 rounded-t-xl overflow-hidden shadow-md">
          <button
            className={`flex items-center gap-2 px-6 py-2 text-md font-serif transition-all duration-300 ${
              activeTab === "Packages" ? "bg-blue-500 text-white scale-105 shadow-md" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Packages")}
          >
            <FaUmbrellaBeach className=" text-xl  " /> Packages
          </button>

          <button
            className={`flex items-center gap-2 px-6 py-2 text-md font-serif transition-all duration-300 ${
              activeTab === "Hotels" ? "bg-blue-500 text-white scale-105 shadow-md" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Hotels")}
          >
            <FaHotel className="text-xl" /> Hotels
          </button>
        </div>

        {/* Destination Dropdown */}
        <div className="flex-1 border-b md:border-r md:border-b-0 border-gray-400 px-4 py-3 w-full">
          <label className="flex items-center gap-2 text-gray-600 font-lg">
            <FaMapLocationDot className="text-lg" /> Destination
          </label>
          <div className="relative">
            <select
              className="w-full mt-1 p-3 rounded-lg focus:outline-none focus:ring-2 text-gray-700 font-sans appearance-none"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Where do you want to go?</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Kerala">Kerala</option>
              <option value="Goa">Goa</option>
              <option value="Kashmir">Kashmir</option>
            </select>
            <span className="absolute right-4 top-4 text-gray-600 pointer-events-none">▼</span>
          </div>
        </div>

        {/* Number of Nights Dropdown */}
        <div className="flex-1 px-4 py-3 w-full">
          <label className="flex items-center text-gray-600 font-lg gap-2">
            <HiCalendarDateRange className="text-lg" /> Number of Nights
          </label>
          <div className="relative">
            <select
              className="w-full mt-1 p-3 rounded-lg focus:outline-none focus:ring-2 text-gray-700 font-sans appearance-none"
              value={nights}
              onChange={(e) => setNights(e.target.value)}
            >
              <option value="">Choose the trip duration.</option>
              <option value="1">1 Night</option>
              <option value="3">3 Nights</option>
              <option value="5">5 Nights</option>
              <option value="7">7 Nights</option>
            </select>
            <span className="absolute right-4 top-4 text-gray-600 pointer-events-none"> ▼ </span>
          </div>
        </div>
        
        
        <button className="mt-5 md:hidden w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold">
            Search Packages
          </button>
      </div>

      {/* Search Button */}
      <button className="absolute max-sm:hidden sm:hidden md:block  -mb-[22.2rem] left-1/2 -translate-x-1/2 px-16 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-serif rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500">
        Search Packages
      </button>
    </div>
  );
};

export default FilterComponent;
