import { Input, Space } from "antd";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const [searchQuery, setSearchQuery] = useState("");

  const todos = useSelector((state) => state.newTodo);

  const RenderTodo = (value, index) => (
    <Todo key={index} id={index} text={value} />
  );

  const todoResult = useMemo(() => {
    return todos?.filter((value) => {
      const text = value?.toLowerCase();
      const searchText = searchQuery.toLowerCase();
      return text.includes(searchText);
    });
  }, [searchQuery, todos]);

  return (
    <Space size={8} direction={"vertical"}>
      <Input
        placeholder="Search Item"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      />
      {todoResult && todoResult?.map(RenderTodo)}
    </Space>
  );
}
