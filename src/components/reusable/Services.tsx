"use client";

import React, { useRef, useState } from "react";

import { motion, useInView } from "framer-motion";

interface iService {
  image: string;
  title: string;
  description: string;
}

const Services = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    amount: "some",
  });

  const [hoverIndex, setHoveredIndex] = useState<number>(-1);

  const services: iService[] = [
    {
      image: "/ambulance.svg",
      title: "Accident and Emergency services",
      description:
        "We provide rapid assessment, treatment, and stabilization for acute injuries, trauma, or illnesses, ensuring life-saving care and timely referrals.",
    },
    {
      image: "/briefcase.svg",
      title: "General and Family Medicine",
      description:
        "We offer comprehensive care to individuals and families, addressing everyday and chronic health needs, and their responses to treatment.",
    },
    {
      image: "/pregnant_woman.svg",
      title: "Pregnancy and Delivery Services",
      description:
        "We provide fertility counseling, routine antenatal and postnatal care for low-risk mothers, and refer high-risk pregnancies when needed.",
    },
    {
      image: "/test_tubes.svg",
      title: "Laboratory Services",
      description:
        "We offer laboratory services delivered by seasoned professionals, availing timely results to support evidence-based and effective treatments.",
    },
    {
      image: "/chat_bubble.svg",
      title: "Medical Checkups and Counselling",
      description:
        "We offer walk-in checkups, group, and individual counseling to address concerns, provide expert guidance, and promote health.",
    },
    {
      image: "/magnifying_glass.svg",
      title: "Screening Examinations",
      description:
        "We offer walk-in checkups, group, and individual counseling to address concerns, provide expert guidance, and promote health.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 items-center bg-background xs:px-[5%] lg:px-[7rem] lg:py-20 xs:py-10">
      <h3 className="text-primary font-lato font-bold xs:text-[0.5rem] lg:text-[0.8rem] xs:leading-[0.8rem] lg:leading-[1.2rem]">
        OUR SERVICES
      </h3>
      <div className="w-full flex flex-col gap-10 items-center" ref={targetRef}>
        <div className="lg:space-y-3 w-full flex flex-col items-center">
          <h2 className="text-sh-2 font-nunito font-bold xs:text-lg lg:text-2xl text-center w-[20rem] xs:w-full">
            Delivering <span className="text-primary">Exceptional Care,</span>{" "}
            Every Step of the Way
          </h2>
          <p className="text-sh-3 text-xs lg:w-[40rem] xs:w-full text-center">
            At our center, we provide personalized care, designed to meet your
            unique health needs. With a team of experienced health workers, we
            offer services that focus on your well-being every step of the way
          </p>
        </div>
        <div className="w-full gap-6 grid lg:grid-cols-3 xs:grid-cols-1">
          {services.map((s, i) => {
            return (
              <motion.div
                key={i}
                animate={{
                  y: isInView ? "0%" : "20%",
                  opacity: isInView ? 1 : 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: i * 0.2,
                  type: "spring",
                  bounce: 0.6,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(-1)}
                className={`w-full xs:h-auto lg:h-[12.5rem] font-lato  ${
                  hoverIndex === i ? "bg-primary" : "bg-white"
                } rounded-xl shadow-custom p-4 flex flex-col gap-6 transition-colors duration-300 ease-out`}
              >
                <img
                  src={s.image}
                  alt="service image"
                  className="size-[40px]"
                  width={40}
                  height={40}
                />
                <div className="space-y-3">
                  <h2
                    className={`${
                      hoverIndex === i ? "text-white" : "text-sh-2"
                    } xs:text-sm lg:text-lg font-semibold transition-colors duration-300 ease-out`}
                  >
                    {s.title}
                  </h2>
                  <p
                    className={`${
                      hoverIndex === i ? "text-white" : "text-sh-3"
                    } lg:text-sm xs:text-xs transition-colors duration-300 ease-out`}
                  >
                    {s.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
