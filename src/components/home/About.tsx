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
      className="w-full flex justify-between lg:px-[7rem] bg-primary lg:pt-14 lg:pb-20 font-lato"
    >
      <div className="w-[40%] h-[500px] relative">
        <Image
          src={I1}
          alt="about us"
          className="w-[305px] h-[430px] border-4 border-[#60A5FA] rounded-md absolute left-0 top-0"
        />
        <Image
          src={I2}
          alt="about us"
          className="w-[250px] h-[380px] border-4 border-[#60A5FA] rounded-md z-1 absolute bottom-0 right-0"
        />
        <div className="absolute z-2 grid grid-cols-4 gap-2 bottom-0 left-5 right-0">
          {[I3, I4, I5, I6].map((im, i) => {
            return (
              <Image
                key={i}
                src={im}
                alt="about us"
                className="size-[120px] border-2 border-[#60A5FA] rounded-md"
              />
            );
          })}
        </div>
      </div>
      <div className="w-[45%] flex flex-col gap-4">
        <motion.h3
          animate={{
            y: inView ? "0%" : "-20%",
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-secondary font-bold text-[0.8rem] leading-[1.2rem]"
        >
          ABOUT US
        </motion.h3>
        <h2 className="text-white font-nunito font-bold text-2xl">
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
          className="text-sm text-white text-opacity-90"
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
          className="text-sm text-white text-opacity-90"
        >
          We have grown and expanded significantly over these years, constantly
          evolving to meet the changing needs of our patients and community. As
          part of our unwavering commitment to delivering exceptional
          healthcare, we actively seek to enhance our services and ensure no
          patient is left without the care they require.
        </motion.p>
        <div className="flex w-fit gap-4 mt-2">
          <motion.div
            animate={{
              y: inView ? "0%" : "-20%",
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="w-[10rem] h-14 rounded bg-white px-2 py-1 flex flex-col justify-center items-center text-[#145F17]"
          >
            <h6 className="text-xs">Happy Patients</h6>
            <h2 className="text-2xl font-bold">50,000+</h2>
          </motion.div>
          <motion.div
            animate={{
              x: inView ? "0%" : "20%",
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="w-[10rem] h-14 rounded bg-white px-2 py-1 flex flex-col justify-center items-center text-primary"
          >
            <h6 className="text-xs">Proven Trust</h6>
            <h2 className="text-2xl font-bold">30+ years</h2>
          </motion.div>
        </div>
        <div className="flex w-fit gap-4 mt-2">
          <motion.div
            animate={{
              x: inView ? "0%" : "-20%",
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="w-[10rem] h-14 rounded bg-white px-2 py-1 flex flex-col justify-center items-center text-[#EB0F5F]"
          >
            <h6 className="text-xs">Accolades</h6>
            <h2 className="text-2xl font-bold">100+</h2>
          </motion.div>
          <motion.div
            animate={{
              y: inView ? "0%" : "20%",
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="w-[10rem] h-14 rounded bg-white px-2 py-1 flex flex-col justify-center items-center text-[#25C3B6]"
          >
            <h6 className="text-xs">Employees</h6>
            <h2 className="text-2xl font-bold">20+</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
