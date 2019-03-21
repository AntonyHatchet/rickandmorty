import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "../reducers";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { State, Actions } from "../types";

const rootReducer = combineReducers(reducers);

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<State, Actions>)
);
