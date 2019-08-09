import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeEnhancers } from "../constants";

import todoReducer from "./todo/reducers";
import mySaga from './todo/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ todo: todoReducer }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

export default store;
