import React from "react";
import { Button } from "./FeedbackOptions.styled";
import { Div } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Div>
      {options.map((el) => (
        <Button key={el} type="button" onClick={() => onLeaveFeedback(el)}>
          {el}
        </Button>
      ))}
    </Div>
  );
};

export default FeedbackOptions;
