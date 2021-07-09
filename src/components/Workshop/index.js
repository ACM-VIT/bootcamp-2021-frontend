import React from "react";

import ArrorLogo from "../../images/Arrow-right.svg";
const workshopComponent = ({ title, subtitle, color }) => {
  return (
    <div>
      <div className={`rounded-2xl ${color}`}>
        <div className="w-72 h-28 py-3.5 px-4 md:w-150 md:h-60 md:py-6 md:pl-8 cursor-pointer relative rounded-2xl hover:shadow-2xl">
          <div className="text-white text-5xl mb-2 font-600">{title}</div>
          <div className="text-xl text-white  leading-7.5 font-500">
            {subtitle}
          </div>
          <div className="flex absolute right-4 bottom-4">
            <h4 className="text-white mr-2">Show More</h4>
            <img src={ArrorLogo} alt="Arror" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default workshopComponent;
