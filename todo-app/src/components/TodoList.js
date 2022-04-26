import React, { useEffect, useState} from "react";
import Todo from './Todo';

const TodoList = (props) => {
  const [newTodo, setNewTodo] = useState('');
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

  // CADA VEZ QUE CAMBIE MIS LISTA DE TAREAS, QUIERO QUE
  // EL INPUT SE VACIE
  useEffect(() => {
    setNewTodo('');
  }, [todos])

  const handleChange = (event) => {
    console.log('handleChange');
    setNewTodo(event.target.value)
  }

  const handleClick = () => {
    const todoToAdd = { content: newTodo, completed: false };
    setTodos(todos.concat(todoToAdd));
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          !todo.completed ? (
            <Todo content={todo.content} />
          ) : null
          )
        })}
      <input name="newTodo" type="text" onChange={handleChange} value={newTodo} />
      <button onClick={handleClick}>Agregar</button>
    </div>
  )
}

export default TodoList;