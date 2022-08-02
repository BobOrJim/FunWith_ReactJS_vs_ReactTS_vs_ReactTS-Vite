import React from "react";

/*
import Todo from "./Todo";

export function TodoList({ todos, handleToogleCheckbox }) {
  return todos.map((todo) => <Todo key={todo.id} todo={todo} handleToogleCheckbox={handleToogleCheckbox} />); //react use key to only render the changed element
}
*/

import { Todo } from "./Todo";

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

type handleToogleCheckboxType = {
  callback: (id: string) => void;
};

interface Props {
  todos: TodoType[];
  handleToogleCheckbox: handleToogleCheckboxType;
}

export const TodoList: React.FC<Props> = (props: Props): JSX.Element => {
  //console.log("TodoList.jsx");

  //return <div> haloj from Todo</div>;
  const test = props.todos.map((todo) => <Todo key={todo.id} todo={todo} handleToogleCheckbox={props.handleToogleCheckbox} />);
  const test2 = <>test</>;

  return <>{test}</>;
};
