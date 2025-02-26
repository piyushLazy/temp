"use client";

import React from "react";
import NavigationTabs from "./NavigationTabs";
import PriceCard_CustomizePackageButton from "./PriceCard_CustomizePackageButton";
import "./DetailsTourPackagesLayout.css";
import Overview from "./Overview";
import CardImageSlider from "../cardImageSlider/CardImageSlider";
import ImageNavigationTab from "./ImageNavigationTab";
import image from "../data/image/Hotel.avif";

const Layout = ({ hotel }) => {
  console.log(hotel);

  const images = [
    { id: 1, src: image, alt: "Image 1" },
    { id: 2, src: image, alt: "Image 2" },
    { id: 3, src: image, alt: "Image 3" },
    { id: 4, src: image, alt: "Image 4" },
    { id: 5, src: image, alt: "Image 5" },
    { id: 6, src: image, alt: "Image 6" },
  ];

  return (
    <div className="detailsTourlayout">
      {/* Desktop View */}
      <div className="detailsTourlayout-topcontainer-desktop">
        <ImageNavigationTab images={images} />
      </div>

      {/* Mobile View */}
      <div className="detailsTourlayout-topcontainer-mobile">
        <CardImageSlider />
      </div>

      <div className="detailsTourcontent-container">
        <div className="detailsTournavigation-container">
          <NavigationTabs hotel={hotel} />
        </div>
        <PriceCard_CustomizePackageButton />
      </div>
    </div>
  );
};

export default Layout;
