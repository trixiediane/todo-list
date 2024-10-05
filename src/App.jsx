import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // Define a state variable 'todos' to keep track of the list of todos.
  // The 'setTodos' function is used to update the 'todos' state.
  const [todos, setTodos] = useState([]);

  // Define a state variable 'todoValue' to hold the current input value for a new todo.
  const [todoValue, setTodoValue] = useState('')

  // Function to persist the updated todos list in localStorage.
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

    // Persist the updated todos list in localStorage.
    persistData(newTodoList)
    // Update the 'todos' state with the new list.
    setTodos(newTodoList);
  }

  // This function deletes a todo based on its index.
  function handleDeleteTodo(index) {
    // Create a new array by filtering out the todo at the specified index
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index; // Keep todos that are not at the specified index
    });

    // Persist the updated todos list in localStorage.
    persistData(newTodoList)
    // Update the state with the new array of todos
    setTodos(newTodoList)
  }

  // This function is responsible for editing a todo based on its index.
  function handleEditTodo(index) {
    // Retrieve the current value of the todo to be edited.
    const valueToBeEdited = todos[index];
    // Set the 'todoValue' state to the value being edited.
    setTodoValue(valueToBeEdited);

    // Delete the todo that is being edited from the list.
    handleDeleteTodo(index);
  }

  // This useEffect hook runs once when the component mounts.
  useEffect(() => {
    // Check if localStorage is available.
    if (!localStorage) {
      return; // Exit if localStorage is not available.
    }

    // Retrieve the todos from localStorage.
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return; // Exit if there are no todos in localStorage.
    }

    // Parse the retrieved todos and update the state.
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

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
