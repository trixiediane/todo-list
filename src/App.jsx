import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // Define a state variable 'todos' to keep track of the list of todos.
  // The 'setTodos' function is used to update the 'todos' state.
  const [todos, setTodos] = useState([]);

  const [todoValue, setTodoValue] = useState('')
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({
      todos: newList
    }))
  }

  // This function is responsible for adding a new todo to the list.
  // It takes 'newTodo' (the new task) as an argument.
  function handleAddTodos(newTodo) {
    // Create a new array that includes the current todos and the new todo.
    const newTodoList = [...todos, newTodo]; // Using the spread operator to copy all current todos

    persistData(newTodoList)
    // Update the 'todos' state with the new list.
    setTodos(newTodoList);
  }


  function handleDeleteTodo(index) {
    // Create a new array by filtering out the todo at the specified index
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })

    persistData(newTodoList)
    // Update the state with the new array of todos
    setTodos(newTodoList)
  }


  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)

    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      {/* Render the TodoInput component, passing the handleAddTodos function as a prop */}
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />

      {/* Render the TodoList component, passing the current list of todos as a prop */}
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  );
}

export default App;
