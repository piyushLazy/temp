"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingAnimation from "../assets/LoadingAnimation.json";
import FooterLayout from "../footer/FooterLayout";
import Head from "next/head";
import "./HomePage.css";
import BackgroundSlider from "@/components/HomePageSlider/BackgroundSlider";     


// Dynamically import components without inline loading placeholders
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const MostPopularPicks = dynamic(() => import("@/components/mostpopularPicks/MostPopularPicks"), { ssr: false });
const Occasional = dynamic(() => import("@/components/occasional/Occasional"), { ssr: false });
const PopularHotels = dynamic(() => import("@/components/popularHotels/PopularHotels"), { ssr: false });
const Destinations = dynamic(() => import("@/components/destinations/Destinations"), { ssr: false });
//const ContactUsLayout = dynamic(() => import("@/components/contactUs/contact"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/bookNow/HeroSection"), { ssr: false });
const AccordionList = dynamic(() => import("@/components/faq/AccordionList"), { ssr: false });
const VideoSection = dynamic(() => import("@/components/videoSection"), { ssr: false });
const HomeWhyUs = dynamic(() => import("@/components/whyUs/mainWhyUS"), { ssr: false });

function HomePageMiddle() {
  const [loading, setLoading] = useState(true);

  // Wait for all dynamic imports to complete
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000); // Simulate loading time
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full mt-24">
        <Lottie animationData={LoadingAnimation} loop style={{ width: 450, height: 450 }} />
      </div>
    );
  }
  return (
    <>
    <Head>
      <title>My Awesome Page</title>
      <meta name="description" content="A beautiful background slider with smooth transitions" />
    </Head>
    <div className="homePage-container">
      <div className="homePage-body  overflow-x-hidden  ">
        
        <div className="homePage-body-backgroundslider">
          <BackgroundSlider />
        </div> 
      

        <div className="homePage-body-mostpopularpicks">
                {/* <Suspense fallback={<div>Loading Most Popular Picks...</div>}> */}
                    <MostPopularPicks/>
                {/* </Suspense> */}
        </div>
 
        <div>
            <PopularHotels /> 
        </div>
        <div>
                <Destinations />
        </div>
     
        <div  >
    <HomeWhyUs /> 
        </div>
    <div className="md:mt-16">
      <VideoSection/>
    </div>
    <div>
          <AccordionList /> 
        </div>
{/*  
        <div className="md:mt-24">
          <ContactUsLayout /> 
        </div> */}
        <div>
          <HeroSection />
        </div>
        <div>
          <FooterLayout />    
        </div>

{/* 
       

        <Destinations />  */}
 {/* <FAQLayout /> 
     */}
      {/* <HeroSection /> 
       <FooterLayout />  */}
      </div>
    </div>
    </>
  );
}

export default HomePageMiddle;
