import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "./types";

const initState = {
  loading: false,
  products: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        loading: true,
        products: [],
      };
    case GET_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    default:
      throw new Error("type did not defined.");
  }
};

export { initState, productReducer };
