import styled from "styled-components";

export const CustomCheckbox = styled.input.attrs((props) => ({
  text: props.text,
  type: props.type,
  placeholder: props.placeholder,
  onChange: props.onChange,
  values: props.value,
  name: props.name,
}))`
  color:#2f4454
    padding: 6px;
    border: 3px solid palevioletred;
    width: 30px; 
    height: 30px;
    border-radius: 4px;
    outline: none; 
    &:focus {
      color: black;
    }
    &:active {
      background: #2f4454;
    }
  `;
