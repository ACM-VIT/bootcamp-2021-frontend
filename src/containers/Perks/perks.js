import React from "react";
import Dot from "../../images/dot2.svg";
import Shade from "../../images/shade2.svg";
import Logo from "../../images/perklogo.svg";

const Perks = () => (
  <div
    id="perks"
    className="relative mt-32 text-left pb-24 overflow-hidden -z-10"
  >
    <h1 className="lg:text-right font-600 text-custom mt-32 pl-8 lg:pr-28 md:pl-24 text-3xl sm:text-4xl md:text-5xl tracking-tight overflow-hidden -z-10">
      Perks and Benefits
    </h1>

    <div className="text-left md:flex-col -mt-4 lg:mt-6">
      <div className="flex lg:flex-row-reverse mt-16 ml-8 md:pl-16">
        <img
          className="h-2.5 w-2.5 sm:h-auto sm:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-500 text-custom -ml-24 mr-4 sm:mt-1 text-lg sm:text-xl md:text-2xl -z-10">
          Build a diverse portfolio
        </p>
      </div>

      <div className="flex lg:flex-row-reverse mt-8 ml-8 md:pl-16">
        <img
          className="h-2.5 w-2.5 sm:h-auto sm:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-500 text-custom -ml-24 mr-4 sm:mt-1 text-lg sm:text-xl md:text-2xl -z-10">
          Gain industry-relevant skills
        </p>
      </div>

      <div className="flex lg:flex-row-reverse mt-8 ml-8 md:pl-16">
        <img
          className="h-2.5 w-2.5 sm:h-auto sm:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-500 text-custom -ml-24 mr-4 sm:mt-1 text-lg sm:text-xl md:text-2xl -z-10">
          Mentorship by experienced devs
        </p>
      </div>

      <div className="flex lg:flex-row-reverse mt-8 ml-8 md:pl-16">
        <img
          className="h-2.5 w-2.5 sm:h-auto sm:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-500 text-custom -ml-24 mr-4 sm:mt-1 text-lg sm:text-xl md:text-2xl -z-10">
          Certificates upon completion
        </p>
      </div>

      <div className="flex lg:flex-row-reverse mt-8 ml-8 md:pl-16">
        <img
          className="h-2.5 w-2.5 sm:h-auto sm:w-auto mt-2 mr-28 xs:mr-28"
          src={Dot}
          alt="dot"
        />
        <p className="font-500 text-custom -ml-24 mr-4 sm:mt-1 text-lg sm:text-xl md:text-2xl -z-10">
          Shout-outs on our Instagram handle
        </p>
      </div>

      <img
        className="hidden lg:inline-block xs:absolute xs:top-0 xs:left-0 xs:-mt-6 h-1 w-1 h-auto w-auto"
        src={Logo}
        alt="logo"
      />

      <img
        className="absolute top-40 right-0 lg:hidden -z-20"
        src={Shade}
        alt="shade"
      />
    </div>
  </div>
);

export default Perks;
