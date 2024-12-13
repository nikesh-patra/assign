import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/action";
import {
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  // State to store weather data and error messages
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch weather data based on the city (location)
  const fetchWeather = async (city) => {
    const apiKey = "0e27eb7ea054eda5d0ce30a0b5fb005e"; // Use your own API key here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data); // Set weather data in state
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Failed to fetch weather data. Please try again later.");
      setWeatherData(null); // Reset weather data on error
    }
  };

  // UseEffect to trigger weather data fetching when the location changes
  useEffect(() => {
    if (todo.location) {
      fetchWeather(todo.location); // Fetch weather for the task's location
    }
  }, [todo.location]); // Trigger the effect when location changes

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        {/* Replace numbering with checkbox */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(index))}
          className="mr-4"
        />
        <span
          className={`mr-4 ${todo.completed ? "line-through text-gray-500" : ""}`}
        >
          {todo.text}
        </span>
        <span
          className={`text-xs font-bold px-2 py-1 rounded ${
            todo.priority === "High"
              ? "bg-red-500 text-white"
              : todo.priority === "Medium"
              ? "bg-yellow-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {todo.priority}
        </span>
      </div>

      {/* Weather Information */}
      {todo.location && weatherData && (
        <div className="weather-info mt-2">
          <h4 className="font-bold text-sm">Weather at {todo.location}:</h4>
          <p className="text-xs">Temperature: {weatherData.main.temp}°C</p>
          <p className="text-xs">
            Conditions: {weatherData.weather[0].description}
          </p>
          <p className="text-xs">Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}

      {/* Display error message if API request fails */}
      {todo.location && error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}

      <div className="space-x-3 ml-8">
        <button
          className="mr-2 text-sm bg-slate-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-amber-400 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;