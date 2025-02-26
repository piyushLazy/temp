"use client"; // Required for Next.js App Router

import "./allbuttons.css"; // Normal CSS import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Import images from public folder
import img1  from "../assets/dummyimg1.jpg";
import img2  from "../assets/dummyimg2.jpg";
import img3  from "../assets/dummyimg3.jpg";
import img4  from "../assets/dummyimg4.jpg";
import img5  from "../assets/dummyimg5.jpg";
import img6  from "../assets/dummyimg6.jpg";

const ImageSlider = () => {
  const settings = {
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll per navigation
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 1500, // Time interval for automatic sliding (in ms)
    rtl: false, // Ensures the sliding direction is to the right
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="image-slider-container1">
           
            <Slider {...settings}>
                <div className="image-slide">
                    < Image src={img1} alt="Scenic Jump" />
                </div>
                <div className="image-slide">
                    < Image src={img2} alt="Group Dinner" />
                </div>
                <div className="image-slide">
                    < Image src={img3} alt="Happy Travelers" />
                </div>
                <div className="image-slide">
                    < Image src={img4} alt="Cultural Architecture" />
                </div>
                <div className="image-slide">
                    <Image  src={img5} alt="Friends Exploring" />
                </div>
                <div className="image-slide">
                    < Image src={img6} alt="Road Trip" />
                </div>
            </Slider>
        </div>
    );
  
}

export default ImageSlider;
