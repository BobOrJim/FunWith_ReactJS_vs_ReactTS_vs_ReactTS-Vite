import React from 'react'
import './App.css'

export default function Todo({todo}) {

  function test() {
    console.log('test temporary warning suppression');
  }
  return (
    <label className='block'>
      <input className='inline-block' type="checkbox" onChange={test} checked={todo.completed} />
      <div className='inline-block'>{todo.text}</div>
    </label>
  )
}
