"use client";

import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-[url('../../public/app_2.jpg')] w-full bg-cover bg-no-repeat">
      <div className="w-full lg:h-[10rem] xs:h-auto xs:pb-5 lg:pb-0 justify-between bg-[#E8F4FAD6] xs:px-[5%] lg:px-[7rem] flex lg:flex-row xs:flex-col items-center">
        <motion.h1
          animate={{
            x: ["50%", "0%"],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="font-bold xs:text-center font-nunito lg:text-start xs:text-lg lg:text-3xl text-sh-2 lg:w-[20rem] xs:w-full xs:mt-5 lg:mt-0"
        >
          Quick and Easy Appointment Booking
        </motion.h1>
        <motion.p
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="xs:text-center font-nunito lg:text-start xs:text-xs lg:text-xs text-sh-3 lg:w-[45%] xs:w-full xs:mt-5 lg:mt-0"
        >
          We value your time, so we&apos;ve made our appointment process as
          quick and easy as possible. Simply choose your preferred time and
          date, and you&apos;re all set to receive top-quality care. Whether
          it&apos;s a routine check-up or a specific consultation.
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
