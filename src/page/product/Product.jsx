import React from "react";
import { Link, useParams } from "react-router-dom";

function Product() {
  let params = useParams();
  console.log(params);
  return (
    <>
      <main>
        <h1>Product id: {params.productId}</h1>
      </main>
      <nav>
        <Link to="/product">Product</Link>
      </nav>
    </>
  );
}

export default Product;
