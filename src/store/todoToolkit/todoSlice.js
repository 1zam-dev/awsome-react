import { createSlice } from "@reduxjs/toolkit";

// redux-toolkit loai bo boilerplate of code (actions, reducer, createStore)
// redux-toolkit tich hop san nhung dependences ho tro cho phat trien du an
// redux-toolkit tien dung cho nhung duu an co reducers nhieu va phuc tap



// createSlice - tao ra 1 reducer, action, side-effect cho actions
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
