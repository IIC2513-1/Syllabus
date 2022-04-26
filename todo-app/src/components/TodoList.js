import React, { useEffect, useState} from "react";
import Todo from './Todo';

const TodoList = (props) => {
  const [deletedCount, setDeletedCount] = useState(0);
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'Pasear al perro',
      completed: false,
    },
    {
      id: 2,
      content: 'Pasear al gato',
      completed: true,
    },
    {
      id: 3,
      content: 'Hacer la tarea de cálculo 2',
      completed: false,
    },
  ]);

  // CADA VEZ QUE CAMBIE MIS LISTA DE TAREAS, QUIERO QUE
  // EL INPUT SE VACIE
  useEffect(() => {
    setNewTodo('');
  }, [todos]);

  // const completeTodo = (id) => {
  //   console.log('completar Todo con id:', id);
    

  // };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newTodos);
    setDeletedCount(deletedCount + 1);
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value)
  };

  const handleClick = () => {
    const idsArray = todos.map((todo) => todo.id);
    const newId = Math.max(...idsArray);
    const todoToAdd = { id: newId + 1, content: newTodo, completed: false };
    setTodos(todos.concat(todoToAdd));
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          !todo.completed ? (
            <Todo id={todo.id} key={todo.id} content={todo.content} delete={deleteTodo} />
          ) : null
          )
        })}
      <input name="newTodo" type="text" onChange={handleChange} value={newTodo} />
      <button onClick={handleClick}>Agregar</button>
      <p>Has borrado {deletedCount} tareas</p>
    </div>
  )
}

export default TodoList;