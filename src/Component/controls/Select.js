import styled from "styled-components";

export const DropdownWrapper = styled.form`
  padding: 6px;
  border: 2px solid palevioletred;
  width: 100%;
  border-radius: 6px;
  outline: none;
  margin: 2px;
  &:focus {
    color: black;
  }
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;
export const StyledSelect = styled.select`
  max-width: 100%;
  height: 100%;
  margin: 6px;
  border: none;
  outline: none;
  background-color: "#DA7B93";
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "#fff" : "#1C3334")};
  background: ${(props) => (props.selected ? "#1C3334" : "#fff")};
  opacity: 0.8;
`;

export function CustomSelect(props) {
  return (
    <DropdownWrapper>
      <StyledSelect id="services" name={props.name} value={props.value} onChange={props.onChange}>
        {props.options.map((data) => (
          <StyledOption key={data.value} value={data.value}>
            {data.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </DropdownWrapper>
  );
}
