/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ColoredCard = ({ title }) => {
  return <div>Colored Card{title}</div>;
};

const WorkshopCard = ({ title, subtitle, color, isActive }) => {
  console.log(`$${title} active > ${isActive}`);
  return (
    <div>
      {isActive ? (
        <div>
          {/** this is the card in expanded form -> visible when clicked */}
          <div className="container items-center px-5 py-12 lg:px-20">
            <div className="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
              <div className="flex flex-col items-start py-2 rounded-lg lg:flex-row">
                <div className="flex flex-col w-full text-blueGray-500 lg:ml-4">
                  <h2 className="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font">
                    This is workshop for {title}
                  </h2>
                  <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/** this is the card in collapsed form -> visible when something else is clicked */}
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            {title} :: {subtitle}
          </button>
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
    console.log(`Set card index to ${cardIndex}`);
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

  return (
    <div>
      {/** this part contains the code that will be executed when none of the card is selected */}
      {isAllInactive() ? (
        <div>
          <div onClick={() => transaction(1)}>
            <ColoredCard title="One" />
          </div>
          <div onClick={() => transaction(2)}>Workshop 2</div>
          <div onClick={() => transaction(3)}>Workshop 3</div>
          <div onClick={() => transaction(4)}>Workshop 4</div>
        </div>
      ) : (
        <div>
          {/** this part contains the code that will be executed when one of the card is selected */}
          <div onClick={() => transaction(1)}>
            <WorkshopCard
              color="red"
              subtitle={`active state => ${component1Active}`}
              title="web"
              key="1"
              isActive={component1Active}
            />
          </div>
          <div onClick={() => transaction(2)}>
            <WorkshopCard
              color="green"
              subtitle={`active state => ${component2Active}`}
              title="app"
              key="2"
              isActive={component2Active}
            />
          </div>
          <div onClick={() => transaction(3)}>
            <WorkshopCard
              color="blue"
              subtitle={`active state => ${component3Active}`}
              title="ml - ai"
              key="3"
              isActive={component3Active}
            />
          </div>
          <div onClick={() => transaction(4)}>
            <WorkshopCard
              color="yellow"
              subtitle={`active state => ${component4Active}`}
              title="design"
              key="4"
              isActive={component4Active}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopSection;
