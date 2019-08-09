import { TODO } from "../actionTypes";

export const fetchTodoRequest = data => ({
  type: TODO.REQUEST,
  data
});

export const fetchTodoSuccess = data => ({
  type: TODO.SUCCESS,
  data
});

export const fetchTodoFailed = data => ({
  type: TODO.FAILED,
  data
});
