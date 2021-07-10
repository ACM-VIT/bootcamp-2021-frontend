/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";

import Hamburger from "../../images/Hamburger.svg";
import Cross from "../../images/cross.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef(null);
  return (
    <div>
      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="p-2"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          {!isOpen ? <img src={Hamburger} alt="cross" /> : null}
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={menu}
            className="md:hidden border absolute right-2 top-4 bg-white border-yellow-500 rounded-xl z-50"
            id="mobile-menu"
          >
            <button
              className="absolute right-2 top-2"
              type="button"
              onClick={() => {
                menu.current.classList.add("mobile-menu-hidden");
                setIsOpen(!isOpen);
              }}
              // onClick={() => setIsOpen(!isOpen)}
            >
              <img src={Cross} alt="cross" />
            </button>
            <div ref={ref} className="space-y-1 w-full mr-12 flex flex-col">
              <div className="mb-3 mt-8 flex">
                <a href="#about" className="font-500 w-full text-custom px-3">
                  About
                </a>
              </div>

              <div className="flex" style={{ marginBottom: "12px" }}>
                <a
                  href="#workshops"
                  className="font-500 w-full text-custom px-3"
                >
                  Workshops
                </a>
              </div>

              <div className="flex" style={{ marginBottom: "12px" }}>
                <a
                  href="#features"
                  className="font-500 w-full text-custom px-3"
                >
                  Features
                </a>
              </div>

              <div className="flex" style={{ marginBottom: "12px" }}>
                <a href="#perks" className="font-500 w-full text-custom px-3">
                  Perks
                </a>
              </div>

              <div className="flex" style={{ marginBottom: "24px" }}>
                <a href="#faqs" className="font-500 w-full text-custom px-3">
                  FAQs
                </a>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export default Nav;
