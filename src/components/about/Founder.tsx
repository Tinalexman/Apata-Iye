"use client";

import React, { useRef } from "react";

import Image from "next/image";
import F1 from "@/public/founder.jpg";

import { motion, useInView } from "framer-motion";

const Founder = () => {
  const target = useRef(null);
  const inView = useInView(target, { amount: "some" });

  return (
    <div
      id="ceoMessages"
      ref={target}
      className="font-lato w-full h-full bg-[url('../../public/founder_background.jpg')] bg-cover bg-no-repeat"
    >
      <div className="w-full h-full bg-[#1A1F71E0] xs:px-[5%] xs:py-5 lg:px-[7rem] lg:pt-10 lg:pb-20 relative">
        <div className="lg:w-[60%] xs:w-full lg:rounded-l-lg lg:rounded-tr xs:rounded-md bg-[url('../../public/founder_bg_2.jpg')] gap-5 bg-cover bg-no-repeat xs:px-5 xs:py-12 lg:pl-10 lg:pr-28 lg:pt-16 lg:pb-28 flex flex-col justify-center">
          <motion.h2
            animate={{
              y: inView ? "0%" : "-50%",
            }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
              type: "spring",
              bounce: 0.6,
            }}
            className="text-secondary xs:text-sm lg:text-lg font-bold"
          >
            FROM THE FOUNDER
          </motion.h2>
          <motion.div
            animate={{
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="space-y-1"
          >
            <p className="lg:text-xs xs:text-[0.8rem] xs:leading-[1.2rem] text-sh-3">
              Apata-Iye is Yoruba for &quot;Rock of Healing.&quot; It is more
              than just a name; it deeply reflects our mission to continuously
              provide quality health solutions to our clients, both in body and
              in soul. We have indeed come a long way, and while we still have
              more to achieve, we are committed to pursuing excellence in
              healthcare service delivery.
            </p>
            <p className="lg:text-xs xs:text-[0.8rem] xs:leading-[1.2rem] text-sh-3">
              The commitment and passion of over 30 years remain unwavering as
              we ensure that everyone has not just fair but quality and
              comfortable access to healthcare in the community and city.
            </p>
            <p className="lg:text-xs xs:text-[0.8rem] xs:leading-[1.2rem] text-sh-3">
              Today, all to the glory of Almighty God, we stand as a beacon of
              trust, hope, and quality in our community. We can boldly say that,
              to a significant number of people around the city, we are a
              household name, thanks to our team of dedicated workers.
            </p>
            <p className="lg:text-xs xs:text-[0.8rem] xs:leading-[1.2rem] text-sh-3">
              Thank you for allowing us to be a part of your wellness journey.
              Thank you for being part of our story. Together, we will continue
              to make a difference, one patient at a time.
            </p>
          </motion.div>
          <motion.div
            animate={{
              y: inView ? "0%" : "50%",
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              type: "spring",
              bounce: 0.6,
            }}
          >
            <h2 className="text-sh-2 font-bold">Soogun Isaac Olusina</h2>
            <p className="lg:text-xs text-sh-3">C.E.O</p>
          </motion.div>
        </div>
        <motion.div
          animate={{
            x: inView ? "0%" : "50%",
            scale: inView ? 0.75 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
          className="xs:hidden lg:block w-[37rem] h-[40rem] shadow-custom scale-[0.75] rounded-lg overflow-hidden absolute -top-5 right-[7rem]"
        >
          <Image
            src={F1}
            alt="founder"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          animate={{
            y: inView ? "0%" : "50%",
            scale: inView ? 1 : 0.75,
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
          className="xs:block lg:hidden mt-5 w-full h-[60vh] shadow-custom rounded-lg overflow-hidden "
        >
          <Image
            src={F1}
            alt="founder"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Founder;
