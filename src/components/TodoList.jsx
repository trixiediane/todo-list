import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  // Destructure 'todos' from the props object
  const { todos } = props
  return (
    /* Mapping out content - a parent element has to have a unique key */
    <ul className='main'>
      {/* Iterate over the 'todos' array, returning a TodoCard for each todo */}
      {todos.map((todo, todoIndex) => {
        return (
          // Render a TodoCard component for each todo item
          // The 'key' prop is used to help React identify which items have changed, are added, or are removed
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            {/* Render the todo text inside a paragraph element */}
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
