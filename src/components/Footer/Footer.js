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
      <footer className="invisible md:visible md:flex justify-between h-24 px-24 bg-black items-center">
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://acmvit.in/"
          >
            <img src={acmLogo} alt="ACM-Logo" />
          </a>
        </div>
        <div className="flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/acmvitvellore/"
            className="mr-2"
          >
            <img src={Fb} alt="FB" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ACM_VIT"
            className="mr-2"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/acmvit"
            className="mr-2"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/acmvit"
            className="mr-2"
          >
            <img src={Medium} alt="Medium" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/acm-vit-chapter/mycompany/"
            className="mr-2"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vit.ac.in/"
          >
            <img src={vitLogo} alt="VIT-Logo" />
          </a>
        </div>
      </footer>

      {/* Footer - mobile view */}

      <footer className="sm:flex-col justify-between h-32 px-12 bg-black items-center md:hidden">
        <div className="flex justify-center py-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/acmvitvellore/"
            className="mr-2"
          >
            <img src={Fb} alt="FB" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ACM_VIT"
            className="mr-2"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/acmvit"
            className="mr-2"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/acmvit"
            className="mr-2"
          >
            <img src={Medium} alt="Medium" />
          </a>
          <a
            href="https://www.linkedin.com/company/acm-vit-chapter/mycompany/"
            className="mr-2"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div className="flex justify-between">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://acmvit.in/"
            >
              <img src={acmLogo} alt="ACM-Logo" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vit.ac.in/"
            >
              <img src={vitLogo} alt="VIT-Logo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
