import React, {useState} from "react";

const TodoList = (props) => {
  const [newTodo, setNewTodo] = useState(null);
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
      content: 'Hacer la tarea de cálculo 2',
      completed: false,
    },
  ]);

  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }

  const handleClick = () => {
    const todoToAdd = { content: newTodo, completed: false };
    
    setTodos([...todos, todoToAdd]);
  }

  // console.log('variable de estado', newTodo)

  return (
    <div>
      {todos.map((todo) => {
        return (
          !todo.completed ? <h1 key={todo.content}>{todo.content}</h1> : null
          )
        })}
      <input name="newTodo" type="text" onChange={handleChange} />
      <button onClick={handleClick}>Agregar</button>
    </div>
  )
}

export default TodoList;