"use client"; // Required for Next.js App Router

import Image from "next/image"; // Next.js optimized image component
import manimg from "../assets/happyman.jpg"; // Move the image to `public` folder
import "./pricingcards.css"; // Import normal CSS

const BestPrice = () => {
  return (
    <div>
      <div className="best-price-heading">
        <span>
          Lazy Yatra builds packages in-house. It helps us reduce the cost and
          provide a better experience. We directly deal with hotels & cab
          providers to reduce turnaround time & make the trip hassle-free.
        </span>
      </div>

      <div>
        <Image className="portrait-image" src={manimg} alt="Happy Man" />
      </div>
    </div>
  );
};

export default BestPrice;
