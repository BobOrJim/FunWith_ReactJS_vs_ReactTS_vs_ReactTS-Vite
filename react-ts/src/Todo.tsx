import React from "react";
import "./App.css";

/*
export default function Todo({ todo, handleToogleCheckbox }) {
  //If im not using this function i get stuck in a render loop
  function handleToogleCheckboxClick() {
    handleToogleCheckbox(todo.id);
  }

  return (
    <label className="block">
      <input className="inline-block" type="checkbox" onChange={handleToogleCheckboxClick} checked={todo.completed} />
      <div className="inline-block">{todo.text}</div>
    </label>
  );
}

*/

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

type handleToogleCheckboxType = {
  callback: (id: string) => void;
};

interface Props {
  todo: TodoType;
  handleToogleCheckbox: handleToogleCheckboxType;
}

export const Todo: React.FC<Props> = (props: Props): JSX.Element => {
  //If im not using this function i get stuck in a render loop
  function handleToogleCheckboxClick() {
    props.handleToogleCheckbox.callback(props.todo.id);
  }

  return (
    <label className="block">
      <input className="inline-block" type="checkbox" onChange={handleToogleCheckboxClick} checked={props.todo.completed} />
      <div className="inline-block">{props.todo.text}</div>
    </label>
  );
};
