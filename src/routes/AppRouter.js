import React from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import PrivateLayout from "../layout/PrivateLayout";
import About from "../page/about/about";
import ErrorNotFound from "../page/error/NotFound";
import Home from "../page/home/home";
import Product from "../page/product/Product";
import Products from "../page/products/Products";
import Todo from "../page/todo/todo";
import NewTodo from "../page/newTodo/todo";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="todo" element={<Todo />} />
        <Route path="new-todo" element={<NewTodo />} />
        <Route path="product" element={<Products />}></Route>
        <Route path="product/:productId" element={<Product />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Route>
    </Routes>
  );
}
