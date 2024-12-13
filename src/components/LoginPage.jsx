import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Validate login
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      dispatch(login());
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.splitshire.com/wp-content/uploads/2014/11/SplitShire-03692-1800x1200-uai-1800x1012.jpg')`,
      }}
    >
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don&#39;t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
