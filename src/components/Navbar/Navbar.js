import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Hamburger from "../../images/Hamburger.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <>
      <nav
        className="flex justify-between items-center pl-6 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24  mt-8 h-18 bg-white text-black relative"
        role="navigation"
      >
        <Link to="/" className="w-28 sm:w-48">
          <img src={Logo} alt="logo" />
        </Link>

        {/* Hamberger Icon */}
        {/* <div className="visible mr-6 md:hidden">
          <img src={Hamburger} alt="Ham" />
        </div> */}
        <div className="md:hidden fixed top-8 right-4">
          <Dropdown />
        </div>

        <div className="mr-20 md:block hidden">
          <Link to="/" className="font-500 mr-12 text-xl text-custom">
            Workshops
          </Link>
          <Link to="/" className="font-500 mr-12 text-xl text-custom">
            Features
          </Link>
          <Link to="/" className="font-500 mr-12 text-xl text-custom">
            FAQs
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
