import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <>
      <nav
        className="flex justify-between items-center pl-6 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24  mt-8 h-18 text-black relative"
        role="navigation"
      >
        <Link to="/" className="w-28 sm:w-48">
          <img src={Logo} alt="logo" />
        </Link>

        <div className="md:hidden fixed top-8 right-4">
          <Dropdown />
        </div>

        <div className="mr-20 md:flex md:mr-8 hidden">
          <a
            href="#about"
            className="font-500 lg:mr-12 mr-6 text-xl text-custom"
          >
            About
          </a>
          <a
            href="#workshops"
            className="font-500 lg:mr-12 mr-6 text-xl text-custom"
          >
            Workshops
          </a>
          <a
            href="#features"
            className="font-500 lg:mr-12 mr-6 text-xl text-custom"
          >
            Features
          </a>
          <a
            href="#perks"
            className="font-500 lg:mr-12 mr-6 text-xl text-custom"
          >
            Perks
          </a>
          <a
            href="#faqs"
            className="font-500 lg:mr-12 mr-6 text-xl text-custom"
          >
            FAQs
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
