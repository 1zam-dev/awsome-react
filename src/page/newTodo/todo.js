import { Space } from "antd";
import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

// actions
// reducer
// store

// Hooks
// useSelector - select value on state redux
// useDispatch - dispatch action to store redux

// connect()() HOC map state va dispatch cho component

export default function NewTodo() {
  return (
    <Space wrap size={8} direction={"vertical"}>
      <AddTodo />
      {/* <FilterGroupButtons /> */}
      <TodoList />
    </Space>
  );
}
