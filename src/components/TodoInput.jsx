import React from 'react';
import { useState } from "react";

// This component handles the input for new todos (tasks).
export default function TodoInput(props) {
    // Destructure the handleAddTodos function from the props.
    // This function is passed from the parent component (App) and will be used to add new todos.
    const { handleAddTodos } = props;

    // Declare a state variable 'todoValue' to store the current value of the input field.
    // 'setTodoValue' is the function used to update 'todoValue'.
    const [todoValue, setTodoValue] = useState('');

    return (
        <header>
            {/* Input field for typing new todos. The 'value' of the input is controlled by the 'todoValue' state. */}
            <input
                value={todoValue}
                onChange={(e) => {
                    // Whenever the user types in the input field, update the 'todoValue' state with the current input.
                    setTodoValue(e.target.value);
                }}
                placeholder="Enter todo..."
            />

            {/* Button to add the new todo. When clicked, it calls 'handleAddTodos' with the current input value. */}
            <button onClick={() => {
                handleAddTodos(todoValue); // Pass the current 'todoValue' to the parent function
                setTodoValue(''); // Clear the input field after adding the todo
            }}>
                Add
            </button>
        </header>
    );
}
