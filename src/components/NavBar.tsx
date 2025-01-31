"use client";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const routes = [
  {
    id: 1,
    name: "Solutions",
    path: "/solutions",
    icon: "",
    active: false,
  },
  {
    id: 2,
    name: "Services",
    path: "/services",
    icon: "",
    active: false,
  },
  {
    id: 3,
    name: "About Us",
    path: "/about-us",
    icon: "",
    active: false,
  },
];

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section>
      <nav className="flex bg-[#1F80F0] sm:bg-transparent py-8 px-6 sm:pt-4 sm:pb-6 items-center justify-between max-w-6xl mx-auto">
        <Image className="h-10 w-40" src={logo} alt="Logo" />

        <ul className="hidden lg:flex ">
          {routes.map((route) => (
            <li key={route.id}>
              <Link
                className={`mr-2 px-6 py-3 text-white  font-medium  ${
                  route.active ? "text-gray-800" : ""
                }`}
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="text-white text-xl border px-6 rounded-sm py-3 lg:block hidden">
          Contact Us
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
                className={` px-6 py-3 text-white  font-medium  block ${
                  route.active ? "text-gray-800" : ""
                }`}
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="text-white text-xl border px-6 rounded-sm py-3 w-full">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default NavBar;
