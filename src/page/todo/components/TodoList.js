import React from "react";
import { useSelector } from "react-redux";
import { VisibilityFilters } from "../../../store/todo/actionTypes";
import Todo from "./Todo";

export default function TodoList() {
  const todo = useSelector((state) => state.todo);
  const { todos, visibilityFilter } = todo;

  const RenderTodo = ({ id, text, completed }) => (
    <Todo key={id} id={id} text={text} completed={completed} />
  );

  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed).map(RenderTodo);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed).map(RenderTodo);
    default:
      return todos.map(RenderTodo);
  }
}
