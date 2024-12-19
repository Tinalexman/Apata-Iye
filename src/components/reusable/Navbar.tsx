import Link from "next/link";
import React, { FC } from "react";

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

  return (
    <nav className="w-full h-[6rem] flex flex-col sticky top-0 z-10 shadow-custom">
      <div className="w-full h-10 bg-primary" />
      <div className="w-full flex h-full items-center justify-between lg:px-[7rem] bg-white">
        <div className="w-fit flex gap-32 items-center">
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
          <div className="w-fit flex gap-6 items-center font-lato">
            {navs.map((nv, i) => {
              return (
                <div key={i} className="flex flex-col ">
                  <Link
                    href={nv.link}
                    className={`${
                      active === i
                        ? "text-sh-2 font-bold"
                        : "text-sh-1 font-semibold "
                    } text-[0.9rem] transition-all hover:scale-105 scale-100 ease-out duration-300`}
                  >
                    {nv.name}
                  </Link>
                  {active === i && <div className="w-5 h-[1px] bg-sh-2" />}
                </div>
              );
            })}
          </div>
        </div>
        <button className="py-1 border-primary hover:bg-primary hover:text-white duration-300 ease-out transition-colors border rounded-xl text-[0.9rem] font-lato text-primary px-4">
          BOOK NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
