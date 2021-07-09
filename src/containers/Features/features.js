import React from "react";
import Dot from "../../images/dot.svg";
import Logo from "../../images/featurelogo.svg";
import Shade from "../../images/shade.svg";

/* Responsive Feature Page */
const Features = () => (
  <div className="relative md:ml-16 pt-4 -z-10" id="features">
    <h1 className="flex left-0 font-poppins font-bold mt-32 md:mt-44 ml-8 xs:ml-8 sm:ml-16 md:ml-24 text-3xl sm:text-4xl md:text-5xl text-gray-900 text-opacity-90 tracking-tight">
      Features
    </h1>

    <div className="flex text-left -ml-2 xs:-ml-20 sm:-ml-10 md:ml-0.5 mr-12 mt-12 xs:mt-16">
      <img
        className="h-2.5 w-2.5 sm:h-auto sm:w-auto ml-10 xs:ml-28"
        src={Dot}
        alt="dot"
      />
      <p className="font-poppins font-semibold -mt-2 xs:-mt-2 sm:mt-2 ml-3 xs:ml-4 sm:ml-8 text-lg sm:text-xl md:text-2xl text-black -z-10">
        Two-week long Bootcamp covering 4 domains
      </p>
    </div>

    <div className="flex text-left -ml-2 xs:-ml-20 sm:-ml-10 md:ml-0.5 mr-12 mt-10 xs:mt-12">
      <img
        className="h-2.5 w-2.5 sm:h-auto sm:w-auto ml-10 xs:ml-28"
        src={Dot}
        alt="dot"
      />
      <p className="font-poppins font-semibold -mt-2 xs:-mt-2 sm:-mt-1 ml-3 xs:ml-4 sm:ml-8 text-lg sm:text-xl md:text-2xl text-black -z-10">
        Interactive code-along sessions
      </p>
    </div>

    <div className="flex text-left -ml-2 xs:-ml-20 sm:-ml-10 md:ml-0.5 mr-12 mt-10 xs:mt-12">
      <img
        className="h-2.5 w-2.5 sm:h-auto sm:w-auto ml-10 xs:ml-28"
        src={Dot}
        alt="dot"
      />
      <p className="font-poppins font-semibold -mt-2 xs:-mt-2 sm:-mt-1 ml-3 xs:ml-4 sm:ml-8 text-lg sm:text-xl md:text-2xl text-black -z-10">
        Access to domain-specific resources
      </p>
    </div>

    <div className="flex text-left -ml-2 xs:-ml-20 sm:-ml-10 md:ml-0.5 mr-12 mt-10 xs:mt-12">
      <img
        className="h-2.5 w-2.5 sm:h-auto sm:w-auto ml-10 xs:ml-28"
        src={Dot}
        alt="dot"
      />
      <p className="font-poppins font-semibold -mt-2 xs:-mt-2 sm:-mt-1 ml-3 xs:ml-4 sm:ml-8 text-lg sm:text-xl md:text-2xl text-black -z-10">
        Test your skills with exciting challenges
      </p>
    </div>

    <img
      className="hidden xl:inline-block xl:absolute xs:-top-40 xs:right-0 xs:-mt-6 h-1 w-1 -z-10 lg:h-96 lg:w-96 lg:h-auto lg:w-auto pt-40"
      src={Logo}
      alt="logo"
    />

    <img
      className="absolute top-12 right-0 xl:hidden -z-10"
      src={Shade}
      alt="shade"
    />
  </div>
);

export default Features;
