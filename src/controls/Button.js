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


export const GroupButton = styled.button.attrs((props) => ({
  text: props.text,
  type: props.type,
  onClick: props.onClick,
  disabled: props.disabled
}))`
  background: ${(props) => props.background || "#fff"};
  color: ${(props) => props.color || "#376e6f"};
  width: ${(props) => props.width || "auto"};
 border: none;
  // height: 50px;
  align-items: center;
  font-family: serif;
  letter-spacing: 2px;
  margin: 10;
  justify-content: space-between;
  &:hover {
   background: #dcdde1;
   
    border-radius: 12px;
  };
  &:active {
    background: #2f4454;
    color: #fff;
    border-radius: 12px;
  }
  }
`;
