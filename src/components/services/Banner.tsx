"use client";

import React from "react";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="lg:h-[600px] xs:h-auto bg-[url('../../public/service_background.jpg')] w-full bg-cover bg-no-repeat">
      <div className="w-full flex flex-col">
        <div className="w-full lg:h-[10rem] xs:h-auto xs:pb-5 lg:pb-0 bg-[#E8F4FAD6] xs:px-[5%] lg:px-[7rem] flex items-center">
          <motion.h1
            animate={{
              x: ["50%", "0%"],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="font-bold xs:text-center font-nunito lg:text-start xs:text-lg lg:text-2xl text-sh-2 lg:w-[20rem] xs:w-full xs:mt-5 lg:mt-0"
          >
            Exceptional Care in Every Service We Deliver
          </motion.h1>
        </div>
        <div className="w-full bg-primary xs:px-[5%] lg:px-[7rem] lg:py-10 xs:py-5 grid lg:grid-cols-4 xs:grid-cols-1">
          {["/s_1.jpg", "/s_2.jpg", "/s_3.jpg", "/s_4.jpg"].map((im, i) => (
            <motion.div
              animate={{
                y: [
                  i % 2 == 0 ? "-0.5%" : "0.5%",
                  i % 2 == 0 ? "0.5%" : "-0.5%",
                ],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              key={i}
              className="h-[25rem]"
            >
              <img
                src={im}
                alt="image"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
