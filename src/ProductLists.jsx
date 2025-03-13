import React from "react";
import ProductItems from "./ProductItems";

function ProductLists({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductLists;
