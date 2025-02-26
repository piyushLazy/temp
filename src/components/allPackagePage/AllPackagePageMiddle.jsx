import React, { useState, useEffect } from 'react';
import FilterComponent from '../packageFilterSlide/FilterComponent';
import './AllPackagePage.css';
import dynamic from "next/dynamic";
import apiHeader from '../data/APIHeader/ApiHeader.js'; // Ensure apiHeader is imported
import TravelPackageCard from '../card/detailAllPackagesCard/TravelPackageCard';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner'; // Import the Loading Spinner
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import LoadingAnimation from "../assets/LoadingAnimation.json";
function AppPackagePageMiddle() {
  // State to manage the filters
  const [destination, setDestination] = useState([]);
  const [duration, setDuration] = useState([1, 15]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [themes, setThemes] = useState([]);
  const [season, setSeason] = useState([]);
  const [accommodationType, setAccommodationType] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading status

  // Debounce timer
  const [debounceTimer, setDebounceTimer] = useState(null);

  // Function to handle filter reset
  const handleReset = () => {
    setDestination([]);
    setDuration([1, 15]);
    setPriceRange([0, 100000]);
    setThemes([]);
    setSeason([]);
    setAccommodationType([]);
  };

  useEffect(() => {
    const fetchFilteredData = async () => {
      setLoading(true); // Set loading to true when fetching data
      try {
        // Prepare query parameters for the GET request manually
        const queryParams = new URLSearchParams();

        // Add the destination states as separate state key-value pairs
        destination.forEach(state => {
          queryParams.append('state', state);  // This creates state=Goa&state=Kerala&state=Rajasthan
        });

        // Add other filters as query parameters
        queryParams.append('nights', duration[1]);
        queryParams.append('min_price', priceRange[0]);
        queryParams.append('max_price', priceRange[1]);
        queryParams.append('tag', themes.join(','));
        queryParams.append('budget', accommodationType.join(','));

        // Construct the full URL
        const url = `${apiHeader}/api/packages/filter/?${queryParams.toString()}`;

        // Send the GET request with the query parameters
        const response = await fetch(url, {
          method: "GET", // Ensure the method is GET, no body is sent
        });

        const data = await response.json();
        setPackages(data?.results?.results); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching filtered data:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    // Debounce the API call
    if (debounceTimer) {
      clearTimeout(debounceTimer); // Clear the previous timeout
    }

    const timer = setTimeout(() => {
      fetchFilteredData(); // Fetch data after delay
    }, 1000); // Adjust delay time as per your requirement (1 second here)
    
    setDebounceTimer(timer); // Store the timeout ID

    // Cleanup: Clear the timer when component unmounts or on dependencies change
    return () => clearTimeout(timer);

  }, [destination, duration, priceRange, themes, season, accommodationType]);

  console.log(packages);  // Safe access with optional chaining

  return (
    <div className="allPackagesPageMiddle">
      <div className="filter-container">
        <FilterComponent
          destination={destination}
          setDestination={setDestination}
          duration={duration}
          setDuration={setDuration}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          themes={themes}
          setThemes={setThemes}
          season={season}
          setSeason={setSeason}
          accommodationType={accommodationType}
          setAccommodationType={setAccommodationType}
          handleReset={handleReset} // Pass reset function
        />
      </div>

      <div className="current-filter-values">
        {/* Show loading spinner while fetching data */}
        {loading ? (
          <div className="loading-container">
           <Lottie animationData={LoadingAnimation } loop={true} style={{ width: 200, height: 200 }} />
          </div>
        ) : (
          packages.map((pkg) => (<TravelPackageCard key={pkg.id} data={pkg} />))
        )}
      </div>
    </div>
  );
}

export default AppPackagePageMiddle;
