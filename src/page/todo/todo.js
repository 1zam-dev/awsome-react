import { Col, Row, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import FilterGroupButtons from "./components/FilterGroupButtons";
import TodoList from "./components/TodoList";

// actions
// reducer
// store

// Hooks
// useSelector - select value on state redux
// useDispatch - dispatch action to store redux

// connect()() HOC map state va dispatch cho component

export default function Todo() {
  const state = useSelector((state) => state.todo);

  console.log(state);

  return (
    <Space wrap size={8} direction={"vertical"}>
      <AddTodo />
      <FilterGroupButtons />
      <TodoList />
    </Space>
  );
}
