"use client"; // Required for Next.js App Router

import ImageSlider from "./ImageSlider";
import ImageSlider2 from "./ImageSlider2";
import Image from "next/image"; // Next.js Image optimization
import imgHeart from "../assets/heartimageuse.png"; // Move images to /public
import starImg from "../assets/starimage.png";
import "./allbuttons.css"; // Import normal CSS

const HappyTraveller = () => {
  return (
    <div>
      <div className="happy-traveller-heading">
        <span>
          Lazy Yatra has served 10K or more customers, and clients have
          showered praises. We have 95% positive reviews, and 73% of our clients
          trusted us back for their next trips.
        </span>
      </div>

      <div className="img-component">
        <div className="Vector1">
          <Image className="Vector1" src={imgHeart} alt="Heart Icon" />
        </div>

        <ImageSlider />
        <ImageSlider2 />

        <div className="Vector2">
          <Image className="Vector2" src={starImg} alt="Star Icon" />
        </div>
      </div>
    </div>
  );
};

export default HappyTraveller;
