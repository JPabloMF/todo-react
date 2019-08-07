import React from "react";
import styled from "styled-components";

const StyledRadius = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: ${({ checked }) => (checked ? "#26de81" : "transparent")};
`;

const Radius = ({ checked }) => (
  <StyledRadius checked={checked}>
    {checked && <span>&#x2714;</span>}
  </StyledRadius>
);

export default Radius;
