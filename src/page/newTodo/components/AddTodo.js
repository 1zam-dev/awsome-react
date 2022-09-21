import { Button, Col, Input, Row } from "antd";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todoToolkit/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (!text) {
      return;
    }
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <Row>
      <Col>
        <Input
          placeholder="Enter todo"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </Col>
      <Col>
        <Button onClick={handleAddTodo}>Add</Button>
      </Col>
    </Row>
  );
}

export default AddTodo;
