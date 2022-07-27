import React from 'react'
import Todo from './Todo'

export function TodoList( {todos, handleToogleCheckbox} ) {
  return (
    todos.map(todo => <Todo key={todo.id} todo={todo} handleToogleCheckbox={handleToogleCheckbox}/>) //react use key to only render the changed element
  )
}
