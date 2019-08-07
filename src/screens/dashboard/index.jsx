import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

import ContentWrapper from '../../components/contentWrapper';

const StyledMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  bottom: 0;
  width: 250px;
  height: calc(100vh - 60px);
  background-color: #3d3d3d;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  width: 100%;
  padding: 20px;
  &:hover {
    background-color: #515151;
  }
`;

const StyledHeader = styled.div`
  position: fixed;
  left: 0; 
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #3d3d3d;
`;

const StyledLogo = styled.div`
  width: 250px;
  height: 60px;
  background-color: #4b7bec;
`;

const Dashboard = () => {
  return (
    <div>
      <StyledHeader>
        <StyledLogo />
      </StyledHeader>
      <StyledMenu>
        <StyledLink to="/dashboard/home">Home</StyledLink>
        <StyledLink to="/dashboard/todo">To-Do</StyledLink>
      </StyledMenu>
      <ContentWrapper />
    </div>
  );
};

export default Dashboard;
