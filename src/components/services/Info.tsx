import React from "react";

const Info = () => {
  return (
    <div className="w-full flex flex-col gap-20 bg-background lg:pt-[100px] xs:pt-10">
      <p className="xs:px-[5%] lg:px-[7rem] lg:text-sm xs:text-xs text-sh-3 lg:w-[90%]">
        At our clinic, we take pride in delivering exceptional care across every
        service we provide. From preventative treatments to specialized care,
        our dedicated team ensures that each patient receives personalized
        attention, compassionate support, and the highest standards of medical
        expertise. We are committed to making every interaction meaningful and
        every service an opportunity to enhance your health and well-being. Your
        care, comfort, and satisfaction are at the heart of everything we do.
      </p>
      <div className="w-full bg-white justify-between flex items-center lg:py-5 xs:py-2 lg:px-[10rem] xs:px-[10%]">
        <img
          src={"/marquee_1.jpg"}
          alt="service"
          className="lg:w-[180px] xs:w-[140px] h-auto object-cover"
        />
        <img
          src={"/marquee_2.jpg"}
          alt="service"
          className="lg:w-[130px] xs:w-[90px] h-auto object-cover"
        />
        <img
          src={"/marquee_1.jpg"}
          alt="service"
          className="lg:w-[180px] h-auto object-cover xs:hidden lg:block"
        />
        <img
          src={"marquee_2.jpg"}
          alt="service"
          className="lg:w-[130px] h-auto object-cover xs:hidden lg:block"
        />
        <img
          src={"/marquee_1.jpg"}
          alt="service"
          className="lg:w-[180px] h-auto object-cover xs:hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Info;
