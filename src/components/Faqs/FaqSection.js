/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
import Accordion from "./Accordion";
import "./FaqSection.css";
import data from "./Data";
// import {
//   Fade,
//   Zoom,
//   Flip,
//   Rotate,
//   Bounce,
//   Slide,
//   Roll,
//   LightSpeed,
// } from "react-reveal";
const Question = ({ id, question, answer }) => {
  return (
    <div className="tab overflow-hidden w-full md:w-3/4">
      <input className="absolute opacity-0" id={id} type="radio" name="faq" />
      <label className="block cursor-pointer" htmlFor={id}>
        {question}
      </label>
      <div className="tab-content overflow-hidden leading-normal">
        <p className="p-4 pt-0">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <article id="faqs" className="faqcontainer">
      <h1 className="faqheading">FAQS</h1>
      <div className="tabscontainer">
        {data.map((ques, key) => (
          <Accordion
            key={key}
            id={ques.id}
            title={ques.question}
            content={ques.answer}
          />
        ))}
      </div>
    </article>
  );
};

export default FaqSection;
