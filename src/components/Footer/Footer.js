import React from "react";

import acmLogo from "../../images/ACM-Logo.svg";
import Fb from "../../images/Fb.svg";
import Twitter from "../../images/Footer-Twitter.svg";
import Instagram from "../../images/Footer-IG.svg";
import LinkedIn from "../../images/Footer-Linkedin.svg";
import Medium from "../../images/Medium.svg";
import vitLogo from "../../images/VIT-Logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="md:flex justify-between h-24 px-24 bg-black items-center">
        <div>
          <a href="https://acmvit.in/">
            <img src={acmLogo} alt="ACM-Logo" />
          </a>
        </div>
        <div className="flex">
          <a href="https://www.facebook.com/acmvitvellore/" className="mr-2">
            <img src={Fb} alt="FB" />
          </a>
          <a href="https://twitter.com/ACM_VIT" className="mr-2">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://instagram.com/acmvit" className="mr-2">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="/" className="mr-2">
            <img src={Medium} alt="Medium" />
          </a>
          <a
            href="https://www.linkedin.com/company/acm-vit-chapter/mycompany/"
            className="mr-2"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div>
          <a href="https://vit.ac.in/">
            <img src={vitLogo} alt="VIT-Logo" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
