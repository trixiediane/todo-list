import React from 'react'

export default function TodoCard(props) {
    const {children} = props
    return (
        <li className='todoItem'>
            <div className='actionsContainer'>
                {children}
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-regular fa-trash-can"></i>
            </div>
        </li>
    )
}
