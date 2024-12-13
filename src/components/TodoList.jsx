import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodosRequest } from "../redux/action"; // Import the action to fetch todos

const TodoList = () => {
  const dispatch = useDispatch();

  // Get filtered todos based on state
  const { todos, filter, searchTerm } = useSelector((state) => ({
    todos: state.todos,
    filter: state.filter,
    searchTerm: state.searchTerm.toLowerCase(),
  }));

  // Apply filtering based on the filter and search term
  const filteredTodos = useSelector((state) => {
    const todos = state.todos || [];  // Ensure `state.todos` exists, or default to an empty array
    const filter = state.filter || "ALL";  // Default filter to "ALL"
    const searchTerm = state.searchTerm.toLowerCase() || "";  // Default search term to empty string
  
    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";
  
      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);
  
      return matchesFilter && matchesSearch;
    });
  });

  console.log("Filtered Todos:", filteredTodos); // Debug log to verify filtered todos

  // Dispatch the action to fetch todos when the component mounts
  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  return (
    <div className="w-full h-full p-4">
      <ul className="w-full h-full">
        {/* Show a note for the list */}
        <li className="my-0 font-extrabold text-emerald-400  italic text-center border-x-8 border-y-4">Noted to be completed means TODO</li>

        {/* Render the list of filtered todos */}
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo} // Pass the todo item
            index={index} // Pass the index
            priority={todo.priority} // Pass the priority (if used in TodoItem)
          />
        ))}

        {/* Display a message if no todos match the filter or search */}
        {filteredTodos.length === 0 && (
          <li className="text-gray-500 text-center mt-4">
            No todos match your criteria.
          </li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
