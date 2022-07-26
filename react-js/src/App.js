import React, { useState, useRef } from 'react'
import './App.css'
import { TodoList } from './TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const refTodoText = useRef();

  function handleAddTodo(e) {
    const text = refTodoText.current.value;
    if (text === '') return;

    const newTodos = [...todos, { id: 3, text: text, completed: false }];
    setTodos(newTodos);
    //setTodos(prevTodos => [...prevTodos, { id: 3, text: refTodoText, completed: false }]);
      
      //[...todos, { id: 3, text: refTodoText, completed: false }]);
    console.log(refTodoText.current.value);
    refTodoText.current.value = '';
  }

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={refTodoText} type="text" />
      <button onClick={handleAddTodo} >Add todo</button>
      <button>Clear complete</button>
      <div>0 todos left</div>
    </>
  )
}

export default App
