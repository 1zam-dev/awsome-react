import { useContext, useEffect } from "react";
import { getProducts } from "../../api/product";
import { ProductContext } from "./ProductProvider";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "./types";

export default function useProductStore() {
  const [state, dispatch] = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: GET_PRODUCT });
        const res = await getProducts();
        if (res.status === 200 && res.data) {
          dispatch({ type: GET_PRODUCT_SUCCESS, payload: res?.data });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return [state, dispatch];
}
