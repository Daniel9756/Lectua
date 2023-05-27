import styled from "styled-components";

export const CustomCheckbox = styled.input.attrs((props) => ({
  text: props.text || "",
  type: props.type,
  onChange: props.onChange,
  checked: props.checked,
  name: props.name || "",
}))`
  color: #DA7B93
    padding: 6px;
    border: 3px solid #DA7B93;
    width: 30px; 
    height: 30px;
    border-radius: 4px;
    outline: none; 
    &:focus {
      color: black;
    }
    &:active {
      background: #DA7B93;
    }
  `;
