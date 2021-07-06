import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav
        className="flex justify-between items-center pl-24 mt-8 h-18 bg-white text-black relative"
        role="navigation"
      >
        <Link to="/" className="">
          <img src={Logo} alt="logo" />
        </Link>

        <div className="px-4 cursor-pointer md:hidden">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
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
