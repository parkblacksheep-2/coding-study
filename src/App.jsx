// src/App.jsx
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import '../src/App.css';

function App() {
  

  const {todos, setTodos} = useState([]);

  const addTodo = (todo) => {
    const newTode ={ 
      id: Date.now(),
      text,
      completed: false,
    };
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm onSubmit={addTodo}/>
        <TodoList todos={todos}/>
      </div>
    )
  } 
}
export default App;
