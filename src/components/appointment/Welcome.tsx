import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <div className="w-full xs:py-10 lg:py-20 xs:px-[5%] lg:px-[7rem] bg-background font-lato">
      <div className="w-full lg:rounded-2xl xs:rounded-xl bg-[url('../../public/app_3.jpg')] bg-cover overflow-hidden">
        <div className="w-full h-full xs:p-5 lg:px-0 lg:py-5 bg-white bg-opacity-80 flex flex-col items-center">
          <h3 className="text-primary  font-lato font-bold xs:text-[0.5rem] lg:text-[0.8rem] xs:leading-[0.8rem] lg:leading-[1.2rem]">
            WELCOME TO...
          </h3>
          <h2 className="text-sh-2 font-nunito font-bold xs:text-sm lg:text-2xl xs:text-center">
            Apata-Iye Clinic and Maternity Home
          </h2>
          <p className="xs:text-[0.6rem] lg:text-xs text-center text-sh-3 lg:px-[20%]">
            where your health and comfort are our top priority. Our dedicated
            team offers expert care and support, ensuring a personalized,
            compassionate experience at every step of your healthcare journey
          </p>
          <Link
            href={"/about"}
            className="py-1 mt-2 border-primary hover:bg-primary bg-white hover:text-white duration-300 ease-out transition-colors border rounded-xl lg:text-[0.9rem] xs:text-[0.6rem] grid place-content-center text-primary lg:w-[150px] xs:w-[150px]"
          >
            EXPLORE FURTHER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
