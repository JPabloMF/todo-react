import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Card from "../../../components/card";

import { titles } from "./config";

const StyledToDoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ToDo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/todos", {
      signal: abortController.signal
    })
      .then(response => response.json())
      .then(json => setTodo(json))
      .catch(err => {
        if (err.name === "AbortError") return;
        throw err;
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <StyledToDoContainer>
      {todo.length === 0 && <span>Loading...</span>}
      {todo.map(({ userId, id, title, completed }) => (
        <Card
          key={id}
          title={titles[userId]}
          description={title}
          checked={completed}
        />
      ))}
    </StyledToDoContainer>
  );
};

export default ToDo;
