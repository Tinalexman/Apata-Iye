"use client";

import React from "react";

import Image from "next/image";
import G1 from "@/public/7_frm.svg";
import G2 from "@/public/100k_img.svg";
import G3 from "@/public/3_and_4.svg";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="lg:h-[calc(100vh-6rem)] bg-[url('../../public/hero_image.jpg')] w-full bg-cover bg-no-repeat">
      <div className="w-full h-full bg-[#E8F4FAD6] lg:px-[7rem] flex justify-between items-center">
        <div className="flex flex-col lg:gap-7 lg:w-[35rem]">
          <motion.div
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="flex w-fit gap-1 items-center"
          >
            <div className="lg:w-3 bg-primary h-0.5" />
            <h3 className="text-secondary font-lato lg:text-[0.8rem] lg:leading-[1rem]">
              TRUSTED MEDICAL EXPERTISE
            </h3>
          </motion.div>
          <div className="lg:space-y-5 font-nunito">
            <motion.h1
              animate={{
                y: ["50%", "0%"],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0,
              }}
              className="font-bold lg:text-[3rem] lg:leading-[3.5rem] text-sh-2 lg:w-[70%]"
            >
              <span className="text-secondary">We</span> Are Here For Your{" "}
              <span className="text-secondary">Healing</span>
            </motion.h1>
            <motion.p
              animate={{
                y: ["50%", "0%"],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.25,
              }}
              className="text-sh-2 lg:text-[1.2rem] lg:leading-[1.4rem]"
            >
              Every aspect of your care is important to us. With{" "}
              <span className="text-primary italic font-bold">compassion</span>,
              we focus on your{" "}
              <span className="text-primary italic font-bold">
                physical, mental
              </span>{" "}
              and{" "}
              <span className="text-primary font-bold">
                emotional well-being
              </span>
              . Our team of medical and support staff is committed to ensuring
              that your recovery is a complete and fulfilling experience,{" "}
              <span className="text-primary italic font-bold">
                not just another medical treatment
              </span>
              .
            </motion.p>
          </div>
          <motion.button
            animate={{
              y: ["50%", "0%"],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
            }}
            className="mt-3 h-12 bg-primary rounded-[16px] hover:font-bold transition-all duration-300 ease-out font-lato text-white w-[20rem] font-medium"
          >
            BOOK AN APPOINTMENT
          </motion.button>
        </div>
        <div className="lg:w-[30rem] lg:h-auto relative">
          <Image src={G3} alt="doctor" className="w-full h-auto object-cover" />
          <motion.div
            animate={{
              rotate: ["2.5deg", "-2.5deg"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-[300px] h-auto object-cover absolute -bottom-6 -right-10"
          >
            <Image
              src={G1}
              alt="benefits"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            animate={{
              rotate: ["-2.5deg", "2.5deg"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-[180px] h-auto object-cover absolute -top-6 -left-10"
          >
            <Image
              src={G2}
              alt="price"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
