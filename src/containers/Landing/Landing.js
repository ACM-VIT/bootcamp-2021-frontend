import React from "react";
import CountDown from "../../components/CountDown/CountDown";

import LandingLogo from "../../images/Landing.svg";
import Twitter from "../../images/Twitter.svg";
import Instagram from "../../images/Insta.svg";
import LinkedIn from "../../images/linkedin.svg";
import DiscordLogo from "../../images/Discord.svg";

const Landing = () => {
  const currentDate = new Date();
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();
  return (
    <>
      <section className="flex pl-24 w-192 justify-start">
        <div className="mt-48 grid z-100">
          <div>
            <h3 className="font-600 text-custom">ACM-VIT Initiative</h3>
            <p className="font-600 text-6xl mt-2 font-bold w-192 text-custom font-custom">
              Unlock your potential this summer!
            </p>
          </div>
          <div className="flex mt-12">
            <h3 className="font-500 mr-4 text-lg text-custom">
              Web Dev 101 starts in
            </h3>
            <span className="text-yellow-grad text-2xl">
              <CountDown date={`${year}-07-14T12:00:00`} />
            </span>
          </div>
          <div className="mt-12 flex">
            <div className="w-72 h-12 bg-yellow-grad rounded-xl">
              <input
                className="font-500 appearance-none rounded-xl border-2 border-yellow-200 text-md w-72 h-12 py-2 px-6 mr-2 leading-tight placeholder-yellow-400 focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <button
              className="font-500 bg-yellow-grad text-white w-36 h-12 py-2 px-4 ml-2 rounded-xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              RSVP now
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="absolute right-0 z-100 top-0"
            src={LandingLogo}
            alt="LandingLogo"
            width="700"
          />
        </div>
      </section>

      {/* Landing Bottom */}
      <section className="px-24 grid grid-cols-2 mt-20">
        <div className="flex">
          <a href="https://twitter.com/ACM_VIT">
            <img className="mr-6 h-5 w-5" src={Twitter} alt="Twitter" />
          </a>
          <a href="https://instagram.com/acmvit">
            <img className="mr-6 h-5 w-5" src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/acm-vit-chapter/mycompany/">
            <img className="mr-6 h-5 w-5" src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div className="justify-self-end">
          <a href="https://discord.com/">
            <button
              className="bg-discord text-white py-3 px-3 w-48 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              <img
                className="h-6 w-6 absolute"
                src={DiscordLogo}
                alt="Discord"
              />
              <span className="ml-9 text-md">Join our Discord</span>
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Landing;
