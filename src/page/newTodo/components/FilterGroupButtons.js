import { Button, Col, Row, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../../../store/todo/actions";
import { VisibilityFilters } from "../../../store/todo/actionTypes";

export default function FilterGroupButtons() {
  const activeFilter = useSelector((state) => state.todo.visibilityFilter);
  const dispatch = useDispatch();

  const handleSetFilter = (value) => () => {
    dispatch(setVisibilityFilter(value));
  };

  return (
    <Row>
      <Space wrap size={8}>
        {Object.values(VisibilityFilters).map((value, index) => {
          return (
            <Col key={index}>
              <Button
                type={value === activeFilter ? "primary" : undefined}
                onClick={handleSetFilter(value)}
              >
                {value.replace(/_/g, " ")}
              </Button>
            </Col>
          );
        })}
      </Space>
    </Row>
  );
}
