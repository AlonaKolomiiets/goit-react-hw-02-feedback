import React from "react";
import { Title } from "./Section.styled";
import { Div } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <>
      <Div>
        <Title>{title}</Title>
        {children}
      </Div>
    </>
  );
};

export default Section;
