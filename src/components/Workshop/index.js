import React from "react";

import ArrorLogo from "../../images/Arrow-right.svg";

const workshopComponent = (props) => {
  return (
    <div>
      {/* <button type="button"> */}
      <div className="w-72 h-28 py-3.5 px-4 md:w-150 md:h-60 md:py-6 md:pl-8 bg-red-300 relative rounded-xl hover:shadow-2xl">
        <div className="text-white text-5xl mb-2 font-600">Web Dev 101</div>
        <div className="text-xl text-white  leading-7.5 font-500">
          Create a Personal Portfolio using React
        </div>
        <div className="">{props.color}</div>

        <div className="flex absolute right-4 bottom-4">
          <h4 className="text-white mr-2">Show More</h4>
          <img src={ArrorLogo} alt="Arror" />
        </div>
        {/* <div className="text-5xl font-600">{props.Title}</div>
        <div className="text-xl font-500">{props.subTitle}</div>
        <div className="">{props.color}</div> */}
      </div>
      {/* </button> */}
    </div>
  );
};

export default workshopComponent;
