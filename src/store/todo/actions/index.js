import { TODO } from "../actionTypes";

export const fetchTodoRequest = () => ({
  type: TODO.REQUEST
});

export const fetchTodoSuccess = data => ({
  type: TODO.SUCCESS,
  data
});

export const fetchTodoFailed = data => ({
  type: TODO.FAILED,
  data
});
