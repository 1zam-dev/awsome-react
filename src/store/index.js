import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { todoReducer } from "./todo";
import todoToolkitReducer from "./todoToolkit/todoSlice";

// const reducer = combineReducers({
//   todo: todoReducer,
// });

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// configureStore - lam cac nhiem vu: createStore, combineReducer
const store = configureStore({
  reducer: {
    todo: todoReducer,
    newTodo: todoToolkitReducer,
  },
});

export { store };
