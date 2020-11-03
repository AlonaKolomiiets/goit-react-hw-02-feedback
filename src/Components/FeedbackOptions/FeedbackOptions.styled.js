import styled from "styled-components";

const randomColor = () => {
  return `  rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}
      );`;
};

export const Button = styled.button`
  padding: 10px;
  width: 65px;
  background-color: ${() => randomColor()};
  text-align: center;
  margin-right: 20px;
  border-radius: 50%;
  display: inline-block;
`;

export const Div = styled.div`
  margin-bottom: 10px;
`;
