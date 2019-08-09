import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "../../screens/dashboard/home";
import ToDo from "../../screens/dashboard/toDo";

const StyledRouter = styled.div`
  margin-left: 250px;
  margin-top: 70px;
  width: calc(100% - 250px);
`;

const ContentWrapper = () => {
  return (
    <StyledRouter>
      <Switch>
        <Route exact path="/" component={ToDo} />
        <Route path="/dashboard/home" component={Home} />
        <Route path="/dashboard/todo" component={ToDo} />
      </Switch>
    </StyledRouter>
  );
};

export default ContentWrapper;
