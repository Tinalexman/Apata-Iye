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
      name: "C.E.O Messages",
      link: "ceoMessages",
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

  const secondMobileNavs: iNav[] = [
    {
      name: "Testimonials",
      link: "testimonials",
    },
    {
      name: "Appointments",
      link: "",
    },
    {
      name: "Facility Gallery",
      link: "facilities",
    },
    {
      name: "C.E.O Messages",
      link: "ceoMessages",
    },
  ];

  const [email, setEmail] = useState<string>("");

  return (
    <>
      <footer className="w-full xs:hidden bg-primary lg:flex flex-col gap-6 py-10 font-lato">
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
                <p className="text-white text-opacity-90 font-semibold text-[0.6rem] leading-[0.8rem]">
                  CLINIC AND MATERNITY
                </p>
                <p className="text-white text-opacity-80 text-[0.5rem] ">
                  in service to humanity
                </p>
              </div>
            </div>
            <p className="text-sm text-opacity-70 text-white">
              Dedicated to compassionate care, advanced medical services, and
              promoting community health and wellness for over 30 years, where
              every patient matters.
            </p>
            <div className="flex w-fit items-center gap-1 text-white text-sm">
              <MdOutlineEmail />
              <p className="text-opacity-70">contact@apataiyeclinic.ng</p>
            </div>
            <div className="w-fit gap-5 flex items-center">
              <div className="flex w-fit items-center gap-1 text-white text-sm">
                <MdOutlinePhone />
                <p className="text-opacity-70">+2348034229099</p>
              </div>
              <div className="flex w-fit items-center gap-1 text-white text-sm">
                <FaWhatsapp className="text-[#4CAF50]" />
                <p className="text-opacity-70">+2349033841716</p>
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
                  className="text-white text-opacity-70"
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
                  className="text-white text-opacity-70 cursor-pointer"
                  onClick={() => {
                    if (typeof window !== undefined && i === 3) {
                      window.location.assign("/book-appointment");
                      return;
                    }

                    if (typeof document !== "undefined") {
                      const element = document.getElementById(n.link);
                      if (element !== null) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
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
            <p className="text-white text-opacity-70">
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
      <footer className="w-full xs:flex flex-col lg:hidden bg-primary font-lato">
        <div className="px-[5%] py-5 w-full border-b border-white border-opacity-50">
          <div className="w-full border border-white border-opacity-60 rounded-lg flex flex-col gap-2 items-center px-5 pt-10 pb-5">
            <h2 className="text-sm font-bold text-white">Health Updates</h2>
            <p className="text-[0.75rem] text-white text-opacity-70 text-center">
              Stay informed with our latest updates, health tips, and exclusive
              news!
            </p>
            <div className="w-full border border-white rounded-md overflow-hidden flex mt-5">
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
        <div className="px-[5%] grid grid-cols-[1.5fr_1fr] gap-5 py-5 border-b border-white border-opacity-50 w-full">
          <div className="w-full flex flex-col gap-5">
            <div className="w-fit gap-3 items-center flex">
              <Image
                src={Logo}
                alt="logo"
                width={24}
                height={24}
                className="size-10"
              />
              <div className="flex flex-col w-fit font-lato">
                <h2 className="font-extrabold text-white text-[1.1rem] leading-[1.1rem]">
                  APATA-IYE
                </h2>
                <p className="text-white text-opacity-90 font-semibold text-[0.5rem] leading-[0.6rem]">
                  CLINIC AND MATERNITY
                </p>
                <p className="text-white text-opacity-80 text-[0.5rem] ">
                  in service to humanity
                </p>
              </div>
            </div>
            <h2 className="text-sm font-semibold text-white">Contact Us</h2>
            <div className="text-xs text-white text-opacity-60">
              <p>Address:</p>
              <p>
                No 29, Mosalasi Jimoh Road, Kobiti, Abeokuta, Ogun State. P.O
                Box 1277, Sapon , Abeokuta.
              </p>
            </div>
            <div className="text-xs text-white text-opacity-60">
              <p>Email:</p>
              <p>contact@apataiyeclinic.ng</p>
            </div>
            <div className="text-xs text-white text-opacity-60">
              <p>Hotline:</p>
              <p>Phone: 08034229099</p>
              <p>Whatsapp: 09033841716</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="space-y-3">
              <h2 className="text-sm font-medium text-white">Quick Links</h2>
              <div className="flex flex-col gap-4 text-xs text-white text-opacity-80">
                {firstNavs.map((n, i) => (
                  <Link
                    key={i}
                    href={n.link}
                    className="text-white text-opacity-60"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-sm font-medium text-white">Explore</h2>
              <div className="flex flex-col gap-4 text-xs text-white text-opacity-80">
                {secondMobileNavs.map((n, i) => (
                  <div
                    key={i}
                    className="text-white text-opacity-60"
                    onClick={() => {
                      if (typeof window !== undefined && i === 1) {
                        window.location.assign("/book-appointment");
                        return;
                      }

                      if (typeof document !== "undefined") {
                        const element = document.getElementById(n.link);
                        if (element !== null) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {n.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-opacity-80 text-[0.5rem] text-center py-2">
          © Copyright {new Date().getFullYear()} Apataiye Clinic and Maternity
          Home. All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
