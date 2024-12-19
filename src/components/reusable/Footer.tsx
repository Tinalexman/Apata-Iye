"use client";

import React, { useState } from "react";

import Image from "next/image";
import Logo from "@/public/logo.svg";

import { BsSendFill } from "react-icons/bs";

import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

interface iNav {
  name: string;
  link: string;
}

const Footer = () => {
  const firstNavs: iNav[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "Our Services",
      link: "/services",
    },
  ];
  const secondNavs: iNav[] = [
    {
      name: "Facility Gallery",
      link: "facilities",
    },
    {
      name: "Meet Our Team",
      link: "",
    },
    {
      name: "Patient Testimonials",
      link: "testimonials",
    },
    {
      name: "Book An Appointment",
      link: "",
    },
  ];

  const [email, setEmail] = useState<string>("");

  return (
    <footer className="w-full bg-primary flex flex-col lg:gap-6 lg:py-10 font-lato">
      <div className="lg:px-[7rem] border-y border-white lg:py-10 lg:gap-[6rem] grid grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <div className="w-fit gap-3 items-center flex">
            <Image
              src={Logo}
              alt="logo"
              width={42}
              height={42}
              className="size-12"
            />
            <div className="flex flex-col w-fit font-lato">
              <h2 className="font-extrabold text-white text-[1.35rem] leading-[1.4rem]">
                APATA-IYE
              </h2>
              <p className="text-secondary font-semibold text-[0.6rem] leading-[0.8rem]">
                CLINIC AND MATERNITY
              </p>
              <p className="text-white text-[0.5rem] ">
                ...to God and Humanity
              </p>
            </div>
          </div>
          <p className="text-sm text-opacity-90 text-white">
            Dedicated to compassionate care, advanced medical services, and
            promoting community health and wellness for over 30 years, where
            every patient matters.
          </p>
          <div className="flex w-fit items-center gap-1 text-white text-opacity-90 text-sm">
            <MdOutlineEmail />
            <p>contact@apataiyeclinic.ng</p>
          </div>
          <div className="w-fit gap-5 flex items-center">
            <div className="flex w-fit items-center gap-1 text-white text-opacity-90 text-sm">
              <MdOutlinePhone />
              <p>+2348034229099</p>
            </div>
            <div className="flex w-fit items-center gap-1 text-white text-opacity-90 text-sm">
              <FaWhatsapp className="text-[#4CAF50]" />
              <p>+2349033841716</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">Quick Links</h2>
          <div className="flex flex-col gap-3">
            {firstNavs.map((n, i) => (
              <Link
                key={i}
                href={n.link}
                className="text-white text-opacity-90"
              >
                {n.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">Explore Our Site</h2>
          <div className="flex flex-col gap-3">
            {secondNavs.map((n, i) => (
              <div
                key={i}
                className="text-white text-opacity-90 cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(n.link);
                  if (element !== null) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {n.name}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">Health Updates</h2>
          <p className="text-white text-opacity-90">
            Stay informed with our latest updates, health tips, and exclusive
            news!.
          </p>
          <div className="w-full border border-white rounded-md overflow-hidden flex">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                const res = e.target.value.trim();
                setEmail(res);
              }}
              placeholder="Enter your email address"
              className="text-xs w-full text-white placeholder:text-sh-1 bg-transparent h-10 focus:outline-none px-2"
            />
            <div
              onClick={() => {
                setEmail("");
              }}
              className="w-12 h-10 cursor-pointer text-xl bg-white text-primary grid place-content-center"
            >
              <BsSendFill />
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-opacity-80 text-sm text-center">
        © Copyright {new Date().getFullYear()}, All Rights Reserved. Apataiye
        Clinic and Maternity Home.
      </p>
    </footer>
  );
};

export default Footer;
