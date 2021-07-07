import React from "react";

/* Responsive About Page */
const About = () => (
  <div>
    <h1 className="flex text-left ml-10 xs:justify-center xs:mr-10 font-poppins font-bold mt-20 xs:mt-32 text-3xl xs:text-5xl text-gray-900 text-opacity-90 tracking-tight">
      About Bootcamp
    </h1>

    <p className="text-left xs:justify-center xs:text-center font-poppins font-semibold mx-10 xs:mx-32 mt-10 xs:mt-20 text-base xs:text-xl text-black">
      ACM Summer Bootcamp is an all-immersive Bootcamp for novices and pros
      alike. We aim to provide you with a hands-on learning experience through
      our accomplished student mentors. Through
      <span className="text-yellow-500"> project-based learning</span>, we will
      help you get started in 4 exciting domains:
    </p>

    <h2 className="text-left xs:justify-center xs:text-center font-poppins font-semibold mr-8 xs:ml-8 mt-8 xs:mt-12 ml-10 xs:mr-10 text-lg xs:text-3xl text-yellow-500 text-opacity-100">
      Web Development, App Development, Machine Learning and Design
    </h2>

    <p className="flex text-left xs:justify-center xs:text-center font-poppins font-semibold mx-10 mt-8 xs:mt-12 text-base xs:text-xl text-black">
      Within two weeks, you will have gained diverse technical knowledge and
      also have incredible projects under your belt.
    </p>

    <p className="text-left xs:justify-center xs:text-center font-poppins font-semibold mx-10 xs:mx-40 mt-8 mb-10 text-base xs:text-xl text-black">
      Not to forget, we will provide
      <span className="text-yellow-500"> certificates</span> upon successful
      completion of the Bootcamp and give personal
      <span className="text-yellow-500"> shout-outs</span> to the top projects
      on our social media handles!
    </p>
  </div>
);

export default About;
