/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import WorkshopComponent from "../../components/Workshop";
import Data from "./Data";

import CalendarLogo from "../../images/Calendar.svg";

const WorkshopCard = ({
  title,
  subtitle,
  desc,
  cLink,
  color,
  bColor,
  isActive,
}) => {
  // console.log(`$${title} active > ${isActive}`);
  return (
    <div>
      {isActive ? (
        <div>
          {/** this is the card in expanded form -> visible when clicked */}
          <div className="container items-center py-12">
            <div className="text-5xl mt-8 text-custom text-center font-600 pb-16">
              Offered Workshops
            </div>
            <div
              className={`mx-auto w-full md:w-full lg:w-258 xl:w-310 border-${bColor}-500 border-2 rounded-lg`}
            >
              <div className="flex flex-col items-start py-2 rounded-lg">
                <div className="flex flex-col w-full text-blueGray-500">
                  <h2 className="font-600 text-custom py-8 px-11 mt-4 text-5xl tracking-widest uppercase lg:mt-0 ">
                    {title}
                  </h2>
                  <p className="font-500 text-custom text-2xl px-11 leading-relaxed text-blueGray-500">
                    {subtitle}
                  </p>
                  <p className="font-500 px-11 pt-6 mt-2">{desc}</p>
                  <a href={`${cLink}`} target="_blank" rel="noreferrer">
                    <div className="px-7 pt-2 pb-6 md:px-11 md:pt-4 md:pb-9">
                      <button
                        className={`w-40 h-10 md:w-64 md:h-16 bg-${color} rounded-md md:rounded-xl text-white`}
                      >
                        <div className="flex ml-8">
                          <img src={CalendarLogo} alt="Calendar" />
                          <span className="ml-2 md:ml-4 text-xs md:text-xl font-500">
                            Add to calendar
                          </span>
                        </div>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="">
            {/** this is the card in collapsed form -> visible when something else is clicked */}
            <button
              className={`bg-${color} text-white hover:shadow-xl mr-2 xs:text-lg md:text-2xl flex justify-center items-center xs:w-24 xs:h-8 sm:w-48 sm:h-12 md:w-56 md:h-16 lg:h-20 lg:w-80 xl:w-96 xl:h-20 py-7 px-16 md:px-24 lg:px-40 rounded-2xl`}
            >
              {title}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const WorkshopSection = () => {
  /** initialize 4 state variables */
  const [component1Active, setComponent1Active] = useState(false);
  const [component2Active, setComponent2Active] = useState(false);
  const [component3Active, setComponent3Active] = useState(false);
  const [component4Active, setComponent4Active] = useState(false);

  /** function which returns true when all four components are inactive */
  const isAllInactive = () => {
    return !(
      component1Active ||
      component2Active ||
      component3Active ||
      component4Active
    );
  };

  /** set all components to inactive */
  const setAllInactive = () => {
    setComponent1Active(false);
    setComponent2Active(false);
    setComponent3Active(false);
    setComponent4Active(false);
  };

  /**
   * this is the only function that is attached to the views (components / divisions / ...)
   * when clicked, it will set the active state of the component to true
   * when clicked again, it will set the active state to false
   */
  const transaction = (cardIndex) => {
    // console.log(`Set card index to ${cardIndex}`);
    setAllInactive();

    switch (cardIndex) {
      case 1:
        setComponent1Active(true);
        break;
      case 2:
        setComponent2Active(true);
        break;
      case 3:
        setComponent3Active(true);
        break;
      case 4:
        setComponent4Active(true);
        break;
      default:
        setAllInactive();
    }
  };

  /** auxillary components */
  const WebCard = () => {
    return (
      <WorkshopCard
        bColor="red"
        color="red-grad"
        subtitle={Data.web.subtitle}
        desc={Data.web.body}
        cLink={Data.web.calendar}
        title={Data.web.title}
        key="1"
        isActive={component1Active}
      />
    );
  };

  const AppCard = () => {
    return (
      <WorkshopCard
        bColor="blue"
        color="blue-grad"
        subtitle={Data.app.subtitle}
        desc={Data.app.body}
        cLink={Data.app.calendar}
        title={Data.app.title}
        key="2"
        isActive={component2Active}
      />
    );
  };

  const ResearchCard = () => {
    return (
      <WorkshopCard
        bColor="yellow"
        color="yellow-grad"
        subtitle={Data.research.subtitle}
        desc={Data.research.body}
        cLink={Data.research.calendar}
        title={Data.research.title}
        key="3"
        isActive={component3Active}
      />
    );
  };

  const DesignCard = () => {
    return (
      <WorkshopCard
        bColor="green"
        color="green-grad"
        subtitle={Data.design.subtitle}
        desc={Data.design.body}
        cLink={Data.design.calendar}
        title={Data.design.title}
        key="4"
        isActive={component4Active}
      />
    );
  };

  return (
    <div>
      {/** this part contains the code that will be executed when none of the card is selected */}

      {isAllInactive() ? (
        <div className="">
          {}
          <div className="text-5xl mt-24 text-custom text-center font-600 pb-16">
            Offered Workshops
          </div>
          <div className="flex px-16 justify-center items-center flex-wrap">
            <div className="mr-8 mb-8 " onClick={() => transaction(1)}>
              <WorkshopComponent
                title="Web Dev 101"
                subtitle="Create a Personal Portfolio using React"
                color="bg-red-grad"
              />
            </div>
            <div className="mb-8" onClick={() => transaction(2)}>
              <WorkshopComponent
                title="App Dev 101"
                subtitle="Headfirst into Flutter"
                color="bg-blue-grad"
              />
            </div>
            <div className="mr-8 mb-8" onClick={() => transaction(3)}>
              <WorkshopComponent
                title="ML 101"
                subtitle="Gesture Control Your Screen using Python!
              Build a Gesture Recognition System with Python!"
                color="bg-yellow-grad"
              />
            </div>
            <div className="mb-8" onClick={() => transaction(4)}>
              <WorkshopComponent
                title="Design 101"
                subtitle="Create a Personal Portfolio using React"
                color="bg-green-grad"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/** this part contains the code that will be executed when one of the card is selected */}
          <div>
            {component1Active ? (
              <div onClick={() => transaction(1)}>
                <WebCard />
              </div>
            ) : null}

            {component2Active ? (
              <div onClick={() => transaction(2)}>
                <AppCard />
              </div>
            ) : null}

            {component3Active ? (
              <div onClick={() => transaction(3)}>
                <ResearchCard />
              </div>
            ) : null}

            {component4Active ? (
              <div onClick={() => transaction(4)}>
                <DesignCard />
              </div>
            ) : null}
          </div>
          <div>
            <div className="flex justify-between sm:px-8 xs:px-4 md:px-16 lg:px-20 xl:px-28">
              {!component1Active ? (
                <div onClick={() => transaction(1)}>
                  <WebCard />
                </div>
              ) : null}

              {!component2Active ? (
                <div onClick={() => transaction(2)}>
                  <AppCard />
                </div>
              ) : null}

              {!component3Active ? (
                <div onClick={() => transaction(3)}>
                  <ResearchCard />
                </div>
              ) : null}

              {!component4Active ? (
                <div onClick={() => transaction(4)}>
                  <DesignCard />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopSection;
