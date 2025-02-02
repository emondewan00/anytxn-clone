"use client";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { routes } from "../data";
import NavItem from "./NavItem";
import { IoIosArrowForward } from "react-icons/io";
import LanguageToggle from "./LanguageToggle";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="relative z-50">
      <nav className="flex bg-[#1F80F0] sm:bg-transparent py-8 px-6 sm:pt-4 sm:pb-6 items-center justify-between max-w-6xl mx-auto">
        <Image className="h-10 w-40" src={logo} alt="Logo" />

        <ul className="hidden lg:flex relative *:text-white">
          {routes.map((route) => (
            <NavItem key={route.id} menu={route} />
          ))}
          <LanguageToggle />
        </ul>
        <button className="text-white text-xl border pl-8 pr-6 rounded-sm py-3 lg:flex lg:items-center lg:gap-x-2 hidden tracking-wide font-medium ">
          Contact Us <IoIosArrowForward />
        </button>
        <button
          onClick={() => setIsActive(!isActive)}
          className="flex flex-col lg:hidden text-white text-2xl "
        >
          <RxHamburgerMenu />
        </button>
      </nav>
      {/* mobile nav  */}
      <div
        className={`absolute  w-full p-8 bg-[#1B76E9] transition-all duration-150 delay-75 -translate-x-full lg:hidden ${
          isActive ? "translate-x-0" : ""
        }`}
      >
        <ul>
          {routes.map((route) => (
            <li key={route.id}>
              <Link
                className={` px-6 py-3 text-white  font-medium  block `}
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mb-14 mt-6 text-white">
          <LanguageToggle />
        </div>
        <button className="text-white text-xl border px-6 rounded-sm py-3 w-full">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default NavBar;
