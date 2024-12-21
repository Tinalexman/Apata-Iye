"use client";

import React, { useRef } from "react";
import { FaStar } from "react-icons/fa6";

import { motion, useInView } from "framer-motion";

interface iInfo {
  title: string;
  content: string;
}

const Info = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    amount: "some",
  });

  const infos: iInfo[] = [
    {
      title: "30+ Years of Dedicated Healthcare",
      content:
        "With over three decades of unwavering commitment, our clinic has been a pillar of healthcare delivery in our local community. ",
    },
    {
      title: "Dedicated Team of Experts",
      content:
        "A team of skilled healthcare professionals, working together with dedication and compassion to deliver exceptional care.",
    },
    {
      title: "Thousands of Lives Touched",
      content:
        "Every individual’s health and well-being is at the center of our operations, and we are proud to have made positive impacts in so many lives.",
    },
    {
      title: "Innovative Healthcare Solutions",
      content:
        "We continue to evolve with the latest medical and managerial advancements, bringing comfort and best practices to our patients.",
    },
  ];

  return (
    <div className="w-full font-lato xs:py-10 lg:py-20 lg:px-[7rem] xs:px-[5%] bg-background flex flex-col lg:gap-6 xs:gap-5">
      <div className="w-full lg:grid lg:grid-cols-2 xs:grid-cols-1 lg:gap-6 xs:gap-4">
        <div className="flex flex-col lg:gap-4 w-full">
          <h3 className="text-secondary font-bold xs:text-[0.5rem] lg:text-[0.8rem] xs:leading-[0.8rem] lg:leading-[1.2rem]">
            OUR STORY
          </h3>
          <h2 className="text-sh-2 font-nunito font-bold xs:text-lg lg:text-2xl">
            The Inspiring Journey Behind Our Unwavering Commitment to Delivering
            Excellent and Compassionate Care
          </h2>
          <div className="space-y-2 xs:mt-5 lg:mt-0">
            <p className="lg:text-xs xs:text-[0.8rem] xs:leading-[1.2rem] text-sh-3">
              Our story began with a young and passionate Accident and Emergency
              practitioner who dared to dream big. It started in a building that
              used to be a cold room and a living apartment in a rural
              community. For days, our founder would sit on the balcony, waiting
              patiently for his first set of patients. When they arrived, they
              always came with curiosity and financial constraints, and he would
              tend to them joyfully, often at little to no cost.
            </p>
            <p className="lg:text-xs xs:text-[0.8rem] xs:leading-[1.2rem] text-sh-3">
              Over the months and years, our reputation grew. More patients
              sought our services, drawn by the compassionate, patient, and
              dedicated care they had been told about. This important tradition
              stands at the core of our existence to this day. When the time
              came, the cold room and living apartment were acquired in a
              turbulent but inspiring turn of events. It was a significant
              milestone.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-4 w-full lg:pt-14">
          <div className="space-y-2">
            <p className="lg:text-xs xs:text-[0.8rem] xs:leading-[1.2rem] text-sh-3">
              The journey continued, fueled by an unmatched dedication to our
              mostly low-income patients. Our founder, having come from a humble
              background, understood the importance of accessible healthcare.
              This commitment continues to guide us
            </p>
            <p className="lg:text-xs xs:text-[0.8rem] xs:leading-[1.2rem] text-sh-3">
              The foundation of our service to humanity was consolidated, and
              the clinic kept growing and getting rooted. Years later, a piece
              of land behind our building was acquired, on which stands the new
              extension of the clinic. It serves as a testament to our effort at
              providing quality and excellent care, offering a more comfortable
              experience to our patients.
            </p>
            <p className="lg:text-xs xs:text-[0.8rem] xs:leading-[1.2rem] text-sh-3">
              While financial resources are vital for any healthcare
              institution, our experiences have proven to us, over the course of
              30 years, that compassion, dedication, and personalized care are
              equally essential. Through the years, we have faced challenges,
              celebrated milestones, and forged lasting bonds with our patients
              and community, all while remaining dedicated to our mission of
              providing compassionate, affordable, and quality healthcare
              services.
            </p>
            <p className="lg:text-xs xs:text-[0.8rem] xs:leading-[1.2rem] text-sh-3">
              Our story is one of growth and dedication. It is a reminder that
              with resilience, evolution, and passion, we can make meaningful
              impacts in the lives of those we serve.
            </p>
          </div>
        </div>
      </div>
      <div
        ref={targetRef}
        className="w-full grid xs:grid-cols-1 lg:grid-cols-2 lg:gap-6 xs:gap-5 lg:px-10 font-nunito"
      >
        {infos.map((info, i) => {
          return (
            <motion.div
              animate={{
                x: isInView ? "0%" : i % 2 !== 0 ? "-20%" : "20%",
                opacity: isInView ? 1 : 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: i * 0.2,
                type: "spring",
                bounce: 0.6,
              }}
              key={i}
              className="w-full flex items-start gap-2 lg:px-5"
            >
              <FaStar className="text-[#FFC107] lg:text-[18px] xs:text-[26px]" />
              <div className="flex flex-col">
                <h2 className="text-sh-2 font-bold xs:text-[0.9rem] lg:text-[1rem] ">
                  {info.title}
                </h2>
                <p className="text-sh-3 font-normal xs:text-[0.8rem] xs:leading-[1.2rem] lg:text-[0.75rem] lg:leading-[1.2rem]">
                  {info.content}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
