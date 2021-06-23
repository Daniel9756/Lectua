import styled from "styled-components";

export const CustomInput = styled.input.attrs((props) => ({
  type: props.type,
  placeholder: props.placeholder,
  onChange: props.onChange,
  values: props.value,
  name: props.name,
  id: props.id
}))`
  padding: 6px;
  border: 2px solid palevioletred;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  outline: none;
  margin: 2px;
  &:focus {
    color: black;
  }
`;


export const CustomTextarea = styled.textarea.attrs((props) => ({
  type: props.type,
  placeholder: props.placeholder,
  onChange: props.onChange,
  values: props.value,
  name: props.name,
 
}))`
  padding: 6px;
  border: 2px solid palevioletred;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  outline: none;
  margin: 2px;
  &:focus {
    color: black;
  }
`;

export const CustomDateInput = styled.input.attrs((props) => ({
  text: props.text,
  type: props.type,
  placeholder: props.placeholder,
  onChange: props.onChange,
  values: props.value,
  name: props.name

}))`
  padding: 6px;
  border: 2px solid palevioletred;
  width: 100%; 
  height: 50px;
  border-radius: 6px;
  outline: none; 
  &:focus {
    color: black;
  }
`;
export const LabelText = styled.h6.attrs((props) => ({
  text: props.text,
  for: props.for
}))`
  color: #2f4454;
  margin: 2px;
  margin-bottom: 2px;
  font-family: serif    
  `;

  export const Title = styled.h4.attrs((props) => ({
    text: props.text,
  }))`
    color: #2f4454;
    margin: 5px;

    margin-bottom: 2px;
    font-family: fantasy;
    letter-spacing: 2px;
   
    text-transform: uppercase
    `;

    export const Subtitle = styled.h5.attrs((props) => ({
      text: props.text,
    }))`
      color: #2f4454;
      margin: 3px;  
      margin-bottom: 2px;
      font-family: fantasy;
      letter-spacing: 1px;
     
      text-transform: uppercase
      `;
  
    export const Info = styled.h5.attrs((props) => ({
      text: props.text,
    }))`
      color: #1c3334;
      margin: 5px;
  
      margin-bottom: 2px;
      font-family: serif;
      letter-spacing: 2px;
     
      text-transform: uppercase
      `;