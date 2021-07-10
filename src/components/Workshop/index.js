import React from "react";

import ArrorLogo from "../../images/Arrow-right.svg";
const workshopComponent = ({ title, subtitle, color }) => {
  return (
    <div>
      <div
        className={`px-4 -z-20 relative w-152 md:w-140 workshop-card rounded-2xl ${color}`}
      >
        <div className="h-52 -z-10 py-3.5 px-4 md:h-60 md:py-6 md:pl-8 cursor-pointer relative rounded-2xl hover:shadow-2xl">
          <div className="text-white workshop-card-title text-5xl mb-2 font-600 mt-2">
            {title}
          </div>
          <div className="text-xl text-white workshop-card-subtitle leading-8  md:leading-7.5 font-500 -z-10">
            {subtitle}
          </div>
          <div className="flex absolute workshop-card-font right-4 bottom-4">
            <h4 className="text-white mr-2">Show More</h4>
            <img className="w-4" src={ArrorLogo} alt="Arror" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default workshopComponent;
