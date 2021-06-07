
export const CustomCheckbox = styled.input.attrs((props) => ({
    text: props.text,
    type: checkbox,
    placeholder: props.placeholder,
    onChange: props.onChange,
    values: props.value,
    name: props.name
  
  }))`
    padding: 6px;
    border: 2px solid palevioletred;
    width: 30px; 
    height: 30px;
    border-radius: 4px;
    outline: none; 
    &:focus {
      color: black;
    }
  `;