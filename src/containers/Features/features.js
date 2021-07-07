import React from "react";
import Dot from "../../images/dot.svg";
import Logo from "../../images/featurelogo.svg";
import Shade from "../../images/shade.svg";

/* Responsive Feature Page */
const Features = () => (
  <div>
    <h1 className="flex left-0 font-poppins font-bold mt-32 xs:mt-40 ml-8 xs:ml-28 text-4xl xs:text-5xl text-gray-900 text-opacity-90 tracking-tight">
      Features
    </h1>

    <div className="flex text-left -ml-2 xs:ml-0.5 mr-12 mt-12 xs:mt-16">
      <img
        className="h-2.5 w-2.5 xs:h-auto xs:w-auto ml-10 xs:ml-28"
        src={Dot}
        alt="dot"
      />
      <p className="font-poppins font-semibold -mt-2 ml-3 xs:ml-8 text-lg xs:text-2xl text-black">
        Two-week long Bootcamp covering 4 domains
      </p>
    </div>

    <div className="flex text-left -ml-2 xs:ml-0.5 mr-12 mt-10 xs:mt-16">
      <img
        className="h-2.5 w-2.5 xs:h-auto xs:w-auto ml-10 xs:ml-28"
        src={Dot}
        alt="dot"
      />
      <p className="font-poppins font-semibold -mt-2 ml-3 xs:ml-8 text-lg xs:text-2xl text-black">
        Interactive code-along sessions
      </p>
    </div>

    <div className="flex text-left -ml-2 xs:ml-0.5 mr-12 mt-10 xs:mt-16">
      <img
        className="h-2.5 w-2.5 xs:h-auto xs:w-auto ml-10 xs:ml-28"
        src={Dot}
        alt="dot"
      />
      <p className="font-poppins font-semibold -mt-2 ml-3 xs:ml-8 text-lg xs:text-2xl text-black">
        Access to domain-specific resources
      </p>
    </div>

    <div className="flex text-left -ml-2 xs:ml-0.5 mr-12 mt-10 xs:mt-16">
      <img
        className="h-2.5 w-2.5 xs:h-auto xs:w-auto ml-10 xs:ml-28"
        src={Dot}
        alt="dot"
      />
      <p className="font-poppins font-semibold -mt-2 ml-3 xs:ml-8 text-lg xs:text-2xl text-black">
        Test your skills with exciting challenges
      </p>
    </div>

    <img
      className="invisible xs:visible xs:absolute xs:top-0 xs:right-0 xs:-mt-6 h-1 w-1 xs:h-auto xs:w-auto"
      src={Logo}
      alt="logo"
    />

    <img className="absolute top-40 right-0" src={Shade} alt="shade" />
  </div>
);

export default Features;
