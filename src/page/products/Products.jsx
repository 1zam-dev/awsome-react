import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <h2>List Products</h2>
      </main>
      <nav>
        {Array(10)
          .fill()
          .map((value, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(`/product/${index}`);
              }}
            >
              Product {index}
            </button>
          ))}
      </nav>
    </>
  );
}

export default Products;
