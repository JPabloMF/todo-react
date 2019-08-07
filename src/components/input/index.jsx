import React from "react";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: white;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 3px;
  border: 1px solid ${({ error }) => (error ? "red" : " white")};
  background-color: #4b4b4b;
  padding: 10px;
`;

const StyledSpan = styled.span`
  color: red;
`;

const Input = ({ type, onChange, name, value, text, error, width }) => {
  return (
    <StyledInputContainer width={width}>
      <StyledLabel htmlFor={name}>{text}</StyledLabel>
      <StyledInput
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        error={error}
      />
      {error && <StyledSpan>{error}</StyledSpan>}
    </StyledInputContainer>
  );
};

export default Input;
