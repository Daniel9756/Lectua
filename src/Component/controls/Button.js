import styled from "styled-components";

export const CustomButton = styled.button.attrs((props) => ({
  text: props.text,
  type: props.type,
  onClick: props.onClick
}))`
  background: ${(props) => props.background || "#1C3334"};
  color: ${(props) => props.color || "palevioletred"};
  width: ${(props) => props.width || "100%"};
  font-size: 30px;
  height: 50px;
  align-items: center;
  font-family: serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 40px;
  &:hover {
    background: #1c3249;
  };
  &:active {
    background: #2f4454;
  }
`;
