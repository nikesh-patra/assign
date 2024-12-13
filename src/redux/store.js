import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'; // Import redux-saga
import todoReducer, { initialState } from './reducers';
import rootSaga from './saga'; // Import the rootSaga (we'll create this next)

// Load initial state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todoAppState');
    if (serializedState) {
      const parsedState = JSON.parse(serializedState);
      // Validate that todos is an array
      if (Array.isArray(parsedState.todos)) {
        return parsedState;
      } else {
        return { ...initialState, todos: [] }; // Fallback to default state if invalid
      }
    } else {
      return { ...initialState }; // Return the default initial state if nothing is found
    }
  } catch (err) {
    console.error("Could not load state", err);
    return { ...initialState }; // Return the default state on error
  }
};


// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todoAppState', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Load persisted state
const persistedState = loadState();

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store with the persisted state and apply the saga middleware
const store = createStore(
  todoReducer,
  persistedState,
  applyMiddleware(sagaMiddleware) // Apply the saga middleware
);

// Run the root saga
sagaMiddleware.run(rootSaga);

// Subscribe to store updates and save state to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
