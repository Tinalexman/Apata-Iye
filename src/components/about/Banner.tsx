"use client";

import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="lg:h-[calc(100vh-6rem)] xs:h-auto bg-[url('../../public/about_background.jpg')] w-full bg-cover bg-no-repeat">
      <div className="w-full h-[full] flex flex-col bg-[#E8F4FAD6]">
        <div className="w-full lg:h-[8rem] xs:h-auto xs:pb-5 lg:pb-0  xs:px-[5%] lg:px-[7rem] flex items-center">
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
            Decades of Experience, Countless Lives Touched.
          </motion.h1>
        </div>
        <div className="w-full lg:h-[calc(100vh-14rem)] xs:h-[60vh] lg:px-0 xs:px-[5%]">
          <img
            src={"/a_1.jpg"}
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
