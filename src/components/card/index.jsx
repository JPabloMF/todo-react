import React from "react";
import styled from "styled-components";

import Radius from "../radius";

const StyledCard = styled.div`
  width: 300px;
  padding: 20px;
  margin-top: 30px;
  border-radius: 3px;
  background-color: #3d3d3d;
`;

const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCardTitle = styled.p`
  color: white;
  font-weight: bold;
`;

const StyledCardDescription = styled.p`
  color: white;
`;

const Card = ({ title, description, checked }) => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardTitle>{title}</StyledCardTitle>
        <Radius checked={checked} />
      </StyledCardHeader>
      <StyledCardDescription>{description}</StyledCardDescription>
    </StyledCard>
  );
};

export default Card;
