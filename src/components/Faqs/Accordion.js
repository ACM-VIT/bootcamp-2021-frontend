import React, { useState } from "react";
import styled from "styled-components";
import Data from "./Data";
import DownArrowHead from "../../images/Down-ArrowHead.svg";
import UpArrowHead from "../../images/Up-ArrowHead.svg";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: white;
`;

const Container = styled.div`
  position: absolute;
  top: 10%;
  width: 1000px;
`;

const Wrap = styled.div`
  background: linear-gradient(135deg, #ffc963 0%, #ffac53 100%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  border-radius: 20px 20px 20px 20px;
  cursor: pointer;
  h1 {
    padding: 1.3rem 2rem;
    font-size: 1.2rem;
  }
  span {
    margin-right: 1.5rem;
  }
  border-bottom-left-radius: ${(props) => props.round};
  border-bottom-right-radius: ${(props) => props.round};
`;

const Dropdown = styled.div`
  background: white;
  color: #333333;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  border: 2px solid #f0b051;
  border-top: none;
  border-radius: 0px 0px 20px 20px;
  p {
    font-size: 1.2rem;
  }
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
    <AccordionSection>
      <Container>
        <div className="text-5xl text-center mb-24 text-custom font-600">
          FAQS
        </div>
        {Data.map((item, index) => {
          return (
            <>
              <Wrap
                round={clicked === index ? "0" : "20px"}
                onClick={() => toggle(index)}
                key={Data.index}
              >
                <h1>{item.question}</h1>
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
                  <Dropdown>
                    <p>{item.answer}</p>
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
