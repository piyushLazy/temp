"use client"; // Required for Next.js App Router

import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./allbuttons.css"; // Import normal CSS

const AllButtons = () => {
  const [post, setPost] = useState("happytraveller");

  function changeHandler(postid) {
    setPost(postid);
  }

  return (
    <div>
      <div>
        <span className="why-choose-us-title">Why Choose Us?</span>

        <div>
          <span className="left-content-description">
            Founded by two avid travelers,{" "}
            <span className="text-style-1">Lazy Yatra's motto</span> is to make
            you feel lost—not on the road, but in the journey itself. Whether
            it's in the tranquility of a place, the beauty of nature, the sound
            of gushing waterfall waters, or the peaceful orange glow of a
            sunset.
          </span>
        </div>

        {/* Buttons Section */}
        {[
          { id: "happytraveller", text: "10K+ Happy Travellers" },
          { id: "bestprice", text: "Best Price Guarantee" },
          { id: "passionservice", text: "Passionate Service" },
          { id: "fastsupport", text: "On Trip Fast Support 24/7" }
        ].map((item) => (
          <div
            key={item.id}
            className={`frame-${item.id} ${post === item.id ? "active" : ""}`}
          >
            <div onClick={() => changeHandler(item.id)}>
              <span className={`${item.id} ${post === item.id ? "active" : ""}`}>
                {item.text}
              </span>
            </div>
            <FaArrowRightLong className={post === item.id ? "active" : ""} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllButtons;
