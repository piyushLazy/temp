"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import BackgroundSlider from "@/components/HomePageSlider/BackgroundSlider";
import "./HomePage.css";
import Head from "next/head";

import  FooterLayout  from '../footer/FooterLayout'
// Dynamically import components for better performance
const MostPopularPicks = dynamic(() => import("@/components/mostpopularPicks/MostPopularPicks"), { ssr: false, loading: () => <div>Loading Most Popular Picks...</div> });
 const Occasional = dynamic(() => import("@/components/occasional/Occasional"), { ssr: false, loading: () => <div>Loading Occasional...</div> });
const PopularHotels = dynamic(() => import("@/components/popularHotels/PopularHotels"), { ssr: false, loading: () => <div>Loading Popular Hotels...</div> });
const Destinations = dynamic(() => import("@/components/destinations/Destinations"), { ssr: false, loading: () => <div>Loading Destinations...</div> });
// const FAQLayout = dynamic(() => import("@/components/faqTestimonial/FAQLayout"), { ssr: false, loading: () => <div>Loading FAQ...</div> });
const ContactUsLayout = dynamic(() => import("@/components/contactUs/ContactUsLayout"), { ssr: false, loading: () => <div>Loading Contact Us...</div> });
const HeroSection = dynamic(() => import("@/components/bookNow/HeroSection"), { ssr: false, loading: () => <div>Loading Hero Section...</div> });
// const FooterLayout = dynamic(() => import("@/components/footer/FooterLayout"), { ssr: false, loading: () => <div>Loading Footer...</div> });
const AccordionList = dynamic(() => import("@/components/faq/AccordionList"), { ssr: false, loading: () => <div>Loading FAQ...</div> });
const VideoSection = dynamic(() => import("@/components/videoSection"), { ssr: false, loading: () => <div>Loading video section...</div> });

const HomeWhyUs =dynamic(() => import("@/components/whyUs/mainWhyUS"), { ssr: false, loading: () => <div>Loading HomeWhyUs...</div> });
function HomePageMiddle() {
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
        <div className="md:mt-16">
   <Occasional /> 
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
 
        <div className="md:mt-24">
          <ContactUsLayout /> 
        </div>
        <div>
          <HeroSection />
        </div>
        <div>
          <FooterLayout />   Footer Layout  Footer Layout 
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
