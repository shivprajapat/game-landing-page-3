import React, { useEffect, useState } from "react";

import { navLinks } from "@/constants";
import { iconClose, iconLogo, iconMenu } from "@/assets/images";
import { Button } from ".";

const Header = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    // Define the function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to only run once on mount and unmount

  return (
    <header
      className={`flex flex-row sticky right-0 z-30 bg-white left-0 justify-between items-center rounded-full p-2 w-full px-4 max-w-7xl mx-auto
    ${show ? "top-4" : "top-7"} transition-[top] duration-300`}
    >
      <nav className="w-full flex justify-between items-center">
        <a href="#">
          <img
            src={iconLogo}
            alt="logo"
            className={`transition-all duration-200 ${
              show ? "sm:w-16 w-12" : "sm:w-16 w-12"
            }`}
          />
        </a>
        <ul className="list-none transition-all duration-200 gap-5 lg:gap-10 xl:gap-12 md:flex hidden justify-end items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-medium transition-all uppercase duration-150 cursor-pointer text-sm md:text-base hover:text-primary ${
                active === nav.title ? "text-primary active" : "text-dark-200"
              }
                `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="relative">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 flex-1 md:flex-none justify-end items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <Button>Download </Button>
            <Button className="!bg-black">Login</Button>
          </div>
          <div className="md:hidden flex justify-end items-center">
            <button className="size-9 bg-primary flex-center rounded">
              <img
                src={toggle ? iconClose : iconMenu}
                alt="menu"
                className="object-contain"
                width={24}
                height={24}
                onClick={() => setToggle(!toggle)}
              />
            </button>
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-white absolute top-[75px] sm:top-[115px] right-0 mx-4 min-w-[140px] rounded-xl animation-slide-top z-[1]`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] transition-all duration-150 ${
                      active === nav.title ? "text-primary" : "text-dark-200"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
