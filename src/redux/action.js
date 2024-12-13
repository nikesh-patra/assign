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
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from './actionTypes';

// Modify addTodo action to include location
export const addTodo = (text, priority, location = null) => ({
  type: ADD_TODO,
  payload: { text, priority, location }, // Include location in payload
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});

export const login = (user) => ({
  type: LOGIN,
  payload: { user },
});

export const logout = () => ({
  type: LOGOUT,
});

export const signup = (userData) => ({
  type: SIGNUP,
  payload: userData
});
export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

// Action for successfully fetched todos
export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

// Action for failed fetch
export const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  error,
});
