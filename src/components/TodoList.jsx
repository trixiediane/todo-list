import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const { todos } = props
  return (
    /* Mapping out content - a parent element has to have a unique key */
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
