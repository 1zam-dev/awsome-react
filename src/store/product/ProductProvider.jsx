import React, { useReducer } from "react";
import { initState, productReducer } from "./productReducer";

export const ProductContext = React.createContext({});

export default function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initState);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {children}
    </ProductContext.Provider>
  );
}
