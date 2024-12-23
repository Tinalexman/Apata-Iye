"use client";

import React, { useRef } from "react";

import Image from "next/image";

import I1 from "@/public/about_1.jpg";
import I2 from "@/public/about_2.jpg";
import I3 from "@/public/about_3.jpg";
import I4 from "@/public/about_4.jpg";
import I5 from "@/public/about_5.jpg";
import I6 from "@/public/about_6.jpg";

import { motion, useInView } from "framer-motion";

const About = () => {
  const target = useRef(null);
  const inView = useInView(target, {
    amount: "some",
  });
  return (
    <div
      ref={target}
      className="w-full flex lg:flex-row xs:flex-col-reverse justify-between xs:gap-10 lg:gap-0 lg:px-[7rem] xs:px-[5%] bg-primary xs:py-5 lg:pt-14 lg:pb-20 font-lato"
    >
      <div className="xs:w-full lg:w-[40%] xs:h-auto lg:h-[500px] relative">
        <Image
          src={I1}
          alt="about us"
          className="lg:w-[305px] xs:w-[70%] xs:h-auto lg:h-[430px] border-4 border-[#60A5FA] rounded-md "
        />
        <Image
          src={I2}
          alt="about us"
          className="lg:w-[250px] xs:w-[50%] xs:h-auto lg:h-[380px] border-4 border-[#60A5FA] rounded-md z-1 absolute bottom-5 right-0"
        />
        <div className="absolute z-2 grid grid-cols-4 gap-2 bottom-0 left-5 right-0">
          {[I3, I4, I5, I6].map((im, i) => {
            return (
              <Image
                key={i}
                src={im}
                alt="about us"
                className="lg:size-[120px] xs:size-[70px] object-cover border-[3px] border-[#60A5FA] rounded-md"
              />
            );
          })}
        </div>
      </div>
      <div className="lg:w-[45%] xs:w-full flex flex-col xs:items-center lg:items-start gap-4">
        <motion.h3
          animate={{
            y: inView ? "0%" : "-20%",
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-white font-bold xs:text-[0.5rem] lg:text-[0.8rem] xs:leading-[0.8rem] lg:leading-[1.2rem]"
        >
          ABOUT US
        </motion.h3>
        <h2 className="text-white font-nunito font-bold lg:text-2xl xs:text-lg lg:text-start xs:text-center">
          More than 30 Years Legacy of Trust, Compassion and Diligence in
          Healthcare.
        </h2>
        <motion.p
          animate={{
            y: inView ? "0%" : "20%",
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="lg:text-sm lg:text-start xs:text-center xs:text-xs text-white text-opacity-90"
        >
          For over three decades, Apata-Iye Clinic and Maternity Home has been a
          pillar of healthcare in its community, building an enduring legacy of
          trust, compassion, and dedication. By balancing affordability with
          unwavering excellence, we have remained steadfast in our mission to
          provide comprehensive and accessible care to everyone who walks
          through our doors. Guided by our motto, &quot;In Service to
          Humanity.&quot;
        </motion.p>
        <motion.p
          animate={{
            y: inView ? "0%" : "20%",
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="lg:text-sm lg:text-start xs:text-center xs:text-xs text-white text-opacity-90"
        >
          We have grown and expanded significantly over these years, constantly
          evolving to meet the changing needs of our patients and community. As
          part of our unwavering commitment to delivering exceptional
          healthcare, we actively seek to enhance our services and ensure no
          patient is left without the care they require.
        </motion.p>
        <div className="flex lg:w-fit xs:w-full gap-4 mt-2">
          <motion.div
            animate={{
              y: inView ? "0%" : "-20%",
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="lg:w-[10rem] xs:w-full lg:h-14 xs:h-12 rounded bg-white py-1 flex flex-col justify-center items-center text-primary"
          >
            <h6 className="text-xs">Proven Trust</h6>
            <h2 className="lg:text-2xl xs:text-xl font-bold">30+ years</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
