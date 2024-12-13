import { useSelector, useDispatch } from "react-redux";
import Todo from "./components/Todo";
import { login, logout } from "./redux/action";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar"; // Import the Sidebar component

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // For sign-up email
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  // Check authentication status on initial load
  useEffect(() => {
    const userAuthStatus = localStorage.getItem("isAuthenticated");
    if (userAuthStatus === "true" && !isAuthenticated) {
      // If user is authenticated in localStorage, dispatch login action
      dispatch(login());
    }
  }, [dispatch, isAuthenticated]);

  // Handle login form visibility
  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  };

  // Handle sign-up form visibility
  const handleSignUpClick = () => {
    setShowSignUpForm(true);
    setShowLoginForm(false);
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if entered credentials match saved credentials
    if (username === storedUsername && password === storedPassword) {
      dispatch(login());
      localStorage.setItem("isAuthenticated", "true"); // Save login status to localStorage
      setShowLoginForm(false);
    } else {
      alert("Invalid credentials");
    }
  };

  // Handle sign-up form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (username && email && password) {
      // Save user data to localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Sign Up successful! You can now log in.");
      setShowSignUpForm(false);
      setShowLoginForm(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Handle logout and reset authentication state
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("isAuthenticated"); // Clear login status from localStorage
    setShowLoginForm(true); // Reset to show login form
    setUsername("");
    setPassword("");
    setEmail("");
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className="App flex overflow-hidden w-full h-full bg-black"
      style={{
        backgroundImage: 'url("")', // Add the path to your background image here
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`transition-all ml-0 ${isSidebarOpen ? "ml-64" : "ml-0"} flex-1`}
      >
        <button
          className="fixed top-0 left-4 p-2 text-white bg-black rounded"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        {/* Main content section */}
        <div className="w-full">
          {isAuthenticated ? (
            <div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded fixed top-0 right-8"
                onClick={handleLogout}
              >
                Logout
              </button>
              <Todo /> {/* Todo component visible only when authenticated */}
            </div>
          ) : showLoginForm ? (
            <div className="flex justify-center items-center h-screen">
              <form
                className="bg-black font-extrabold text-white p-4 border-x-2 rounded shadow-md"
                onSubmit={handleLogin}
              >
                <h2 className="mb-4 ml-20 text-lg">Login</h2>
                <div className="mb-4 text-green-500">
                  <label htmlFor="username" className="block mb-2">
                    Username:
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4 text-green-500">
                  <label htmlFor="password" className="block mb-2">
                    Password:
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Login
                </button>
                <div className="mt-4 text-center">
                  <span>Don't have an account? </span>
                  <button className="text-blue-500" onClick={handleSignUpClick}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          ) : showSignUpForm ? (
            <div className="flex justify-center items-center h-screen">
              <form
                className="bg-black text-white font-extrabold p-4 rounded  border-x-2 shadow-md"
                onSubmit={handleSignUp}
              >
                <h2 className="mb-4 ml-20 text-lg">Sign Up</h2>
                <div className="mb-4 text-green-500">
                  <label htmlFor="email" className="block mb-2">
                    Email:
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4 text-green-500">
                  <label htmlFor="username" className="block mb-2">
                    Username:
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4 text-green-500">
                  <label htmlFor="password" className="block mb-2">
                    Password:
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Sign Up
                </button>
                <div className="mt-4 text-center">
                  <span>Already have an account? </span>
                  <button className="text-blue-500" onClick={handleLoginClick}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
