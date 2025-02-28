// import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import PersonImage from "@/assets/why-us-man-img.png";
import Frame1 from "@/assets/Frame1.png";
import Frame2 from "@/assets/Frame2.png";
import Frame3 from "@/assets/Frame3.png";

const RightSection = () => {
  return (
    <div className="flex flex-row lg:flex-row items-center gap-6 p-2 h-full">
      
      {/* Left Side - Text & Cards */}
      <div className="flex items-center gap-12 w-full">
        
        <div className="flex flex-col gap-12 w-full max-w-xl">
          
          {/* Full Width Main Line */}
          <div className="w-full">
            <p className="text-gray-800 text-md font-serif pt-14 leading-relaxed text-center">
              Lazy Yatra builds packages in-house, helping us reduce costs and provide a better experience. 
              We deal directly with hotels & cab providers to minimize turnaround time and make trips hassle-free.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-3 gap-12 mt-6 w-full">
            
            {/* First Image (Moves & Rotates Slightly) */}
            <motion.div
              initial={{ x: -10, rotate: -3 }}
              animate={{ x: 10, rotate: 3 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              className="relative w-64 h-64 mt-6 rounded-xl z-10"
            >
              <Image src={Frame2} alt="Add-ons" layout="fill" objectFit="contain" />
            </motion.div>

            {/* Second Image (Moves & Rotates Slightly) */}
            <motion.div
              initial={{ x: -10, rotate: -3 }}
              animate={{ x: 10, rotate: 3 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              className="relative w-64 h-64 rounded-xl z-20"
            >
              <Image src={Frame1} alt="Base Price" layout="fill" objectFit="contain" />
            </motion.div>

            {/* Third Image (Moves & Rotates Slightly) */}
            <motion.div
              initial={{ x: -10, rotate: -3 }}
              animate={{ x: 10, rotate: 3 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              className="relative w-64 h-64 mt-6 rounded-xl z-10"
            >
              <Image src={Frame3} alt="Total Savings" layout="fill" objectFit="contain" />
            </motion.div>

          </div>
        </div>

        {/* Right Side - Person Image */}
        <div className="relative w-72 h-96">
          <Image 
            src={PersonImage}
            alt="Person"
            layout="fill"
            objectFit="contain"
            className="w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default RightSection;
