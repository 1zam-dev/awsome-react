import { combineReducers, legacy_createStore as createStore } from "redux";
import { todoReducer } from "./todo";

const reducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(reducer);

export { store };
