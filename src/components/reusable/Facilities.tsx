"use client";
import React, { useRef, FC } from "react";

import Image from "next/image";

import I1 from "@/public/img_1.jpg";
import I2 from "@/public/img_2.jpg";
import I3 from "@/public/img_3.jpg";
import I4 from "@/public/img_4.jpg";

import { motion, useInView } from "framer-motion";

const Facilities: FC<{ useWhite?: boolean }> = ({ useWhite }) => {
  const target = useRef(null);
  const inView = useInView(target, { amount: "some" });
  return (
    <div
      id="facilities"
      ref={target}
      className={`w-full flex lg:flex-col xs:flex-col-reverse lg:pt-10 xs:pt-5 ${
        useWhite ? "lg:bg-white" : "lg:bg-background"
      } xs:bg-primary`}
    >
      <div className="w-full flex flex-col">
        <h3 className="lg:text-primary xs:text-white font-lato font-bold xs:text-[0.5rem] lg:text-[0.8rem] xs:leading-[0.8rem] lg:leading-[1.2rem] lg:ml-[7rem] xs:ml-[5%]">
          FACILITIES GALLERY
        </h3>
        <div className="w-full flex lg:flex-row xs:flex-col lg:px-[7rem] xs:px-[5%] lg:pb-10 xs:pb-5 lg:pt-5 xs:pt-2 items-center justify-between">
          <h2 className="lg:text-sh-2 xs:text-white font-nunito font-bold xs:text-lg lg:text-2xl lg:w-[30rem] xs:w-full">
            Explore Our Patient-Centered Facilites;{" "}
            <span className="lg:text-primary xs:text-white">
              Designed For Your Comfort And Care
            </span>
          </h2>
          <p className="lg:text-sh-3 xs:text-white xs:mt-2 lg:mt-0 text-xs lg:w-[30rem] xs:w-full">
            Take a closer look at our thoughtfully built facility, where comfort
            meets care. We make your well-being our priority, ensuring a
            welcoming and calm environment for every patient.
          </p>
        </div>
      </div>
      <div className="w-full bg-primary grid xs:grid-cols-2 xs:gap-4 lg:gap-0 lg:grid-cols-4 lg:px-[7rem] xs:px-[5%] lg:py-10 xs:py-5">
        {[I4, I3, I2, I1].map((im, i) => {
          return (
            <motion.div
              key={i}
              animate={{
                y: !inView ? (i % 2 == 0 ? "-20%" : "20%") : "0%",
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: i * 0.15,
                type: "spring",
                bounce: 0.6,
              }}
              className={`w-full border border-white border-opacity-80 overflow-hidden ${
                i === 0 ? "lg:rounded-l-xl" : i === 3 ? "lg:rounded-r-xl" : ""
              } xs:rounded-md`}
            >
              <Image
                src={im}
                alt="facility image"
                className="w-full lg:h-[20rem] xs:h-[200px] object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
