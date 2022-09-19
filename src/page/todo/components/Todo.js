import { Col, Row } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import React from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../../store/todo";

export default function Todo({ id, text, completed }) {
  const dispatch = useDispatch();

  const handleToggleItem = () => {
    dispatch(todoActions.toggleTodo(id));
  };
  return (
    <Row gutter={16}>
      <Col>
        <Checkbox checked={completed} onClick={handleToggleItem} />
      </Col>
      <Col>
        <p>{text}</p>
      </Col>
    </Row>
  );
}
