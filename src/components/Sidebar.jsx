import React, { useState } from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation
import {
  FaTasks,
  FaCalendarDay,
  FaStar,
  FaRegCalendarAlt,
  FaUser,
  FaBell,
  FaCog,
  FaSearch,
  FaSun,
  FaMoon,
  FaReact,
} from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import Calendar from "react-calendar"; // Importing the react-calendar component
import "react-calendar/dist/Calendar.css"; // Import the calendar styles

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [isCalendarVisible, setIsCalendarVisible] = useState(false); // State to control calendar visibility
  const [date, setDate] = useState(new Date()); // State to store selected date
  const [isDarkMode, setIsDarkMode] = useState(false); // State for light/dark mode

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
    setIsCalendarVisible(false); // Reset the calendar visibility when closing the modal
  };

  const handleDateChange = (newDate) => {
    setDate(newDate); // Update the selected date
  };

  const handleCalendarClick = () => {
    setIsCalendarVisible((prevState) => !prevState); // Toggle calendar visibility
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState); // Toggle dark mode state
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {/* Header Section */}
      <header
        className={`fixed top-0 w-full h-10 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } shadow p-4 flex items-center justify-between`}
      >
        <h1 className="text-4xl font-bold absolute left-12"><FaReact/></h1>

        <div className="flex items-center space-x-4">
          <button className="p-2 absolute right-56 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
            <FaSearch />
          </button>

          <button
            className="p-2 absolute right-44 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            onClick={toggleModal}
          >
            <BsGrid />
          </button>

          <button
            className="p-2 absolute right-32 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun/> :<FaMoon/> }
          </button>
        </div>
      </header>

      {/* Sidebar Section */}
      <div
        className={`fixed top-10 left-0 h-full ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } w-64 shadow-lg  transition-all ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        {/* Sidebar Content */}
        <div className="p-3 border-b border-gray-200">
          <h2 className="text-lg font-bold">QuadB Tech</h2>
        </div>

        <div className="flex flex-col items-center p-3 border-b border-gray-200">
          <img
            src="https://t4.ftcdn.net/jpg/03/72/45/69/360_F_372456961_LEGVKLZAf0WaPFngtIR0G4EtB44R1EVC.jpg" // Replace with your image URL
            alt="Profile"
            className="rounded-full w-20 h-20 object-cover"
          />
          <h3 className="text-xs font-serif mt-2">Welcome user</h3>
        </div>

        <div className="p-3 mt-4">
          <ul className="space-y-2 font-bold text-sm">
            <li>
              <Link
                to="/task"
                className="flex items-center p-2 hover:bg-opacity-90 transition-all rounded text-xs"
              >
                <FaTasks className="mr-2" />
                All Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className="flex items-center p-2 hover:bg-opacity-90 transition-all rounded text-xs"
              >
                <FaCalendarDay className="mr-2" />
                Today
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className="flex items-center p-2 hover:bg-opacity-90 transition-all rounded text-xs"
              >
                <FaStar className="mr-2" />
                Important
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className="flex items-center p-2 hover:bg-opacity-90 transition-all rounded text-xs"
              >
                <FaRegCalendarAlt className="mr-2" />
                Planned
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className="flex items-center p-2 hover:bg-opacity-90 transition-all rounded text-xs"
              >
                <FaUser className="mr-2"/>
                Assigned to Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 mb-11">
          <div
            className="bg-transparent rounded-full"
            style={{
              width: "150px", // Explicitly set width
              height: "150px", // Explicitly set height
              border: "20px solid #14532D", // Set a thicker border
            }}
          ></div>
        </div>

        {/* Pending and Done List */}
        <div className="absolute bottom-4 left-48 transform -translate-x-1/2 mb-4">
          <ul className="flex space-x-4 font-bold absolute bottom-10 right-0 text-sm">
            <li className="flex items-center  text-yellow-500">
              <span className="mr-2">•</span> Pending
            </li>
            <li className="flex items-center text-green-500">
              <span className="mr-2  ">•</span> Done
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        
        <div className="fixed top-10 right-0 w-72 h-full bg-stone-900 flex justify-end items-start">
          
          <div className="bg-stone-900 w-72 p-5 shadow-lg">
            <h2 className="text-lg font-bold text-white mb-4">
              Choose an Option
            </h2>
            <ul className="space-y-3">
              <li>
                <button className="w-full p-2 text-blue-500 hover:bg-blue-100 rounded-lg flex items-center text-sm">
                  <span className="mr-3">🍎</span> Buy Groceries
                </button>
              </li>
              <li>
                <button className="w-full p-2 text-blue-500 hover:bg-blue-100 rounded-lg flex items-center text-sm">
                  <span className="mr-3">📝</span> Add Step
                </button>
              </li>
              <li>
                <button className="w-full p-2 text-blue-500 hover:bg-blue-100 rounded-lg flex items-center text-sm">
                  <span className="mr-3">⏰</span> Set Reminder
                </button>
              </li>
              <li>
                <button
                  className="w-full p-2 text-blue-500 hover:bg-blue-100 rounded-lg flex items-center text-sm"
                  onClick={handleCalendarClick}
                >
                  <span className="mr-3">📅</span> Add Due Date
                </button>
              </li>
              <li>
                <button className="w-full p-2 text-blue-500 hover:bg-blue-100 rounded-lg flex items-center text-sm">
                  <span className="mr-3">🔁</span> Repeat
                </button>
              </li>
            </ul>

            {isCalendarVisible && (
              <div className="mt-4 text-zinc-950">
                <Calendar onChange={handleDateChange} value={date} />
              </div>
            )}

            <button
              className="mt-4 w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
