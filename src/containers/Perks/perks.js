import React from "react";
import Dot from "../../images/dot2.svg";
import Logo from "../../images/perklogo.svg";

const Perks = () => (
  <div className="float-right">
    <h1 className="flex font-poppins font-bold mt-32 ml-12 text-5xl text-gray-900 text-opacity-90 tracking-tight">
      Perks and Benefits
    </h1>

    <div className="flex-col mr-10">
      <div className="flex flex-row-reverse mt-16 ml-32">
        <img className="mr-28" src={Dot} alt="dot" />
        <p className="font-poppins font-semibold mr-4 text-2xl text-black">
          Build a diverse portfolio
        </p>
      </div>

      <div className="flex flex-row-reverse mt-8">
        <img className="mr-28" src={Dot} alt="dot" />
        <p className="font-poppins font-semibold mr-4 text-2xl text-black">
          Gain industry-relevant skills
        </p>
      </div>

      <div className="flex flex-row-reverse mt-8 ml-8">
        <img className="mr-28" src={Dot} alt="dot" />
        <p className="font-poppins font-semibold mr-4 text-2xl text-black">
          Mentorship by experienced devs
        </p>
      </div>

      <div className="flex flex-row-reverse mt-8 ml-20">
        <img className="mr-28" src={Dot} alt="dot" />
        <p className="font-poppins font-semibold mr-4 text-2xl text-black">
          Certificates upon completion
        </p>
      </div>

      <div className="flex flex-row-reverse mt-8">
        <img className="mr-28" src={Dot} alt="dot" />
        <p className="font-poppins font-semibold mr-4 text-2xl text-black">
          Shout-outs on our Instagram handle
        </p>
      </div>

      <img className="absolute top-0 left-0 -mt-6" src={Logo} alt="logo" />
    </div>
  </div>
);

export default Perks;
