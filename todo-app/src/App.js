import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <Header title="ToDo List" />
      <TodoList />
    </div>
  );
}

export default App;
