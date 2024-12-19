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

interface iTestimonial {
  image: StaticImageData;
  name: string;
  role: string;
  content: string;
}

const Testimonials = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    amount: "some",
  });

  const testimonials: iTestimonial[] = [
    {
      image: I1,
      name: "Samuel Sonola",
      role: "Product Designer",
      content:
        "I can't thank the team at Apataiye Clinic and Maternity Home enough for their outstanding care and compassion. From the moment I walked in, I felt truly valued and supported. The doctors and staff went above and beyond to ensure my recovery was smooth and stress-free. It's comforting to know there's a place that genuinely cares about its patients.",
    },
    {
      image: I2,
      name: "Mrs H. Adeniji-Okutubo",
      role: "Civil Servant",
      content:
        "If care and dedication were a person, Apata Iye would embody them. Patients here experience unmatched professionalism, unlike common complaints about medical practitioners online. Their remarkable teamwork ensures excellent outcomes. Thank you, Apata Iye Clinic and Maternity, for prioritizing patient health. Truly, Apata Iye lives up to its name.",
    },
    {
      image: I3,
      name: "Mr Bankole Adebayo",
      role: "Product Designer",
      content:
        "I am deeply grateful to the team at Apataiye Clinic and Maternity Home for their exceptional care and professionalism. From my first visit, I was treated with respect and compassion. The doctors and staff worked tirelessly to address my health needs and made my recovery as smooth as possible. It's reassuring to have a place so dedicated to patient care.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 items-center bg-background lg:px-[7rem] lg:py-20">
      <h3 className="text-primary font-lato font-bold text-[0.8rem] leading-[1.2rem]">
        TESTIMONIALS
      </h3>
      <div className="w-full flex flex-col gap-10 items-center" ref={targetRef}>
        <div className="lg:space-y-3 w-full flex flex-col items-center">
          <h2 className="text-sh-2 font-nunito font-bold text-2xl text-center w-[20rem]">
            Your Health, Our Mission:{" "}
            <span className="text-primary">Hear From Others</span>
          </h2>
          <p className="text-sh-3 text-xs w-[40rem] text-center">
            Discover heartfelt stories and inspiring testimonials from patients
            who have experienced our unwavering commitment to their health,
            well-being, and exceptional care.
          </p>
        </div>
        <div className="w-full gap-6 grid grid-cols-3">
          {testimonials.map((t, i) => {
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
                className="w-full lg:h-[18rem] bg-white rounded-tl-2xl rounded-tr rounded-bl rounded-br-2xl shadow-custom p-4 flex flex-col gap-4"
              >
                <div className="w-full flex gap-2 items-center">
                  <Image
                    src={t.image}
                    alt="service image"
                    className="size-[40px]"
                    width={40}
                    height={40}
                  />
                  <div className="">
                    <h2 className="text-primary text-lg font-lato font-semibold">
                      {t.name}
                    </h2>
                    <p className="text-secondary text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-sh-3 text-sm">{t.content}</p>
                <p className="text-primary text-5xl font-bold font-nunito text-end">
                  “
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
