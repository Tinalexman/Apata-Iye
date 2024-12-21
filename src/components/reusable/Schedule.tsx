"use client";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

const Schedule = () => {
  return (
    <div className="w-full bg-background xs:px-[5%] lg:px-[7rem] lg:py-20 xs:py-10">
      <div className="w-full lg:rounded-2xl xs:rounded-xl lg:h-[13rem] xs:h-[7rem] bg-[url('../../public/bg.jpg')] bg-cover lg:px-20 xs:px-5 lg:py-5 xs:py-3 flex flex-col justify-center relative overflow-hidden">
        <h2 className="text-sh-2 font-bold font-nunito xs:text-sm lg:text-2xl">
          Schedule Your Visit Today
        </h2>
        <p className="text-sh-3 lg:text-xs xs:text-[0.5rem] lg:w-[28rem] xs:w-full">
          Take the first step toward better health with our seamless appointment
          booking process. Choose a time that works for you and let us provide
          the care you deserve
        </p>
        <Link
          href={"/book-appointment"}
          className="py-1 lg:mt-5 xs:mt-2 border-primary hover:bg-primary bg-white hover:text-white duration-300 ease-out transition-colors border rounded-xl lg:text-[0.9rem] xs:text-[0.6rem] font-lato text-primary lg:w-[200px] xs:w-[150px]"
        >
          BOOK AN APPOINTMENT
        </Link>
        <motion.div
          animate={{
            x: ["-5%", "0%", "5%", "0%"],
            y: ["-5%", "0%", "5%", "0%"],
            scale: [1, 1.12, 1.35],
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute lg:-top-[8rem] xs:-top-[3rem] lg:-right-[5rem] xs:-right-[3rem] lg:size-[15rem] xs:size-[5rem] rounded-full bg-primary z-5 shadow-2xl shadow-[#405177]"
        />
      </div>
    </div>
  );
};

export default Schedule;
