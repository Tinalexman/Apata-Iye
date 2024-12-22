"use client";

import React from "react";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="lg:h-[calc(100vh-6rem)] xs:h-auto bg-[url('../../public/contact_1.jpg')] w-full bg-cover bg-no-repeat">
      <div className="w-full h-full bg-[#0D0E0E9E] xs:px-[5%] lg:px-[7rem] xs:py-10 lg:py-0 flex flex-col gap-5 lg:pt-[20vh] items-center">
        <motion.h1
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            type: "spring",
            bounce: 0.6,
          }}
          className="text-white lg:text-5xl xs:text-2xl font-nunito font-bold lg:w-[40rem] xs:w-full text-center"
        >
          We Are Here to Serve You; Kindly Reach Out
        </motion.h1>
        <motion.h3
          animate={{
            x: ["20%", "0%"],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            type: "spring",
            bounce: 0.6,
          }}
          className="text-white text-opacity-80 text-sm font-nunito lg:w-[34rem] text-center"
        >
          Connect with us for personalized support, prompt responses, and the
          care you need. We are here to guide you every step of the way.
        </motion.h3>
      </div>
    </div>
  );
};

export default Banner;
