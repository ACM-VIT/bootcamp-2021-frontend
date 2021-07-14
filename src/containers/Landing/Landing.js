import React, { useState, useEffect } from "react";

import axios from "axios";
import qs from "qs";
import { showToast } from "react-toaster-minimal";

import CountDown from "../../components/CountDown/CountDown";
import LandingLogo from "../../images/Landing.svg";
import LangingGlow from "../../images/yellow-glow.svg";
import Twitter from "../../images/Twitter.svg";
import Instagram from "../../images/Insta.svg";
import LinkedIn from "../../images/linkedin.svg";
import DiscordMobile from "../../images/discord-mobile.svg";
import DiscordLanding from "../../images/discord-landing.svg";
import CalendarLogo from "../../images/Calendar.svg";

const Landing = () => {
  const currentDate = new Date();
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();

  // store user email on change
  const [email, setEmail] = useState("");
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("tk")) {
      setRegistered(true);
    }
    return () => {
      setRegistered(false);
    };
  }, []);
  const addUserToList = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.length === 0) {
      showToast({
        title: "Please enter an email.",
        bgColor: "red",
        textColor: "#fff",
        closeTimeInMs: 3000,
      });
      return;
    }

    if (!re.test(email)) {
      showToast({
        title: "The email provided is incorrect.",
        bgColor: "red",
        textColor: "#fff",
        closeTimeInMs: 3000,
      });
      return;
    }

    axios({
      method: "post",
      url: `https://email.acmvit.in/rsvp`,
      data: qs.stringify({
        email,
        captcha: window.sessionStorage.getItem("token"),
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((res) => {
      const {
        data: { success },
      } = res;
      if (success) {
        showToast({
          title: res.data.msg,
          bgColor: "green",
          textColor: "#fff",
          closeTimeInMs: 3000,
        });
        setEmail("");
        localStorage.setItem("tk", true);
        setRegistered(true);
      } else {
        showToast({
          title: res.data.msg,
          bgColor: "red",
          textColor: "#fff",
          closeTimeInMs: 3000,
        });
      }
      // const {success} = res.success;
    });
  };
  return (
    <>
      <section className="flex pl-6 pr-6 md:pr-0 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24 md:w-120 lg:w-192 justify-start">
        <div className="mt-36 md:mt-20 grid z-100">
          <div>
            <h3 className="font-600 text-custom">An ACM-VIT Initiative</h3>
            <p className="font-600 mt-2 text-landing-xsmall md:leading-normal lg:leading-normal xl:leading-normal sm:text-landing-large md:w-120 lg:w-192 text-custom md:text-6xl xl:text-landing-large lg:text-6xl">
              Unlock your potential this{" "}
              <span className="text-yellow-400">summer!</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-12">
            <h3 className="font-500 mr-4 text-lg text-custom">
              App Dev 101 starts in
            </h3>
            <span className="text-yellow-grad mt-2 text-xl sm:mt-0 sm:text-2xl">
              <CountDown date={`${year}-07-17T12:00:00`} />
            </span>
          </div>
          <div className="mt-12 flex flex-col md:flex-row">
            {!registered && (
              <div className="w-full xs:w-72 h-12 bg-yellow-grad rounded-xl">
                <input
                  className="font-500 appearance-none rounded-xl border-2 border-yellow-200 text-md w-full sm:w-72 h-12 py-2 px-6 mr-2 leading-tight placeholder-yellow-400 focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            )}
            {registered ? (
              <a
                href="https://calendar.google.com/calendar/u/5?cid=Z3E0NGZqZjJhOHN0ZzVrcTFkYmlmOWhsOXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="flex justify-center items-center w-40 md:w-auto mt-3 md:mt-0 font-500 bg-yellow-grad text-white h-12 py-2 md:px-4 rounded-xl focus:outline-none focus:shadow-outline"
                  // className="w-40 h-10 md:w-64 md:h-16 bg-yellow-grad rounded-md md:rounded-xl text-white"
                >
                  <div className="flex">
                    <img
                      className="w-3 md:w-6"
                      src={CalendarLogo}
                      alt="Calendar"
                    />
                    <span className="pl-2 md:pl-4 text-xs md:text-xl font-500">
                      Add to calendar
                    </span>
                  </div>
                </button>
              </a>
            ) : (
              <button
                className="mt-3 md:mt-0 xs:w-40 font-500 bg-yellow-grad text-white md:w-36 h-12 py-2 md:px-4 md:ml-2 rounded-xl focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => addUserToList()}
              >
                RSVP now
              </button>
            )}
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
          <a href="https://discord.gg/gBxsGyEp">
            <img
              className="fixed h-24 top-112 right-0"
              src={DiscordMobile}
              alt="discord"
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
