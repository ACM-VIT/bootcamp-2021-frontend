import React from "react";
import Dot from "../../images/dot2.svg";
import Shade from "../../images/shade2.svg";
import Logo from "../../images/perklogo.svg";

const Perks = () => (
  <div className="relative text-left lg:-mr-16 xl:-mr-4 overflow-hidden">
    <h1 className="flex font-poppins font-bold mt-32 ml-8 sm:ml-16 md:ml-20 text-3xl sm:text-4xl md:text-5xl text-gray-900 text-opacity-90 tracking-tight">
      Perks and Benefits
    </h1>

    <div className="text-left md:flex-col sm:ml-10 md:-ml-10 -mt-4 lg:mt-6 lg:ml-4 mr-10">
      <div className="flex lg:flex-row-reverse mt-16 ml-8 md:ml-32">
        <img
          className="h-2.5 w-2.5 sm:h-auto sm:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-poppins font-semibold -ml-24 mr-4 sm:mt-1 text-lg sm:text-xl md:text-2xl text-black">
          Build a diverse portfolio
        </p>
      </div>

      <div className="flex lg:flex-row-reverse mt-8 ml-8 md:ml-32">
        <img
          className="h-2.5 w-2.5 sm:h-auto sm:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-poppins font-semibold -ml-24 mr-4 sm:mt-1 text-lg sm:text-xl md:text-2xl text-black">
          Gain industry-relevant skills
        </p>
      </div>

      <div className="flex lg:flex-row-reverse mt-8 ml-8 md:ml-32">
        <img
          className="h-2.5 w-2.5 sm:h-auto sm:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-poppins font-semibold -ml-24 mr-4 sm:mt-1 text-lg sm:text-xl md:text-2xl text-black">
          Mentorship by experienced devs
        </p>
      </div>

      <div className="flex lg:flex-row-reverse mt-8 ml-8 md:ml-32">
        <img
          className="h-2.5 w-2.5 sm:h-auto sm:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-poppins font-semibold -ml-24 mr-4 sm:mt-1 text-lg sm:text-xl md:text-2xl text-black">
          Certificates upon completion
        </p>
      </div>

      <div className="flex lg:flex-row-reverse mt-8 ml-8 md:ml-32">
        <img
          className="h-2.5 w-2.5 sm:h-auto sm:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-poppins font-semibold -ml-24 mr-4 sm:mt-1 text-lg sm:text-xl md:text-2xl text-black">
          Shout-outs on our Instagram handle
        </p>
      </div>

      <img
        className="invisible lg:visible xs:absolute xs:top-0 xs:left-0 xs:-mt-6 h-1 w-1 h-auto w-auto"
        src={Logo}
        alt="logo"
      />

      <img
        className="absolute top-36 right-0 lg:invisible"
        src={Shade}
        alt="shade"
      />
    </div>
  </div>
);

export default Perks;
