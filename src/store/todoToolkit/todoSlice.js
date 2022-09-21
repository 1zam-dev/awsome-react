import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      const nextState = [...state];
      nextState.splice(action.payload, 1);
      return nextState;
    },
  },
});

const { actions, reducer } = todoSlice;

export const { addTodo, removeTodo } = actions;

export default reducer;
