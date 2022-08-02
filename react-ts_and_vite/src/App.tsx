import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { TodoList } from "./TodoList";

import * as uuid from "uuid"; //To get intellisence for uuid
//import {v4 as uuidv4} from 'uuid'; //To get performance with uuid

const LOCAL_STORAGE_KEY: string = "react-js.todos";
let rendererCounter: number = 0;

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

type handleToogleCheckboxType = {
  callback: (id: string) => void;
};

export const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const refTodoText = useRef<HTMLInputElement>(null);

  console.log("App.jsx renderer no:" + rendererCounter);
  rendererCounter++;

  useEffect(() => {
    const storedTodos: TodoType[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
    if (storedTodos) setTodos(storedTodos);
  }, []); //[] means that this effect will only run once, when the component is mounted

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleToogleCheckbox: handleToogleCheckboxType = {
    callback: (id: string): void => {
      const newTodos: TodoType[] = [...todos];
      const todoToUpdate: TodoType | undefined = newTodos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.completed = !todoToUpdate.completed;
        setTodos(newTodos);
      }
    },
  };

  function handleAddTodo(): void {
    if (refTodoText.current && refTodoText.current.value.trim().length > 0) {
      const newTodos = [...todos, { id: uuid.v4(), text: refTodoText.current.value, completed: false }];
      setTodos(newTodos);
      refTodoText.current.value = "";
    }
  }

  function handleClearTodos(): void {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} handleToogleCheckbox={handleToogleCheckbox} />
      <input ref={refTodoText} type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleClearTodos}>Clear complete</button>
      <div>{todos.filter((todo) => !todo.completed).length} todos left</div>
    </>
  );
};
