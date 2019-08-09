import { createStore, combineReducers } from "redux";
import { REDUX_DEVTOOLS } from "../constants";

import todoReducer from "./todo/reducers";

const store = createStore(
  combineReducers({ todo: todoReducer }),
  REDUX_DEVTOOLS
);

export default store;
