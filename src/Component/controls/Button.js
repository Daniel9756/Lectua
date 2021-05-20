import styled from "styled-components";

export const CustomButton = styled.button.attrs((props) => ({
  text: props.text,
  type: props.type,
  onClick: props.onClick,
  disabled: props.disabled
}))`
  background: ${(props) => props.background || "#2f4454"};
  color: ${(props) => props.color || "white"};
  width: ${(props) => props.width || "100%"};
 
  height: 50px;
  align-items: center;
  font-family: serif;
  letter-spacing: 2px;
  text-transform: uppercase;
   &:hover {
    background: #1c3249;
  };
  &:active {
    background: #2f4454;
  }
`;
