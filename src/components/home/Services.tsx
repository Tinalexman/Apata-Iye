"use client";

import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";

import Image, { StaticImageData } from "next/image";

import I1 from "@/public/ambulance.svg";
import I2 from "@/public/briefcase.svg";
import I3 from "@/public/chat_bubble.svg";
import I4 from "@/public/pregnant_woman.svg";
import I5 from "@/public/magnifying_glass.svg";
import I6 from "@/public/test_tubes.svg";

interface iService {
  image: StaticImageData;
  title: string;
  description: string;
}

const Services = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    amount: "some",
  });

  const services: iService[] = [
    {
      image: I1,
      title: "Accident and Emergency services",
      description:
        "We provide rapid assessment, treatment, and stabilization for acute injuries, trauma, or illnesses, ensuring life-saving care and timely referrals.",
    },
    {
      image: I2,
      title: "General and Family Medicine",
      description:
        "We offer comprehensive care to individuals and families, addressing everyday and chronic health needs, and their responses to treatment.",
    },
    {
      image: I4,
      title: "Pregnancy and Delivery Services",
      description:
        "We provide fertility counseling, routine antenatal and postnatal care for low-risk mothers, and refer high-risk pregnancies when needed.",
    },
    {
      image: I6,
      title: "Laboratory Services",
      description:
        "We offer laboratory services delivered by seasoned professionals, availing timely results to support evidence-based and effective treatments.",
    },
    {
      image: I3,
      title: "Medical Checkups and Counselling",
      description:
        "We offer walk-in checkups, group, and individual counseling to address concerns, provide expert guidance, and promote health.",
    },
    {
      image: I5,
      title: "Screening Examinations",
      description:
        "We offer walk-in checkups, group, and individual counseling to address concerns, provide expert guidance, and promote health.",
    },
  ];

  return (
    <div className="w-full lg:h-[100vh] flex flex-col gap-6 items-center bg-background lg:px-[7rem] lg:py-20">
      <h3 className="text-primary font-lato font-bold text-[0.8rem] leading-[1.2rem]">
        OUR SERVICES
      </h3>
      <div className="w-full flex flex-col gap-10 items-center" ref={targetRef}>
        <div className="lg:space-y-3 w-full">
          <h2 className="text-sh-2 font-nunito font-bold text-2xl text-center w-[20rem]">
            Delivering <span className="text-primary">Exceptional Care,</span>{" "}
            Every Step of the Way
          </h2>
          <p className="text-sh-3 text-xs w-[40rem] text-center">
            At our center, we provide personalized care, designed to meet your
            unique health needs. With a team of experienced health workers, we
            offer services that focus on your well-being every step of the way
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
