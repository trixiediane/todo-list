import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // Define a state variable 'todos' to keep track of the list of todos.
  // The initial value is an array of three items (strings).
  // The 'setTodos' function is used to update the 'todos' state.
  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruits and veggies',
    'Pick up the kids from school'
  ]);

  // This function is responsible for adding a new todo to the list.
  // It takes 'newTodo' (the new task) as an argument.
  function handleAddTodos(newTodo) {
    // Create a new array that includes the current todos and the new todo.
    const newTodoList = [...todos, newTodo]; // Using the spread operator to copy all current todos
    // Update the 'todos' state with the new list.
    setTodos(newTodoList);
  }

  
  function handleDeleteTodo(index) {
    // Create a new array by filtering out the todo at the specified index
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })

    // Update the state with the new array of todos
    setTodos(newTodoList)
  }


  function handleEditTodo(index) {

  }

  return (
    <>
      {/* Render the TodoInput component, passing the handleAddTodos function as a prop */}
      <TodoInput handleAddTodos={handleAddTodos} />

      {/* Render the TodoList component, passing the current list of todos as a prop */}
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  );
}

export default App;
