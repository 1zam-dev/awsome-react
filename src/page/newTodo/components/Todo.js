import { Button, Col, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../../store/todoToolkit/todoSlice";

export default function Todo({ id, text }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeTodo(id));
  };

  return (
    <Row gutter={16}>
      <Col>
        <Button onClick={handleRemoveItem}>Delete</Button>
      </Col>
      <Col>
        <p>{text}</p>
      </Col>
    </Row>
  );
}
