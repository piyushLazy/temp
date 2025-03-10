import React from 'react'
import  FilterComponent  from '../hotelFilterSlide/FilterComponent' 
import BackgroundSlider from "../../components/HomePageSlider/BackgroundSlider";
import './AllHotelPage.css'
import HotelCard from '@/components/allHotelPage/HotelsCards';
function AppPackagePageMiddle() {

  
  return (
    <div className="allPackagesPageMiddle">


      <div className='flex mx-8 justify-between gap-10'> 
      <div className="filter-container">
        <FilterComponent/>
      </div>
       <div>
        <HotelCard/>
       </div>
      </div>
      

    </div>
  )
}

export default AppPackagePageMiddle