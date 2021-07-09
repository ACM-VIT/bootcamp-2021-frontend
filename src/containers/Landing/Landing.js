import React from "react";
import CountDown from "../../components/CountDown/CountDown";

import LandingLogo from "../../images/Landing.svg";
import LangingGlow from "../../images/yellow-glow.svg";
import Twitter from "../../images/Twitter.svg";
import Instagram from "../../images/Insta.svg";
import LinkedIn from "../../images/linkedin.svg";
import DiscordMobile from "../../images/discord-mobile.svg";
import DiscordLanding from "../../images/discord-landing.svg";

const Landing = () => {
  const currentDate = new Date();
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();
  return (
    <>
      <section className="flex pl-6 pr-6 md:pr-0 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24 md:w-120 lg:w-192 justify-start">
        <div className="mt-36 md:mt-20 grid z-100">
          <div>
            <h3 className="font-600 text-custom">ACM-VIT Initiative</h3>
            <p className="font-600 mt-2 text-landing-xsmall md:leading-normal lg:leading-normal xl:leading-normal sm:text-landing-large md:w-120 lg:w-192 text-custom md:text-6xl xl:text-landing-large lg:text-6xl">
              Unlock your potential this{" "}
              <span className="text-yellow-400">summer!</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-12">
            <h3 className="font-500 mr-4 text-lg text-custom">
              Web Dev 101 starts in
            </h3>
            <span className="text-yellow-grad mt-2 text-xl sm:mt-0 sm:text-2xl">
              <CountDown date={`${year}-07-14T12:00:00`} />
            </span>
          </div>
          <div className="mt-12 flex flex-col md:flex-row">
            <div className="w-full xs:w-72 h-12 bg-yellow-grad rounded-xl">
              <input
                className="font-500 appearance-none rounded-xl border-2 border-yellow-200 text-md w-full sm:w-72 h-12 py-2 px-6 mr-2 leading-tight placeholder-yellow-400 focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <button
              className="mt-3 md:mt-0 xs:w-40 font-500 bg-yellow-grad text-white md:w-36 h-12 py-2 md:px-4 md:ml-2 rounded-xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              RSVP now
            </button>
          </div>
        </div>
        <div>
          <img
            className="absolute right-0 xl:-top-8 xl:w-152 xl:top-0 lg:w-5/12 invisible md:visible md:w-7/12 md:top-12 lg:mt-16 -z-10"
            src={LandingLogo}
            alt="LandingLogo"
            width="600"
          />
        </div>

        {/* Landing glow - mobile view */}
        <div>
          <img
            className="absolute -z-10 right-0 top-0 md:hidden xs:w-4/5 xs:top-10"
            src={LangingGlow}
            alt="LandingLogo"
            width="700"
          />
        </div>
        <div className="md:hidden">
          <a href="https://discord.com/">
            <img
              className="fixed h-24 top-112 right-0"
              src={DiscordMobile}
              alt=""
            />
          </a>
        </div>
      </section>

      {/* Landing Bottom */}
      <section className="flex justify-between items-center invisible md:visible px-16 xl:px-24 grid grid-cols-2 mt-16">
        <div className="flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ACM_VIT"
          >
            <img className="mr-6 h-5 w-5" src={Twitter} alt="Twitter" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/acmvit"
          >
            <img className="mr-6 h-5 w-5" src={Instagram} alt="Instagram" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/acm-vit-chapter/mycompany/"
          >
            <img className="mr-6 h-5 w-5" src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div className="justify-self-end z-100">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/gBxsGyEp"
          >
            <img
              className="cursor-pointer"
              src={DiscordLanding}
              alt="Discord"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default Landing;
