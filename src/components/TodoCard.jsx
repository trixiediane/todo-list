import React from 'react';

export default function TodoCard(props) {
    // Destructure the necessary props: children (the content to display), handleDeleteTodo (function to delete the todo), and index (position of the todo in the list).
    const { children, handleDeleteTodo, index } = props;

    return (
        <li className='todoItem'>
            <div className='actionsContainer'>
                {children} {/* Display the content of the todo, passed as children from the parent component */}

                <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <button onClick={() => {
                    handleDeleteTodo(index);
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    );
}
