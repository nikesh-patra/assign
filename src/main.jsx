import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import store from './redux/store.js'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';
import { HashRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </Provider>
);