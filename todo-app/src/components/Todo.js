import React from "react";
import styled from 'styled-components';

const Todo = (props) => {
  return (
    <Div>
      <TodoContent>{props.content}</TodoContent>
      <button>completar</button>
    </Div>
  )
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoContent = styled.h1`
  margin-right: 10px;
`;


export default Todo;