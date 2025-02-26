"use client"; // Required for Next.js App Router

import { useState } from "react";
import AllButtons from "./AllButtons";
import HappyTraveller from "../whyUs/HappyTraveller";
import BestPrice from "../whyUs/BestPrice";
import PassionService from "../whyUs/PassionService";
import FastSupport from "../whyUs/FastSupport";
import "./allbuttons.css"; // Import normal CSS

const HomeWhyUs = () => {
  const [post, setPost] = useState("happytraveller");

  return (
    <div className="home-whyus-container">
      <div className="left-button-container">
        <AllButtons post={post} setPost={setPost} />
      </div>

      <div className="right-posts-container">
        {post === "happytraveller" ? (
          <HappyTraveller />
        ) : post === "bestprice" ? (
          <BestPrice />
        ) : post === "passionservice" ? (
          <PassionService />
        ) : (
          <FastSupport />
        )}
      </div>
    </div>
  );
};

export default HomeWhyUs;
