"use client";
import React from "react";

import { motion } from "framer-motion";

const Schedule = () => {
  return (
    <div className="w-full bg-background lg:px-[7rem] lg:py-20">
      <div className="w-full rounded-2xl h-[13rem] bg-[url('../../public/bg.jpg')] bg-cover px-20 py-5 flex flex-col justify-center relative overflow-hidden">
        <h2 className="text-sh-2 font-bold font-nunito text-2xl">
          Schedule Your Visit Today
        </h2>
        <p className="text-sh-3 text-xs w-[28rem]">
          Take the first step toward better health with our seamless appointment
          booking process. Choose a time that works for you and let us provide
          the care you deserve
        </p>
        <button className="py-1 mt-5 border-primary hover:bg-primary bg-white hover:text-white duration-300 ease-out transition-colors border rounded-xl text-[0.9rem] font-lato text-primary w-[200px]">
          BOOK AN APPOINTMENT
        </button>
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
          className="absolute -top-[8rem] -right-[5rem] size-[15rem] rounded-full bg-primary z-5 shadow-2xl shadow-[#405177]"
        />
      </div>
    </div>
  );
};

export default Schedule;
