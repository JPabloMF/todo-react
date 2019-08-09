import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {connect} from 'react-redux';

import Card from "../../../components/card";

import { titles } from "./config";

import { fetchTodoRequest } from "../../../store/todo/actions";
import store from '../../../store';

const StyledToDoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ToDo = ({ todos }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    store.dispatch(fetchTodoRequest());
  }, []);

  useEffect(() => {
    todos && todos.data && setTodo(todos.data);
  }, [todos]);

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

const mapStateToProps = state => ({ todos: state.todo.result });

export default connect(mapStateToProps)(ToDo);
