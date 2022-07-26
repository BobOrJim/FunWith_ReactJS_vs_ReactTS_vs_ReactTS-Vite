import React from 'react'
import Todo from './Todo'

export function TodoList( {todos} ) {
  return (
    todos.map(todo => <Todo key={todo.id} todo={todo} />) //react use key to only render the changed element
  )
}
