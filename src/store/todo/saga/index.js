import { call, put, takeLatest } from "redux-saga/effects";
import { TODO } from "../actionTypes";
import getTodo from "../../../api/todo";

function* fetchTodo(action) {
  try {
    const todos = yield call(getTodo);
    yield put({ type: TODO.SUCCESS, data: todos.data });
  } catch (e) {
    yield put({ type: TODO.FAILED, error: e.message });
  }
}

function* mySaga() {
  yield takeLatest(TODO.REQUEST, fetchTodo);
}

export default mySaga;