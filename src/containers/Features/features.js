import React from "react";
import Dot from "../../images/dot.svg";
import Logo from "../../images/featurelogo.svg";

const Features = () => (
  <div>
    <h1 className="flex left-0 font-poppins font-bold mt-40 ml-28 text-5xl text-gray-900 text-opacity-90 tracking-tight">
      Features
    </h1>

    <div className="flex mt-12">
      <img className="ml-28" src={Dot} alt="dot" />
      <p className="font-poppins font-semibold ml-8 text-2xl text-black">
        Two-week long Bootcamp covering 4 domains
      </p>
    </div>

    <div className="flex mt-12">
      <img className="ml-28" src={Dot} alt="dot" />
      <p className="font-poppins font-semibold ml-8 text-2xl text-black">
        Interactive code-along sessions
      </p>
    </div>

    <div className="flex mt-12">
      <img className="ml-28" src={Dot} alt="dot" />
      <p className="font-poppins font-semibold ml-8 text-2xl text-black">
        Access to domain-specific resources
      </p>
    </div>

    <div className="flex mt-12">
      <img className="ml-28" src={Dot} alt="dot" />
      <p className="font-poppins font-semibold ml-8 text-2xl text-black">
        Test your skills with exciting challenges
      </p>
    </div>

    <img className="absolute top-0 right-0 -mt-6" src={Logo} alt="logo" />
  </div>
);

export default Features;
