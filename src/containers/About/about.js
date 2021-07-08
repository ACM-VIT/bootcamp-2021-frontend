import React from "react";

/* Responsive About Page */
const About = () => (
  <div>
    <h1 className="flex text-left ml-10 sm:justify-center xs:mr-10 font-poppins font-bold mt-20 sm:mt-32 text-3xl sm:text-4xl md:text-5xl text-gray-900 text-opacity-90 tracking-tight">
      About Bootcamp
    </h1>

    <p className="text-left sm:justify-center sm:text-center font-poppins font-semibold mx-10 sm:mx-16 lg:mx-32 mt-10 sm:mt-12 lg:mt-20 text-base sm:text-lg md:text-xl text-black">
      ACM Summer Bootcamp is an all-immersive Bootcamp for novices and pros
      alike. We aim to provide you with a hands-on learning experience through
      our accomplished student mentors. Through
      <span className="text-yellow-500"> project-based learning</span>, we will
      help you get started in 4 exciting domains:
    </p>

    <h2 className="text-left sm:justify-center sm:text-center font-poppins font-semibold mt-8 sm:mt-12 mx-10 text-lg sm:text-2xl md:text-3xl text-yellow-500 text-opacity-100">
      Web Development, App Development, Machine Learning and Design
    </h2>

    <p className="flex text-left sm:justify-center sm:text-center font-poppins font-semibold mx-10 sm:mx-16 lg:mx-32 mt-8 sm:mt-12 text-base sm:text-lg md:text-xl text-black">
      Within two weeks, you will have gained diverse technical knowledge and
      also have incredible projects under your belt.
    </p>

    <p className="text-left sm:justify-center sm:text-center font-poppins font-semibold mx-10 sm:mx-16 lg:mx-40 mt-8 mb-10 text-base sm:text-lg md:text-xl text-black">
      Not to forget, we will provide
      <span className="text-yellow-500"> certificates</span> upon successful
      completion of the Bootcamp and give personal
      <span className="text-yellow-500"> shout-outs</span> to the top projects
      on our social media handles!
    </p>
  </div>
);

export default About;
