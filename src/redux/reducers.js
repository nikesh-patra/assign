import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
  LOGIN,
  LOGOUT,
  SIGNUP,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "./actionTypes";

export const initialState = {
  todos: [],  // Ensure todos is initialized as an empty array
  filter: "ALL",
  searchTerm: "",
  user: { isAuthenticated: false, username: "", password: "" },
};

// Update the reducer to handle user authentication and persistence
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: Array.isArray(state.todos) ? [
          ...state.todos,
          {
            text: action.payload.text,
            completed: false,
            priority: action.payload.priority || "Low",
            location: action.payload.location || "", // Include location in the new todo
          },
        ] : [],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: Array.isArray(state.todos) ? state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ) : [],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: Array.isArray(state.todos) ? state.todos.filter((_, index) => index !== action.payload.id) : [],
      };
    case MARK_COMPLETED:
      return {
        ...state,
        todos: Array.isArray(state.todos) ? state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ) : [],
      };
    case MARK_INCOMPLETE:
      return {
        ...state,
        todos: Array.isArray(state.todos) ? state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ) : [],
      };
    case FILTER_TODOS:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    case MARK_ALL_COMPLETED:
      return {
        ...state,
        todos: Array.isArray(state.todos) ? state.todos.map((todo) => ({ ...todo, completed: true })) : [],
      };
    case LOGIN:
      return { ...state, user: { ...state.user, isAuthenticated: true } };
    case LOGOUT:
      return {
        ...state,
        user: { isAuthenticated: false, username: "", password: "" },
      };
    case SIGNUP:
      return {
        ...state,
        user: { ...state.user, ...action.payload, isAuthenticated: true },
      };
    default:
      return state;
  }
};


export default todoReducer; 