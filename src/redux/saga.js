import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './actionTypes';
import { fetchTodosApi } from '../redux/todoApi'; // Assuming you have an API helper to fetch todos

// Worker saga for fetching todos
function* fetchTodos() {
  try {
    const todos = yield call(fetchTodosApi); // Call the API
    yield put({ type: FETCH_TODOS_SUCCESS, payload: todos }); // Dispatch success action
  } catch (error) {
    yield put({ type: FETCH_TODOS_FAILURE, error: error.message }); // Dispatch failure action
  }
}

// Watcher saga to listen for fetch todos request action
function* watchFetchTodos() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
}

// Root saga that combines all the sagas
export default function* rootSaga() {
  yield watchFetchTodos();
}
