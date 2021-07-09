import React, { useState } from "react";
import styled from "styled-components";
import Data from "./Data";
import DownArrowHead from "../../images/Down-ArrowHead.svg";
import UpArrowHead from "../../images/Up-ArrowHead.svg";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: white;
`;

const Container = styled.div``;

const Wrap = styled.div`
  background: linear-gradient(135deg, #ffc963 0%, #ffac53 100%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  border-radius: 20px 20px 20px 20px;
  cursor: pointer;
  span {
    margin-right: 1.5rem;
  }
  border-bottom-left-radius: ${(props) => props.round};
  border-bottom-right-radius: ${(props) => props.round};
`;

const Dropdown = styled.div`
  background: white;
  color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  border: 2px solid #f0b051;
  border-top: none;
  border-radius: 0px 0px 20px 20px;
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(-1);

  // eslint-disable-next-line consistent-return
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <AccordionSection
      id="faqs"
      className="justify-left md:justify-center w-full mb-112 xs:mb-48 sm:mb-40 md:mb-52"
    >
      <Container className="w-full md:w-9/12 mx-6">
        <div className="pl-7 sm:pl-0 text-3xl sm:text-4xl md:text-5xl pl-6 sm:text-center mb-8 md:mb-16 mt-20 text-custom font-600">
          FAQS
        </div>
        {Data.map((item, index) => {
          return (
            <>
              <Wrap
                className="mx-6"
                round={clicked === index ? "0" : "20px"}
                onClick={() => toggle(index)}
                key={Data.index}
              >
                <h1 className="py-4 px-4 text-md sm:py-5 sm:px-8 sm:text-xl w-full">
                  {item.question}
                </h1>
                <span>
                  {clicked === index ? (
                    <img src={UpArrowHead} alt="" />
                  ) : (
                    <img src={DownArrowHead} alt="" />
                  )}
                </span>
              </Wrap>

              {clicked === index ? (
                <div>
                  <Dropdown className="mx-6">
                    <p className="text-md sm:text-xl">{item.answer}</p>
                  </Dropdown>
                </div>
              ) : null}
            </>
          );
        })}
      </Container>
    </AccordionSection>
  );
};

export default Accordion;
