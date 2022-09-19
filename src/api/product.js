import axiosClient from "./axiosClient";

export const getProducts = () => {
  return axiosClient.get("/products");
};

export const createProduct = () => {
  return axiosClient.put("/product/create");
};
