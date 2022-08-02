import React from "react";

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
  const test = props.todos.map((todo) => <Todo key={todo.id} todo={todo} handleToogleCheckbox={props.handleToogleCheckbox} />);
  return <>{test}</>;
};
