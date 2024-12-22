"use client";

import React from "react";

import Image from "next/image";
import G1 from "@/public/7_frm.svg";
import G2 from "@/public/100k_img.svg";
import G3 from "@/public/3_and_4.svg";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="lg:h-[calc(100vh-6rem)] xs:h-auto bg-[url('../../public/hero_image.jpg')] w-full bg-cover bg-no-repeat">
      <div className="w-full h-full bg-[#E8F4FAD6] xs:px-[5%] lg:px-[7rem] flex lg:flex-row xs:flex-col justify-between items-center xs:pb-10 lg:overflow-visible xs:overflow-hidden">
        <div className="flex flex-col xs:items-center lg:items-start xs:mt-8 lg:mt-0 lg:gap-7 lg:w-[35rem] xs:w-full">
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
            <div className="w-3 bg-primary h-0.5" />
            <h3 className="text-secondary font-lato xs:text-[0.5rem] xs:leading-[0.7rem] lg:text-[0.8rem] lg:leading-[1rem]">
              TRUSTED MEDICAL EXPERTISE
            </h3>
          </motion.div>
          <div className="lg:space-y-5 xs:space-y-6 font-nunito">
            <motion.h1
              animate={{
                y: ["50%", "0%"],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0,
              }}
              className="font-bold xs:text-center lg:text-start xs:text-[1.5rem] xs:leading-[2rem] lg:text-[3rem] lg:leading-[3.5rem] text-sh-2 lg:w-[70%] xs:w-full xs:mt-5 lg:mt-0"
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
              className="text-sh-2 xs:text-[0.8rem] xs:leading-[1.2rem] xs:text-center lg:text-start lg:text-[1.2rem] lg:leading-[1.6rem]"
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
            onClick={() => window.location.assign("/book-appointment")}
            className="lg:mt-3 xs:mt-10 lg:h-12 xs:h-10 xs:font-bold bg-primary hover:bg-[#2C4D9A] rounded-[16px] hover:font-bold transition-all duration-300 ease-out font-lato text-white lg:w-[20rem] xs:w-full font-medium"
          >
            BOOK AN APPOINTMENT
          </motion.button>
        </div>
        <div className="lg:w-[30rem] xs:w-full h-auto relative xs:mt-14 lg:mt-0">
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
            className="lg:w-[300px] xs:w-[200px] h-auto object-cover absolute -bottom-6 lg:-right-10 xs:right-0"
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
            className="lg:w-[180px] xs:w-[100px] h-auto object-cover absolute -top-6 lg:-left-10 xs:left-0"
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
