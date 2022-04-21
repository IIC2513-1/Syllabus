import React, {useState} from "react";

const TodoList = (props) => {
  const [todos, setTodos] = useState([
    {
      content: 'Pasear al perro',
      completed: false,
    },
    {
      content: 'Pasear al gato',
      completed: true,
    },
    {
      content: 'Pasear al caballo',
      completed: true,
    },
  ]);
  return (
    <div>
      {todos.map((todo) => {
        return (
          !todo.completed ? <h1>{todo.content}</h1> : null
          )
        })}
    </div>
  )
}

export default TodoList;