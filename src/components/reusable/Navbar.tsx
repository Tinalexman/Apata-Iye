"use client";

import Link from "next/link";
import React, { FC, useState } from "react";

import Image from "next/image";
import Logo from "@/public/logo.svg";

import { IoMdMenu } from "react-icons/io";
import Drawer from "./Drawer";

import { MdOutlineCancel } from "react-icons/md";

interface iNav {
  name: string;
  link: string;
}

const Navbar: FC<{ active?: number }> = ({ active = 0 }) => {
  const navs: iNav[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <nav className="w-full h-[6rem] flex flex-col sticky top-0 z-10 shadow-custom">
        <div className="w-full h-10 bg-primary" />
        <div className="w-full flex h-full items-center justify-between xs:px-[5%] lg:px-[7rem] bg-white">
          <div className="w-fit flex gap-32 items-center">
            <div className="w-fit gap-3 items-center flex">
              <Image
                src={Logo}
                alt="logo"
                width={42}
                height={42}
                className="size-12"
              />
              <div className="flex flex-col w-fit font-lato">
                <h2 className="font-extrabold text-primary text-[1.35rem] leading-[1.4rem]">
                  APATA-IYE
                </h2>
                <p className="text-secondary font-semibold text-[0.6rem] leading-[0.8rem]">
                  CLINIC AND MATERNITY
                </p>
                <p className="text-primary text-[0.5rem] ">
                  ...to God and Humanity
                </p>
              </div>
            </div>
            <div className="w-fit flex gap-6 items-center font-lato xs:hidden lg:flex">
              {navs.map((nv, i) => {
                return (
                  <div key={i} className="flex flex-col ">
                    <Link
                      href={nv.link}
                      className={`${
                        active === i
                          ? "text-sh-2 font-bold"
                          : "text-sh-1 font-semibold "
                      } text-[0.9rem] hover:text-secondary transition-all hover:scale-105 scale-100 ease-out duration-300`}
                    >
                      {nv.name}
                    </Link>
                    {active === i && <div className="w-5 h-[1px] bg-sh-2" />}
                  </div>
                );
              })}
            </div>
          </div>
          <Link
            href={active === -1 ? "/contact-us" : "/book-appointment"}
            className="xs:hidden lg:block py-1 border-primary hover:bg-primary hover:text-white duration-300 ease-out transition-colors border rounded-xl text-[0.9rem] font-lato text-primary px-4"
          >
            {active === -1 ? "CONTACT US" : "BOOK NOW"}
          </Link>
          <IoMdMenu
            className="lg:hidden xs:block cursor-pointer text-2xl"
            onClick={() => setOpened(true)}
          />
        </div>
      </nav>
      <Drawer
        visible={opened}
        onClose={() => setOpened(false)}
        position="right"
        width="70vw"
        height="100vh"
      >
        <div className="w-full h-full bg-white px-10 flex flex-col  items-end relative">
          <MdOutlineCancel
            onClick={() => setOpened(false)}
            className="absolute top-10 left-5 text-2xl text-sh-2"
          />

          <div className="w-full flex flex-col gap-5 mt-32">
            {navs.map((nv, i) => (
              <div
                key={i}
                onClick={() => window.location.assign(nv.link)}
                className={`${
                  active === i
                    ? "text-sh-2 font-bold"
                    : "text-sh-1 font-semibold "
                } text-[0.9rem]`}
              >
                {nv.name}
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
