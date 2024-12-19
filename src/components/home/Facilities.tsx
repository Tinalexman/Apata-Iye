"use client";
import React from "react";

import Image from "next/image";

import I1 from "@/public/img_1.jpg";
import I2 from "@/public/img_2.jpg";
import I3 from "@/public/img_3.jpg";
import I4 from "@/public/img_4.jpg";

import { motion } from "framer-motion";

const Facilities = () => {
  return (
    <div className="w-full flex flex-col lg:pt-10 bg-background">
      <h3 className="text-primary font-lato font-bold text-[0.8rem] leading-[1.2rem] lg:ml-[7rem]">
        FACILITIES GALLERY
      </h3>
      <div className="w-full flex lg:px-[7rem] lg:pb-10 lg:pt-5 items-center justify-between">
        <h2 className="text-sh-2 font-nunito font-bold text-2xl w-[30rem]">
          Explore Our Patient-Centered Facilites;{" "}
          <span className="text-primary">
            Designed For Your Comfort And Care
          </span>
        </h2>
        <p className="text-sh-3 text-xs w-[30rem]">
          Take a closer look at our thoughtfully built facility, where comfort
          meets care. We make your well-being our priority, ensuring a welcoming
          and calm environment for every patient.
        </p>
      </div>
      <div className="w-full bg-primary grid grid-cols-4 lg:px-[7rem] lg:py-10">
        {[I4, I3, I2, I1].map((im, i) => {
          return (
            <motion.div
              key={i}
              animate={{
                y: [i % 2 == 0 ? "-20%" : "20%", "0%"],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: i * 0.15,
                type: "spring",
                bounce: 0.6,
              }}
              className={`w-full border border-white border-opacity-80 overflow-hidden ${
                i === 0 ? "rounded-l-xl" : i === 3 ? "rounded-r-xl" : ""
              }`}
            >
              <Image
                src={im}
                alt="facility image"
                className="w-full h-[20rem] object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
