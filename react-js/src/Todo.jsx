import React from 'react'
import './App.css'

export default function Todo({todo, handleToogleCheckbox}) {

  //If im not using this function i get stuck in a render loop
  function handleToogleCheckboxClick() {
    handleToogleCheckbox(todo.id);
  }

  return (
    <label className='block'>
      <input className='inline-block' type="checkbox" onChange={handleToogleCheckboxClick} checked={todo.completed} />
      <div className='inline-block'>{todo.text}</div>
    </label>
  )
}
