import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import { TodoList } from './TodoList'
import * as uuid from 'uuid' //To get intellisence for uuid
//import {v4 as uuidv4} from 'uuid'; //To get performance with uuid 

const LOCAL_STORAGE_KEY = 'react-js.todos';
let counter = 0;

function App() {
  const [todos, setTodos] = useState([]);
  const refTodoText = useRef();

  console.log('App.jsx renderer no:' + counter);
  counter++;

  //Load todos from localStorage. Run once when when app starts
  useEffect( () => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      //console.log("load todos ");
      //console.log(storedTodos);
      setTodos(storedTodos);
    }
  }, []);

  //Save todos to localStorage
  useEffect( () => {
    //console.log("save todos");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleToogleCheckbox(id) {
    //console.log(id);
    const newTodos = [...todos];
    const todo = newTodos.find(t => t.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const text = refTodoText.current.value;
    if (text === '') return;
    const newTodos = [...todos, { id: uuid.v4(), text: text, completed: false }];
    setTodos(newTodos);
    refTodoText.current.value = '';
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} handleToogleCheckbox={handleToogleCheckbox}/>
      <input ref={refTodoText} type="text" />
      <button onClick={handleAddTodo} >Add todo</button>
      <button onClick={handleClearTodos}>Clear complete</button>
      <div>{todos.filter(todo => !todo.completed).length} todos left</div>
    </>
  )
}

export default App
