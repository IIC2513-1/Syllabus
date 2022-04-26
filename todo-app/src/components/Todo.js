import React from "react";
import styled from 'styled-components';

const Todo = (props) => {
  return (
    <Div>
      <TodoContent>{props.content}</TodoContent>
      <Button onClick={() => props.delete(props.id)}>Borrar</Button>
    </Div>
  )
};

const Button = styled.button`
  border-radius: 4px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoContent = styled.h1`
  margin-right: 10px;
`;


export default Todo;