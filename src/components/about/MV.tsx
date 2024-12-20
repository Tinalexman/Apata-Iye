"use client";

import React, { useRef } from "react";

import { useInView, motion } from "framer-motion";

const MV = () => {
  const target = useRef(null);
  const inView = useInView(target, {
    amount: "some",
  });

  return (
    <div
      ref={target}
      className="w-full font-lato flex lg:flex-row xs:flex-col lg: gap-10 xs:gap-4 lg:justify-center bg-background lg:items-center lg:relative lg:pb-40 xs:px-[5%] lg:px-0"
    >
      <motion.div
        animate={{
          y: inView ? "0%" : "20%",
          opacity: inView ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2,
          type: "spring",
          bounce: 0.6,
        }}
        className="lg:w-[40%] xs:w-full h-auto p-5 flex flex-col lg:rounded-2xl xs:rounded-none bg-[#4CAF50] text-white gap-2 lg:absolute lg:-top-[25vh] lg:left-[7rem]"
      >
        <h2 className="lg:text-xl font-semibold">Our Mission</h2>
        <p className="lg:text-sm xs:text-xs text-opacity-90">
          Our mission is to provide compassionate, affordable, and quality
          healthcare to our community and beyond. Rooted in our love for
          humanity, we aim to promote physical, mental, and emotional
          well-being. We deliver personalized care in a warm, welcoming
          environment, ensuring every individual receives attentive support and
          effective treatment.
        </p>
        <p className="lg:text-sm xs:text-xs text-opacity-90">
          As an establishment located amidst communities with generally low
          household income, we believe everyone deserves a taste of premium
          health care while being able to afford it, this is why care is
          immensely personalized with us.
        </p>
        <p className="lg:text-sm xs:text-xs text-opacity-90">
          We want every patient to feel listened to and cared for, to be a part
          of their care, and to have a long-lasting relationship with our
          professionals. Our mission extends beyond treating illnesses- it is
          about promoting overall health, access, wellness and equality for all
          who come to us.
        </p>
      </motion.div>
      <motion.div
        animate={{
          y: inView ? "0%" : "-20%",
          opacity: inView ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2,
          type: "spring",
          bounce: 0.6,
        }}
        className="lg:w-[40%] xs:w-full lg:p-6 xs:px-4 xs:py-5 flex flex-col lg:rounded-2xl xs:rounded-none bg-[#60A5FA] text-primary gap-2 lg:absolute lg:-top-[25vh] lg:right-[7rem]"
      >
        <h2 className="lg:text-xl font-semibold">Our Vision</h2>
        <p className="lg:text-sm xs:text-xs text-opacity-90">
          We envision a future where we stand strongly as one of the most
          advanced and affordable health institutions in the state and
          country—one that continuously evolves to serve every class of patient
          while integrating the latest medical advancements and evidence-based
          practices.
        </p>
        <p className="lg:text-sm xs:text-xs text-opacity-90">
          We aim to be a leader in patient experience, providing a sterling
          patient-health worker relationship that forms an important foundation
          of the wellness journey.
        </p>
        <p className="lg:text-sm xs:text-xs text-opacity-90">
          We envision a multidisciplinary health institution with growing
          capacity, both structurally and functionally, supported by a team of
          highly specialized professionals who will confidently and successfully
          tend to referrals from other health centers.
        </p>
        <p className="lg:text-sm xs:text-xs text-opacity-90">
          We aim to continually be a landmark and pride of our community,
          nationally—a sanctuary where all, irrespective of their health or
          financial status, can walk in without fear of subpar experiences or
          being turned away.
        </p>
      </motion.div>
    </div>
  );
};

export default MV;
