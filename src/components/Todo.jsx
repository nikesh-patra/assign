import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButton";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/action";

const Todo = ({ isDarkMode }) => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [priority, setPriority] = useState("Medium"); // Default priority
  const [location, setLocation] = useState(""); // State to store the location
  const [isButtonClicked, setIsButtonClicked] = useState(false); // Track button click state

  const handleAddTodo = (text, priority, location) => {
    dispatch(addTodo(text, priority, location)); // Pass location to the action
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim(), priority, location);
      setNewTodoText("");
      setPriority("Medium"); // Reset priority to default after adding a task
      setLocation(""); // Reset location after adding the task
      setIsButtonClicked(false); // Reset button state
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
   <div
      className={`h-screen flex flex-col justify-between overflow-auto ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className={`main-content ${isDarkMode ? 'dark-mode' : ''}`}>
        {/* Add Task Section */}
      
        {/* Main Content Section (Add Task and Search Section) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 mb-6">
          <div className="flex-grow">
            <input
              id="addTodoInput"
              className={`w-full sm:w-full p-4 border-b-2 font-black border-gray-300 focus:outline-none focus:border-blue-500 text-lg ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              } ${isButtonClicked ? "bg-blue-500 text-white" : ""}`}
              type="text"
              placeholder="Add A Task"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              style={{ minHeight: "50px" }}
            />
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {/* Priority Selector */}
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={`p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg font-bold ${
                priority === "High"
                  ? "text-red-500"
                  : priority === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              } ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            {/* Location Input */}
            <input
              className={`p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
              type="text"
              placeholder="Location (optional)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            {/* Add Button */}
            <button
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              onClick={handleAddTodoClick}
            >
              <BsPlus size={20} />
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <FilterButtons />
          <div className="flex items-center w-full sm:w-auto">
            <input
              className={`flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
              type="text"
              placeholder="Search Todos"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
              <BsSearch size={20} />
            </button>
          </div>
        </div>

        {/* Todo List */}
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;