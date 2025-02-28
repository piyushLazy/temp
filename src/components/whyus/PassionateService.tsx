"use client";

import React from "react";
import { motion } from "framer-motion";

const PassionateService = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-4">
      
      {/* Description */}
      <p className="text-zinc-600 font-sans text-center max-w-lg">
        Lazy Yatra offers personalized trip planning with expert advice, seamless hotel and car bookings, and a single point of contact for transparency and satisfaction.
      </p>

      {/* Tablet Frame */}
      <div className="relative md:w-[550px] md:h-[300px] bg-white rounded-xl p-4 shadow-2xl flex flex-col items-center border-[12px] border-zinc-600">
        
        {/* Chat Container */}
        <div className="mt-10 flex flex-col space-y-6 w-full px-6">
          
          {/* Bot Message with Chat Bubble Tail */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", repeatDelay: 1 }}
            className="relative bg-white text-black px-4 py-3 rounded-xl max-w-[75%] self-start border-2 border-black before:content-[''] before:absolute before:-left-2 before:top-1/2 before:w-3 before:h-3 before:bg-white before:border-l-2 before:border-t-2 before:border-black before:rotate-315"
          >
            Hi there! I'm Lazy Yatra. How can I help make your trip special today?
          </motion.div>

          {/* User Message with Chat Bubble Tail */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", repeatDelay: 1 }}
            className="relative bg-white text-black px-4 py-3 rounded-xl max-w-[75%] self-end border-2 border-black before:content-[''] before:absolute before:-right-2 before:top-1/2 before:w-3 before:h-3 before:bg-white before:border-r-2 before:border-t-2 before:border-black before:rotate-45"
          >
            I would like to plan my trip to Kashmir.
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PassionateService;
